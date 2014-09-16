$(document).on('ready', function(){

	$('#btn1').on('click', function(){
		$('#titulo').addClass('titulo');
		$('#art1').addClass('col-xs-12');
		$('#art2').addClass('col-xs-12');
		$('#art3').addClass('col-xs-12');
		$('#container').addClass('body');
	});
	
	$('#seccion').on('mouseover', function(){
		$('#seccion').addClass('seccion');
	});

});