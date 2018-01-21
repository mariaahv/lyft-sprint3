$(document).ready(function() {
 var $btnVerificar =$('#btn-verificar');
 var $btnResend =$('#btn-resend');
 var $inputVerificar =$('#inputVerificar');

 $btnVerificar.on('click', verificaRandom);
 $inputVerificar.on('keyup', verificaRandom);
 $btnResend.on('click',resentRandom);


 function verificaRandom(){
   var $text = $inputVerificar.val();
   if( $text===localStorage.codeAleatorio){
     $btnVerificar.removeClass('disabled');
     $btnVerificar.addClass('botonverificar');

   }
   else{
     $btnVerificar.addClass('disabled');
     $btnVerificar.removeClass('botonverificar');
   }
 }
  function resentRandom() {
    var codigo = Math.floor((Math.random() * 1000) + 1);
    alert('Tu codigo: ' + 'LAB ' + codigo);
    localStorage.codeAleatorio = codigo;
  }
});
