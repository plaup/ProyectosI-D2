//var periodos 


(	function($)
{
	$(function()
	{
		window.profesores = {};
		window.asignaturas = {};

		var asi = [{"id_asignatura":1,"codigo":"FGUM-001","fk_carrera":1,"fk_area":4,"creditos":4,"nombre":"Formaci\u00f3n Humana y Social","nombre_corto":"Formaci\u00f3n Humana y Soc.","h_teoria":2,"h_practica":2,"h_independiente":0,"nivel":"basico","numPeriodoMin":3},{"id_asignatura":2,"codigo":"FGUM-002","fk_carrera":1,"fk_area":4,"creditos":4,"nombre":"Desarrollo de Habilidades del Pensamiento Complejo","nombre_corto":"DHPC","h_teoria":1,"h_practica":3,"h_independiente":0,"nivel":"basico","numPeriodoMin":2},{"id_asignatura":3,"codigo":"FGUM-003","fk_carrera":1,"fk_area":4,"creditos":4,"nombre":"Desarrollo de Habilidades en el uso de la Tecnolog\u00eda, la Informaci\u00f3n y la Comunicaci\u00f3n ","nombre_corto":"DHTIC","h_teoria":0,"h_practica":4,"h_independiente":0,"nivel":"basico","numPeriodoMin":1},{"id_asignatura":4,"codigo":"FGUM-008","fk_carrera":1,"fk_area":4,"creditos":4,"nombre":" Innovaci\u00f3n y Talento Emprendedor","nombre_corto":"Innovaci\u00f3n y Talento","h_teoria":3,"h_practica":1,"h_independiente":0,"nivel":"basico","numPeriodoMin":3},{"id_asignatura":5,"codigo":"ITIM-001","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"Introducci\u00f3n a las Matem\u00e1ticas","nombre_corto":"Introd. a las Matem\u00e1ticas","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"basico","numPeriodoMin":1},{"id_asignatura":6,"codigo":"ITIM-002","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"\u00c1lgebra Lineal con Aplicaciones","nombre_corto":"Alg. Lineal con Aplic.","h_teoria":4,"h_practica":1,"h_independiente":0,"nivel":"basico","numPeriodoMin":2},{"id_asignatura":7,"codigo":"ITIM-003","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"C\u00e1lculo Diferencial e Integral","nombre_corto":"C\u00e1lculo Dif. e Integ.","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"basico","numPeriodoMin":2},{"id_asignatura":8,"codigo":"ITIM-004","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"C\u00e1lculo Avanzado","nombre_corto":"C\u00e1lculo Avanzado","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"basico","numPeriodoMin":3},{"id_asignatura":9,"codigo":"ITIM-005","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"Matem\u00e1ticas Discretas","nombre_corto":"Matem\u00e1ticas Discretas","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"basico","numPeriodoMin":3},{"id_asignatura":10,"codigo":"ITIM-006","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"F\u00edsica","nombre_corto":"F\u00edsica","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"basico","numPeriodoMin":3},{"id_asignatura":11,"codigo":"ITIM-007","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"Probabilidad y Estad\u00edstica","nombre_corto":"Probab. y Estad\u00edstica","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"basico","numPeriodoMin":4},{"id_asignatura":12,"codigo":"ITIM-008","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"Investigaci\u00f3n de Operaciones","nombre_corto":"Invest. de Operaciones","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"basico","numPeriodoMin":4},{"id_asignatura":13,"codigo":"ITIM-009","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"Circuitos El\u00e9ctrico","nombre_corto":"Circuitos El\u00e9ctricos","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"basico","numPeriodoMin":4},{"id_asignatura":14,"codigo":"ITIM-010","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Introducci\u00f3n a la Programaci\u00f3n","nombre_corto":"Introducci\u00f3n de la Prog.","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"basico","numPeriodoMin":1},{"id_asignatura":15,"codigo":"ITIM-011","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Programaci\u00f3n Orientada a Objetos I","nombre_corto":"Programaci\u00f3n O. O. I","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"basico","numPeriodoMin":2},{"id_asignatura":16,"codigo":"ITIM-012","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Programaci\u00f3n Orientada a Objetos II","nombre_corto":"Programaci\u00f3n O. O. II","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"basico","numPeriodoMin":3},{"id_asignatura":17,"codigo":"ITIM-013","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Ingenier\u00eda de Software I","nombre_corto":"Ing. de Software I","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"basico","numPeriodoMin":4},{"id_asignatura":18,"codigo":"ITIM-014","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Fundamentos de la Programaci\u00f3n L\u00f3gica","nombre_corto":"Fund. de la Pro. L\u00f3gica","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"basico","numPeriodoMin":4},{"id_asignatura":19,"codigo":"CCOM-259","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Graficaci\u00f3n","nombre_corto":"Graficaci\u00f3n","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"basico","numPeriodoMin":4},{"id_asignatura":20,"codigo":"ITIM-015","fk_carrera":1,"fk_area":3,"creditos":5,"nombre":"Sistemas Operativos","nombre_corto":"Sistemas Operativos","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"basico","numPeriodoMin":4},{"id_asignatura":21,"codigo":"TCDM-001","fk_carrera":1,"fk_area":5,"creditos":2,"nombre":"Herramientas de Aprendizaje Aut\u00f3nomo","nombre_corto":"HAA","h_teoria":0,"h_practica":2,"h_independiente":0,"nivel":"basico","numPeriodoMin":1},{"id_asignatura":22,"codigo":"TCDM-002","fk_carrera":1,"fk_area":5,"creditos":4,"nombre":"Redacci\u00f3n","nombre_corto":"Redacci\u00f3n","h_teoria":2,"h_practica":2,"h_independiente":0,"nivel":"basico","numPeriodoMin":1},{"id_asignatura":23,"codigo":"IDTI-200","fk_carrera":1,"fk_area":6,"creditos":5,"nombre":"Ingenier\u00eda de Software II","nombre_corto":"Ing. de Software II","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"formativo","numPeriodoMin":6},{"id_asignatura":24,"codigo":"IDTI-201","fk_carrera":1,"fk_area":6,"creditos":5,"nombre":"Administraci\u00f3n de Redes","nombre_corto":"Adm\u00f3n. de Redes","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":7},{"id_asignatura":25,"codigo":"IDTI-202","fk_carrera":1,"fk_area":6,"creditos":5,"nombre":"Inteligencia de Negocios","nombre_corto":"Intelig. de Negocios","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"formativo","numPeriodoMin":8},{"id_asignatura":26,"codigo":"IDTI-203","fk_carrera":1,"fk_area":6,"creditos":5,"nombre":"Programaci\u00f3n de Dispositivos M\u00f3viles","nombre_corto":"Pr. de Disp. M\u00f3viles","h_teoria":2,"h_practica":3,"h_independiente":0,"nivel":"formativo","numPeriodoMin":9},{"id_asignatura":27,"codigo":"IDTI-204","fk_carrera":1,"fk_area":6,"creditos":5,"nombre":"Trabajo Colaborativo","nombre_corto":"Trabajo Colaborativo","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"formativo","numPeriodoMin":8},{"id_asignatura":28,"codigo":"IDDM-001","fk_carrera":1,"fk_area":6,"creditos":5,"nombre":"Administraci\u00f3n de Proyectos","nombre_corto":"Adm\u00f3n. de Proyectos","h_teoria":2,"h_practica":2,"h_independiente":1,"nivel":"formativo","numPeriodoMin":7},{"id_asignatura":29,"codigo":"IDDM-002","fk_carrera":1,"fk_area":6,"creditos":5,"nombre":"Proyectos I+D I","nombre_corto":"Proyectos I+D I","h_teoria":2,"h_practica":2,"h_independiente":1,"nivel":"formativo","numPeriodoMin":9},{"id_asignatura":30,"codigo":"IDDM-003","fk_carrera":1,"fk_area":6,"creditos":5,"nombre":"Proyectos I+D II","nombre_corto":"Proyectos I+D II","h_teoria":2,"h_practica":3,"h_independiente":0,"nivel":"formativo","numPeriodoMin":10},{"id_asignatura":31,"codigo":"SSTI-900","fk_carrera":1,"fk_area":2,"creditos":10,"nombre":"Servicio Social","nombre_corto":"Servicio Social","h_teoria":0,"h_practica":0,"h_independiente":10,"nivel":"formativo","numPeriodoMin":8},{"id_asignatura":32,"codigo":"PPTI-901","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Pr\u00e1ctica Profesional","nombre_corto":"Pr\u00e1ctica Profesional","h_teoria":0,"h_practica":0,"h_independiente":5,"nivel":"formativo","numPeriodoMin":10},{"id_asignatura":33,"codigo":"ITIM-250","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"M\u00e9todos Estad\u00edstico","nombre_corto":"M\u00e9todos Estad\u00edsticos","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":34,"codigo":"CCOM-258","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"Redes de Computadoras","nombre_corto":"Redes de Compu.","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":35,"codigo":"ITIM-251","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"Redes y Servicios","nombre_corto":"Redes y Servicios","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":6},{"id_asignatura":36,"codigo":"ITIM-252","fk_carrera":1,"fk_area":1,"creditos":5,"nombre":"Dise\u00f1o L\u00f3gico y Digital","nombre_corto":"Dis. L\u00f3gico y Dig.","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":37,"codigo":"ITIM-253","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Dise\u00f1o de Bases de Datos","nombre_corto":"Dise\u00f1o de BD","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":38,"codigo":"ITIM-254","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Administraci\u00f3n de Bases de Datos","nombre_corto":"Adm\u00f3n. de BD","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":6},{"id_asignatura":39,"codigo":"ITIM-255","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Teor\u00eda General de Sistemas y Sistemas de Informaci\u00f3n","nombre_corto":"TG de Sist. y Sist. de I.","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"formativo","numPeriodoMin":6},{"id_asignatura":40,"codigo":"ICCM-605","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Ingenier\u00eda Web","nombre_corto":"Ingenier\u00eda Web","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":7},{"id_asignatura":41,"codigo":"ITIM-256","fk_carrera":1,"fk_area":2,"creditos":5,"nombre":"Modelado de Procesos de Negocio","nombre_corto":"Mod. de Pr. de Negocios","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"formativo","numPeriodoMin":7},{"id_asignatura":42,"codigo":"ITIM-257","fk_carrera":1,"fk_area":3,"creditos":5,"nombre":"Tecnolog\u00edas Web","nombre_corto":"Tecnolog\u00edas Web","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":43,"codigo":"ITIM-258","fk_carrera":1,"fk_area":3,"creditos":5,"nombre":"Administraci\u00f3n de Sistemas Operativos","nombre_corto":"Adm\u00f3n de Sist. Operativos","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":44,"codigo":"ITIM-259","fk_carrera":1,"fk_area":3,"creditos":5,"nombre":"C\u00f3mputo Distribuido","nombre_corto":"C\u00f3mputo Distribuido","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":6},{"id_asignatura":45,"codigo":"ITIM-260","fk_carrera":1,"fk_area":3,"creditos":5,"nombre":"M\u00e9todos Formales","nombre_corto":"M\u00e9todos Formales","h_teoria":5,"h_practica":0,"h_independiente":0,"nivel":"formativo","numPeriodoMin":7},{"id_asignatura":46,"codigo":"ITIM-261","fk_carrera":1,"fk_area":3,"creditos":5,"nombre":"Miner\u00eda de Datos","nombre_corto":"Miner\u00eda de Datos","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":7},{"id_asignatura":47,"codigo":"ICCM-612","fk_carrera":1,"fk_area":3,"creditos":5,"nombre":"Interacci\u00f3n Humano-Computadora","nombre_corto":"IHC","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":7},{"id_asignatura":48,"codigo":"ITIM-262","fk_carrera":1,"fk_area":3,"creditos":5,"nombre":"Servicios Web","nombre_corto":"Servicios Web","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":8},{"id_asignatura":49,"codigo":"ITIM-600","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Agentes","nombre_corto":"Agentes","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":50,"codigo":"ITIM-601","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Desarrollo Basado en Modelos","nombre_corto":"Des. Basado en Modelos","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":51,"codigo":"ITIM-602","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"C\u00f3mputo Orientado a Servicios","nombre_corto":"C\u00f3mp. Orient. a Servicios","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":52,"codigo":"ITIM-603","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Programaci\u00f3n Declarativa","nombre_corto":"Prog. Declarativa","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":53,"codigo":"CCOM-605","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Web Sem\u00e1ntica","nombre_corto":"Web Sem\u00e1ntica","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":54,"codigo":"ICCM-606","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Tratamiento de Informaci\u00f3n","nombre_corto":"Tratamiento de Info.","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":55,"codigo":"ITIM-604","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Sistemas de Informaci\u00f3n Geogr\u00e1fica","nombre_corto":"Sistemas de Inf. Geog.","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":56,"codigo":"ITIM-605","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Ingenier\u00eda de Conocimiento","nombre_corto":"Ingenier\u00eda de Conoc.","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":57,"codigo":"ITIM-606","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Inteligencia Artificial","nombre_corto":"Inteligencia Artificial","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":58,"codigo":"ICCM-613","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Procesamiento Digital de Im\u00e1genes","nombre_corto":"Proc. Digital de Im\u00e1genes","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":59,"codigo":"ICCM-616","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"C\u00f3mputo Ubicuo","nombre_corto":"C\u00f3mputo Ubicuo","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":60,"codigo":"ITIM-607","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"T\u00e9cnicas de Razonamiento Inteligente","nombre_corto":"T\u00e9c. de Razo. Inteligente","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":61,"codigo":"ITIM-608","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Aprendizaje Artificial","nombre_corto":"Aprendizaje Artificial","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":62,"codigo":"ITIM-609","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Gesti\u00f3n Electr\u00f3nica","nombre_corto":"Gesti\u00f3n Electr\u00f3nica","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":63,"codigo":"ITIM-610","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Log\u00edstica","nombre_corto":"Log\u00edstica","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":64,"codigo":"ITIM-611","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Teor\u00eda de Decisiones","nombre_corto":"Teor\u00eda de Decisiones","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":65,"codigo":"ITIM-612","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Lenguajes y Traductores","nombre_corto":"Lenguajes y Traduct.","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":66,"codigo":"ITIM-613","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Organizaci\u00f3n de Computadoras","nombre_corto":"Organiz. de Comput.","h_teoria":3,"h_practica":2,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":67,"codigo":"ITIM-614","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Desarrollo de Sitios Web","nombre_corto":"Des. de Sitios Web","h_teoria":1,"h_practica":4,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":68,"codigo":"ITIM-615","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Tecnolog\u00edas Emergentes para las TICS","nombre_corto":"Tecn. Emerg.para TICS","h_teoria":1,"h_practica":4,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":69,"codigo":"ITIM-616","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Mantenimiento de Equipo y Redes de Computadora","nombre_corto":"Mant. de Eq. y R. de Comp","h_teoria":1,"h_practica":4,"h_independiente":0,"nivel":"formativo","numPeriodoMin":5},{"id_asignatura":70,"codigo":"DSGM-616","fk_carrera":1,"fk_area":7,"creditos":3,"nombre":"Arte y Representacion I","nombre_corto":"Arte y Repr. I","h_teoria":3,"h_practica":0,"h_independiente":0,"nivel":"formativo","numPeriodoMin":6},{"id_asignatura":71,"codigo":"ICCM-614","fk_carrera":1,"fk_area":7,"creditos":5,"nombre":"Animaci\u00f3n por Computadora","nombre_corto":"Animaci\u00f3n por Comp.","h_teoria":2,"h_practica":3,"h_independiente":0,"nivel":"formativo","numPeriodoMin":8},{"id_asignatura":72,"codigo":"DSGM-022","fk_carrera":1,"fk_area":7,"creditos":4,"nombre":"Mercadotecnia","nombre_corto":"Mercadotecnia","h_teoria":4,"h_practica":0,"h_independiente":0,"nivel":"formativo","numPeriodoMin":6}];
		var pre = [[],[],[],[],[],[],[5],[5],[7],[6],[5],[8],[6],[10],[],[14],[15],[16],[9],[6,16],[16],[],[],[17,37],[35],[41,46],[48],[47],[],[28],[29],[],[],[11],[11],[34],[13],[17],[37],[17],[23,42],[39],[17],[20],[17],[9],[38],[17],[40,44],[44],[40],[40],[18],[45,47],[46],[25],[18,45],[18],[19],[27,44],[18],[54],[27,49],[12],[46],[43],[36],[],[],[],[],[],[]];

		var areas = ['','58ae3e73903a38174cdefc6e','58ae3e73903a38174cdefc6f','58ae3e73903a38174cdefc70','58ae3e73903a38174cdefc71','58ae3e73903a38174cdefc72','58ae3e73903a38174cdefc73','58ae3e73903a38174cdefc74'];
		var periodos = ["58ae4294903a38174cdefc76","58ae4294903a38174cdefc78","58ae4294903a38174cdefc77","58ae4294903a38174cdefc79","58ae4294903a38174cdefc75","58ae4294903a38174cdefc7a","58ae4295903a38174cdefc7b","58ae4295903a38174cdefc7c","58ae4295903a38174cdefc7d","58ae4295903a38174cdefc7e","58ae4295903a38174cdefc7f","58ae4295903a38174cdefc80","58ae4295903a38174cdefc81","58ae4295903a38174cdefc82","58ae4295903a38174cdefc83","58ae4295903a38174cdefc84"];


		for( var i = 0; i < asi.length; i++ )
		{
			var asignatura = {
				codigo: asi[i].codigo,
				creditos: asi[i].creditos,
				hor
				prerrequisitos: pre[i+1];
			}
			window.asignaturas[asi[i].codigo.replace('-',' ')] = asignatura;
			$.post('./asignaturasRest',,function(){

			});
		}

		$.get('json/cursos.json','',function(data)
			{
				//$('#cursos').text(JSON.stringify(data));
				for( var i = 0; i < data.length; i++ )
				{
					/*var tabla = $('<table/>').append(
							$('<caption/>').text( 'Hoja' + (i + 1) ) ).append(
							$('<thead/>').append( $('<tr/>').append( 
								$('<th/>').text('Materia') ).append(
								$('<th/>').text('Clave') ).append(
								$('<th/>').text('Sección') ).append(
								$('<th/>').text('NRC') ).append(
								$('<th/>').text('Días') ).append(
								$('<th/>').text('Hora') ).append(
								$('<th/>').text('Salón') ).append(
								$('<th/>').text('Profesor') ) )
						);
					var x = $('<ul/>');
					$('#cursos').append(tabla);
					$('#cursos').append(x);
					var datos = $('<tbody/>');*/
					for (var j = 0; j < data[i].length; j++) {
						var nomProf = data[i][j].profesor;
						var posGuion = nomProf.indexOf('-');
						var posEsp = nomProf.indexOf( ' ', posGuion + 2 );
						var str = posEsp >= 0? nomProf.substr(0, posEsp + 1): nomProf;

						var nom = posEsp >= 0? nomProf.substr(posEsp + 1): '';
						var aP = nomProf.substr(0, posGuion - 1);
						var aM = posEsp >= 0? nomProf.substr(posGuion + 2, posEsp-(posGuion + 1)): nomProf.substr(posGuion + 2);

						if( nom !== '' )
						{
							nom = nom.charAt(0) + nom.slice(1).toLowerCase();
						}

						aP = aP.charAt(0) + aP.slice(1).toLowerCase();
						aM = aM.charAt(0) + aM.slice(1).toLowerCase();

						window.profesores[str] = 
						{
							dni: 0,
							nombreCompleto: { 
								nombre: nom,
								aPaterno: aP,
								aMaterno: aM
							},
							sexo: 'masculino',
							fechaNacimiento: new Date()
						};
						/*x.append($('<li/>').text(str + '|'));
						datos.append( $('<tr/>').append( 
							$('<td/>').text(data[i][j].materia) ).append( 
							$('<td/>').text(data[i][j].clave) ).append( 
							$('<td/>').text(data[i][j].seccion) ).append( 
							$('<td/>').text(data[i][j].nrc) ).append( 
							$('<td/>').text(data[i][j].dias) ).append( 
							$('<td/>').text(data[i][j].hora) ).append( 
							$('<td/>').text(data[i][j].salon) ).append( 
							$('<td/>').text(data[i][j].profesor) ) );*/
					}
					//tabla.append(datos);
				}
				var dni = 1000000000;
				var arr = [];
				for( var k in window.profesores )
				{
					window.profesores[k].dni = dni++;
					arr[dni - 1000000000] = k;
					$.post('./profesoresRest/'+dni,window.profesores[k],function(data){
						//$('#cursos').append($('<p/>').text(JSON.stringify(data)));
						window.profesores[arr[data.dni-1000000000]]._id = data._id; 
					},'json')
				}

				setTimeout(function() {$('#cursos').text(JSON.stringify(window.profesores));}, 1000);				
			},'json');
		/*$.post('./profesoresRest/1000000013',
		{
			dni: 1000000013,
			'nombreCompleto': {
				nombre: 'al',
				aPaterno: 'q',
				aMaterno: 'w'
			},
			sexo: 'femenino',
			fechaNacimiento: '1950-02-02'
		});
		$.getJSON('./profesoresRest',function(data)
		{
			//$('body').append('<p/>').text(JSON.stringify(data));
			var d = $('#datos')
			d.empty();

			for( var k in data )
			{
				var fecha = new Date();
				var nac = new Date( data[k].fechaNacimiento );
				var timeDiff = Math.abs(fecha.getTime() - nac.getTime());
				var edad = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365.25));
				d.append( $('<tr/>' ).
					append( $('<td/>').text( data[k].dni ) ).
					append( $('<td/>').text( data[k].nombreCompleto.nombre + ' ' + data[k].nombreCompleto.aPaterno + ' ' + data[k].nombreCompleto.aMaterno ) ).
					append( $('<td/>').text( data[k].sexo ) ).
					append( $('<td/>').text( edad + ' años' ) ) );
			}
		});*/
	});
} )( jQuery );