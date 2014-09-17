$(document).on('ready', function(){

	/*$('#btn1').on('click', function(){
		$('#titulo').addClass('titulo');
		$('#art1').addClass('col-xs-12');
		$('#art2').addClass('col-xs-12');
		$('#art3').addClass('col-xs-12');
		$('#container').addClass('body');
	});*/
	
	$('#btn1').on('click', function(){
		$('#art1 p').toggle('slow');
	});

	$('#btn2').on('click', function(){
		$('#art2 p').toggle('slow');
	});

	$('#btn3').on('click', function(){
		$('#art3 p').toggle('slow');
	});

	$('#seccion').on('mouseover', function(){
		$('#seccion').addClass('seccion');
	});

});