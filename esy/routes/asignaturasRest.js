var express 	= require('express');
var router		= express.Router();
var mongoose	= require('mongoose');
var Asignaturas	= mongoose.model('Asignaturas');

ObjectId = mongoose.Types.ObjectId;

/* GET obtener todos los asignaturas. */
router.get('/', function(req, res, next) {
	Asignaturas.find( function( err, asigs ){
		if(err) res.send(500, err.message);

		res.status(200).jsonp(asigs);
	} );
});

/* GET obtener asignatura por id. */
router.get('/:id', function(req, res, next) {
	Asignaturas.findOne( { codigo: req.params.id }, function( err, asig ){
		if(err) res.send(500, err.message);

		res.status(200).jsonp(asig);
	} );
});

/* POST insertar un nuevo asignatura. */
router.post('/:id', function(req, res, next) {
	console.log(req.body);
	/*var asig = new Asignaturas({
		codigo: 			req.body.codigo,
		creditos: 			req.body.creditos,
		nombre: 			req.body.nombre,
		horasTeoria: 		req.body.horasTeoria,
		horasPractica: 		req.body.horasPractica,
		horasIndependiente: req.body.horasIndependiente,
		nivel: 				req.body.nivel,
		periodoMinimo: 		req.body.periodoMinimo,
		carrera: 			ObjectId.fromString(req.body.carrera),
		area: 				ObjectId.fromString(req.body.area)
	});

	asig.save(function(err, al) {
		if(err) return res.status(500).send( err.message);
		res.status(200).jsonp(asig._id);
	});*/

});

/* PUT actualiza un asignatura que ya existe. */
router.put('/:id', function(req, res, next) {
	Asignaturas.findOne( { codigo: req.params.id }, function(err, asig){
		asig.codigo 				= req.body.codigo;
		asig.creditos 				= req.body.creditos;
		asig.nombre 				= req.body.nombre;
		asig.horasTeoria 			= req.body.horasTeoria;
		asig.horasPractica 			= req.body.horasPractica;
		asig.horasIndependiente 	= req.body.horasIndependiente;
		asig.nivel 					= req.body.nivel;
		asig.periodoMinimo 			= req.body.periodoMinimo;
		asig.carrera 				= ObjectId.fromString(req.body.carrera);
		asig.area 					= ObjectId.fromString(req.body.area);

		asig.save(function(err, asig) {
			if(err) return res.status(500).send( err.message);
			res.status(200).jsonp(asig);
		});
	} )
});

/* DELETE eliminar un asignatura que ya existe. */
router.delete('/:id', function(req, res, next) {
	Asignaturas.findOne( { codigo: req.params.id }, function(err, asig){
		asig.remove(function(err, asig) {
			if(err) return res.status(500).send( err.message);
			res.status(200).send();
		});
	} )
});

module.exports = router;