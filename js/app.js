$(document).ready(function() {
  setTimeout(function() {
    window.location.href = 'views/register.html';
  }, 8000);

  function validar(){
    var text = document.getElementById("#input");
    var button = document.getElementById("#signup");
    if(text.value > 10 ){
        document.getElementById("button").disabled = true;
    }else{
      document.getElementById("enviar").disabled = false;
    }
  }
});
