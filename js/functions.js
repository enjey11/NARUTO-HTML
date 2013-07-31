jQuery.initialize = function(){
	/* WIDTH PAGE - ARTICLE - SECTION */
	var WidthPage = $('body').width();
    //var ArticleWidth = WidthPage*4;
	//$('article').css({width:ArticleWidth});
	//$('article section').css({width:WidthPage});
	/* MARGIN BOX */
	$.marginBox('#boxContacto');
	$.marginBox('.boxHome-1');
	$.marginBox('.boxHome-2');
	$.marginBox('.boxNosotros');
	$.marginBox('.boxCarta');
};

jQuery.marginBox = function(boxId){
	/* HEIGHT CONTENT */
	var HeightPage = $('body').height() - 151;
	var HeightBox = $(boxId).height();
	var marginBoxId = ( HeightPage - HeightBox ) / 2;
	$(boxId).css({marginTop:marginBoxId});
}

$(window).resize(function() {
	$.initialize();
});

function goto(id, t){
	var WP = $('body').width();
	var MP = (WP - 960)/2;
	var NL = ($(id).position().left) - MP;
    //animate to the div id.
    //$('article').animate({"left": -($(id).position().left)}, 600);
    $('article').animate({"left": -NL}, 600);
    // remove "active" class from all links inside #nav
    $('nav li a').removeClass('active');
    // add active class to the current link
    $(t).addClass('active');
}

$(window).ready(function(){
	//inicializar
	$.initialize();
	// activar menu
	$('nav li:first-child a').addClass('active');
	// home al cargar pagina
	var WP1 = $('body').width();
	var MP1 = (WP1 - 960)/2;
	var NL1 = ($('#home').position().left) - MP1;
	$('article').animate({"left": -NL1}, 600);
	// validate
	$("#frm-contacto").validate({
		rules: {
			'nombre': {
				required:true,
				minlength: 6
            },
            'msj': { 
				required:true,
				minlength:15
			},
			'email':{
				required:true,
				email: true
			}
        },
        messages: {
			'nombre': {
				required: "El nombre es requerido",
				minlength: "El nombre no debe tener menos de 6 caracteres"
			},
			'msj': {
				required: "El mensaje es requerido",
				minlength: "El mensaje no debe tener menos de 15 caracteres"
			},
			'email': {
				required: "El correo es requerido"
			}
		},
		
	});
	// google map
});
