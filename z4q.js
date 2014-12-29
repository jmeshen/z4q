$(document).ready(function(){



  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'z4q-cl.mp3');





  $('.btn').click(function() {
    audioElement.play();
    $("#1").delay(600).fadeIn();
    $("#2").delay(2300).fadeIn();
    $("#3").delay(4000).fadeIn();
    $("#4").delay(7100).fadeIn();
    $("#5").delay(11600).fadeIn();
    $("#batman").delay(14000).fadeIn();
  });

});
