$(document).ready(function() {

  // var $input = $('#input');
  // $input.on('click', function() {
  //
  //   if ($(this).val().length >= 10) {
  //       $('#boton').attr("disabled", false);
  //       $(this).css('color','fuchsia');
  //   } else {
  //       $('#boton').attr("disabled", true);
  //   }
  // });

  var $numberPhone = $('#input');
  var $boton = $('#signup');


  $numberPhone.on('keyup', validNumber);
  $boton.on('click', generadorRandom);

//validando input igual a 10digitos

  function validNumber() {
  if ($numberPhone.val().length === 10) {
    $boton.removeClass('disabled');
  }
  else {
    $boton.addClass('disabled');
  }
}

//funcion para generar el random

  function generadorRandom(){
      var codigo = Math.floor((Math.random() * 1000) + 1);
     alert('Tu codigo es: ' + 'LAB'+ codigo);
     localStorage.codeAleatorio = codigo;
     // window.location.href = 'verificar-codigo.html';
  }

});
