// v3.1.0
//Docs at http://simpleweatherjs.com

$(document).ready(function() 
{
  $.simpleWeather(
  {
    location: 'legazpi, ES',
    woeid: '',
    unit: 'C',
    success: function(weather) 
	{
          iconoActual    = '<i class="icon-'+weather.code+'" style="font-size: 165px;"></i>'; 
	  
	  tempActual     = '<h2>'+weather.temp+' '+weather.units.temp+'º</h2>'; 	  
	  tempMin  	 = '<h4>'+weather.low+' '+weather.units.temp+'º</h4>'; 
	  tempMax  	 = '<h4>'+weather.high+' '+weather.units.temp+'º</h4>'; 
	  
	  ciudadActual   = '<h4>'+weather.city+' , '+weather.country+'</h4>'; 
	  
	  forecastIcon1  = '<h4><i class="icon-'+weather.forecast[1].code+'"style="font-size: 90px;"></i></h4>'; 
	  forecastIcon2  = '<h4><i class="icon-'+weather.forecast[2].code+'"style="font-size: 90px;"></i></h4>';
	  forecastIcon3  = '<h4><i class="icon-'+weather.forecast[3].code+'"style="font-size: 90px;"></i></h4>';
	  forecastIcon4  = '<h4><i class="icon-'+weather.forecast[4].code+'"style="font-size: 90px;"></i></h4>';
	  forecastIcon5  = '<h4><i class="icon-'+weather.forecast[5].code+'"style="font-size: 90px;"></i></h4>';  
	  
	  forecastDay1   = '<h5>'+weather.forecast[1].day+'</h5>';
	  forecastDay2   = '<h5>'+weather.forecast[2].day+'</h5>';
	  forecastDay3   = '<h5>'+weather.forecast[3].day+'</h5>';
	  forecastDay4   = '<h5>'+weather.forecast[4].day+'</h5>';
	  forecastDay5   = '<h5>'+weather.forecast[5].day+'</h5>'; 
	  
	  forecastTemp1  = '<h5>'+weather.forecast[1].low+'º-'+weather.forecast[1].high+'º</h5>';
	  forecastTemp2  = '<h5>'+weather.forecast[2].low+'º-'+weather.forecast[2].high+'º</h5>';
	  forecastTemp3  = '<h5>'+weather.forecast[3].low+'º-'+weather.forecast[3].high+'º</h5>';
	  forecastTemp4  = '<h5>'+weather.forecast[4].low+'º-'+weather.forecast[4].high+'º</h5>';
	  forecastTemp5  = '<h5>'+weather.forecast[5].low+'º-'+weather.forecast[5].high+'º</h5>';  
	  
	  $("#iconoActual").html(iconoActual);
	  
	  $("#tempActual").html(tempActual);
	  $("#tempMin").html(tempMin);
	  $("#tempMax").html(tempMax);
	  
	  $("#ciudadActual").html(ciudadActual);
	  
	  $("#forecastIcon1").html(forecastIcon1);
	  $("#forecastIcon2").html(forecastIcon2);
	  $("#forecastIcon3").html(forecastIcon3);
	  $("#forecastIcon4").html(forecastIcon4);
	  $("#forecastIcon5").html(forecastIcon5);
	  
	  $("#forecastDay1").html(forecastDay1);
	  $("#forecastDay2").html(forecastDay2);
	  $("#forecastDay3").html(forecastDay3);
	  $("#forecastDay4").html(forecastDay4);
	  $("#forecastDay5").html(forecastDay5);
	  
	  $("#forecastTemp1").html(forecastTemp1);
	  $("#forecastTemp2").html(forecastTemp2);
	  $("#forecastTemp3").html(forecastTemp3);
	  $("#forecastTemp4").html(forecastTemp4);
	  $("#forecastTemp5").html(forecastTemp5);

    },
    error: function(error) 
	{
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
