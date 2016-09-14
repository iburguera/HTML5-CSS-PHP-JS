<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>MagicMirror v0 - Iker Burguera</title>
<link rel="stylesheet" type="text/css" href="css/cssTabla.css" />

<meta http-equiv="refresh" content="60">  <!-- Refresh every 60" -->

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js"></script>
<script src="http://momentjs.com/downloads/moment.js"></script>
<script src="js/getWeatherInfo.js"></script>
<script src="js/getCurrentTime.js"></script>
<script src="js/getRandomPhrase.js"></script>
</head>

<body>

<div id="weather">

	<div id="hora"></div>
	<div id="dia"></div>

	<div id="tiempo">
	    	<div id="iconoActual"></div>
	        <div id="tempActual"></div>
	        <div id="tempMax"></div>
	        <div id="tempMin"></div>
	        <div id="ciudadActual"></div>
	        
		<div id="forecastIcon1"></div>
	        <div id="forecastDay1"></div>
	        <div id="forecastTemp1"></div>
	        
	        <div id="forecastIcon2"></div>
	        <div id="forecastDay2"></div>
	        <div id="forecastTemp2"></div> 
	        
	        <div id="forecastIcon3"></div>
	        <div id="forecastDay3"></div>
	        <div id="forecastTemp3"></div> 
	        
	        <div id="forecastIcon4"></div>
	        <div id="forecastDay4"></div>
	        <div id="forecastTemp4"></div>   
	        
	        <div id="forecastIcon5"></div>
	        <div id="forecastDay5"></div>
	        <div id="forecastTemp5"></div>         
    	</div>  <!--end of Tiempo-->

	<div id="frase"></div>

</div> <!--end of Weather-->

</body>
</html>
