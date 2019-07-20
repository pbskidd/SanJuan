$(document).ready(function(){
    
        $("#map").fadeIn(3000);
        $("#link").fadeIn(10000);

        var rotation = function (){
   $("#container").rotate({
      angle:-3, 
      animateTo:3,
      duration:8000,
      callback: rotationBack
   });
   $('body').animate({
        'marginTop' : "-=10px", //moves up
        duration:8000
        });
  $('#wheel').rotate({
      angle:0, 
      animateTo:-375,
      duration:8000,
        });
}

var rotationBack = function() {
    $("#container").rotate({
      angle:3, 
      animateTo:-3,
      duration:8000,
      callback: rotation
   });
       $('body').animate({
        'marginTop' : "+=10px", //moves up
        duration:8000,
        });
     $('#wheel').rotate({
      angle:0, 
      animateTo:375,
      duration:8000
        });
}

rotation();
});