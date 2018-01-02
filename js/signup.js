$(document).ready(function() {

  var $input = $('#input');
  $input.on('click', function() {

    if ($(this).val().length >= 10) {
        $('#boton').attr("disabled", false);
        $(this).css('color','fuchsia');
    } else {
        $('#boton').attr("disabled", true);
    }
  });


  $('form > button').on('click', function(event) {
    event.preventDefault();
    $(this).css('background-color','fuchsia');
     alert("Tu codigo es: " + "LAB"+ Math.round(Math.random()*1000));
     window.location.href = 'verificar-codigo.html';
  });
});
