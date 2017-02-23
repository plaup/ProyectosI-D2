var express 	= require('express');
var router		= express.Router();
var mongoose	= require('mongoose');
var Alumnos		= mongoose.model('Alumnos');

/* GET obtener todos los alumnos. */
router.get('/', function(req, res, next) {
	Alumnos.find( function( err, almnos ){
		if(err) res.send(500, err.message);

		console.log(almnos);
		res.status(200).jsonp(almnos);
	} );
});

/* GET obtener alumno por id. */
router.get('/:id', function(req, res, next) {
	Alumnos.findOne( { matricula: req.params.id }, function( err, almno ){
		if(err) res.send(500, err.message);

		console.log(almno);
		res.status(200).jsonp(almno);
	} );
});

/* POST insertar un nuevo alumno. */
router.post('/:id', function(req, res, next) {
	var almno = new Alumnos({
		matricula: req.body.matricula,
		nombreCompleto: {
			nombre: req.body.nombreCompleto.nombre,
			aPaterno: req.body.nombreCompleto.aPaterno,
			aMaterno: req.body.nombreCompleto.aMaterno
		},
		sexo: req.body.sexo,
		fechaNacimiento: new Date(req.body.fechaNacimiento),
		fechaIngreso: new Date()
	});

	console.log(almno);
	console.log('-------');
	console.log(req.body);

	almno.save(function(err, al) {
		if(err) return res.status(500).send( err.message);
		res.status(200).jsonp(almno._id);
	});

});

/* PUT actualiza un alumno que ya existe. */
router.put('/:id', function(req, res, next) {
	Alumnos.findOne( { matricula: req.params.id }, function(err, almno){
		almno.matricula = req.body.matricula;
		almno.nombreCompleto = {
			nombre: req.body.nombreCompleto.nombre,
			aPaterno: req.body.nombreCompleto.aPaterno,
			aMaterno: req.body.nombreCompleto.aMaterno
		};
		almno.sexo = req.body.sexo;
		almno.fechaNacimiento = new Date(req.body.fechaNacimiento);
		almno.fechaIngreso = new Date(req.body.fechaIngreso);

		almno.save(function(err, almno) {
			if(err) return res.status(500).send( err.message);
			res.status(200).jsonp(almno);
		});
	} )
});

/* DELETE actualiza un alumno que ya existe. */
router.delete('/:id', function(req, res, next) {
	Alumnos.findOne( { matricula: req.params.id }, function(err, almno){
		almno.remove(function(err, almno) {
			if(err) return res.status(500).send( err.message);
			res.status(200).send();
		});
	} )
});

module.exports = router;