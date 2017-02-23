var express		= require('express');
var router		= express.Router();
var mongoose	= require('mongoose');
var Alumnos		= mongoose.model('Alumnos');

/* GET home page. */
router.get('/', function(req, res, next) {
	Alumnos.find( function( err, almnos ){
		if(err) res.send(500, err.message);

		res.render('index', { 
			title: 'Express', 
			alumnos: almnos 
		});
	} );
});

module.exports = router;
