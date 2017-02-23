var express 	= require('express');
var router		= express.Router();
var mongoose	= require('mongoose');
var Cursos		= mongoose.model('Cursos');

ObjectId = mongoose.Types.ObjectId;

/* GET obtener todos los cursos. */
router.get('/', function(req, res, next) {
	Cursos.find( function( err, cursos ){
		if(err) res.send(500, err.message);

		res.status(200).jsonp(cursos);
	} );
});

/* GET obtener curso por id. */
router.get('/:id', function(req, res, next) {
	Cursos.findOne( { nrc: req.params.id }, function( err, curso ){
		if(err) res.send(500, err.message);

		res.status(200).jsonp(curso);
	} );
});

/* POST insertar un nuevo curso. */
router.post('/:id', function(req, res, next) {
	var curso = new Cursos({
		nrc: 		req.body.nrc,
		cupo: 		req.body.cupo,
		profesor: 	ObjectId.fromString(req.body.profesor),
		periodo: 	ObjectId.fromString(req.body.periodo),
		asignatura: ObjectId.fromString(req.body.asignatura)
	});

	curso.save(function(err, al) {
		if(err) return res.status(500).send( err.message);
		res.status(200).jsonp(curso._id);
	});

});

/* PUT actualiza un curso que ya existe. */
router.put('/:id', function(req, res, next) {
	Cursos.findOne( { nrc: req.params.id }, function(err, curso){
		curso.nrc 			= req.body.nrc;
		curso.cupo			= req.body.cupo;
		curso.profesor		= ObjectId.fromString(req.body.profesor);
		curso.periodo		= ObjectId.fromString(req.body.periodo);
		curso.asignatura 	= ObjectId.fromString(req.body.asignatura);

		curso.save(function(err, curso) {
			if(err) return res.status(500).send( err.message);
			res.status(200).jsonp(curso);
		});
	} )
});

/* DELETE elimina un curso que ya existe. */
router.delete('/:id', function(req, res, next) {
	Cursos.findOne( { nrc: req.params.id }, function(err, curso){
		curso.remove(function(err, curso) {
			if(err) return res.status(500).send( err.message);
			res.status(200).send();
		});
	} )
});

module.exports = router;