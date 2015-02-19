$(document).ready(function() {
  $('#orb').click(function(){
    if ($(this).hasClass('sun')) {
      $(this).removeClass('sun').addClass('moon');
    }
    else {
      $(this).removeClass('moon').addClass('sun');
    }
    if ($('#sky').hasClass('day')){
      $('#sky').removeClass('day').addClass('night');
    }
    else{
      $('#sky').removeClass('night').addClass('day');
    }
    if($('#moonSpot1').hasClass('visible')){
      $('#moonSpot1').removeClass('visible');
    }
    else{
      $('#moonSpot1').addClass('visible');
    }
    if($('#moonSpot2').hasClass('visible')){
      $('#moonSpot2').removeClass('visible');
    }
    else{
      $('#moonSpot2').addClass('visible');
    }
    if($('#moonSpot3').hasClass('visible')){
      $('#moonSpot3').removeClass('visible');
    }
    else{
      $('#moonSpot3').addClass('visible');
    }
    });
});
