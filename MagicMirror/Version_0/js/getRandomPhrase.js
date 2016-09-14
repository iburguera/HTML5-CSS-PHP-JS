var citas = ["Cambias tu vida al cambiar tu corazón",
 			  "Nos convertimos en lo que pensamos",
			  "Cáete siete veces y levántate ocho",
			  "El éxito tiene una simple fórmula: da lo mejor de ti",
			  "La preparación es la llave del éxito",
			  "Pierdes el 100% de los disparos que no usas",
			  "El fracaso es éxito si aprendemos de el",
			  "Visualiza el éxito y persíguelo! ;)",
			  "El éxito depende del esfuerzo",
			  "Vive la vida al máximo y focalízate en lo positivo",
			  "La gente vive por los actos no por ideas",
			  "Piensa en GRANDE. Ejecuta en PEQUEÑO",
			  "Intenta y falla, pero nunca falles en intentarlo",
			  "El camino hacia el éxito siempre esta en construcción",
			  "El poder de la imaginación nos hace infinitos",
			  "Si tienes un sueño tienes que agarrarlo y nunca dejarlo ir",
			  "Conquista el que resiste",
			  "Ve a por ello. El futuro no esta prometido a nadie",
			  "La voluntad encuentra el camino",
			  "La mejor forma de predecir tu futuro es crearlo",
			  "El éxito va a aquellos que se atreven y actúan",
			  "Nunca, nunca, nunca te rindas",
			  "Vayas donde vayas, ve con todo tu corazón",
			  "Mira en el espejo…Esa es tu competencia",
			  "Los errores son una prueba de que lo estas intentando"
			  ]; 
			  
var randomNumber = Math.floor(Math.random()*citas.length);  

$(document).ready(function() 
{
	$("#frase").html('<h8><b>'+citas[randomNumber]+'</b></h8>');
});
