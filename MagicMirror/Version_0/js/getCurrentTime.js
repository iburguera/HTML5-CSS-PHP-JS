$(document).ready(function() 
{
    $("#hora").html('<h6>'+moment().format('LT')+'</h6>');
    $("#dia").html('<h7>'+moment().format('LL')+'</h7>');
});
