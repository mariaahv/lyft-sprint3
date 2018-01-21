$(document).ready(function() {

  // var $buttonSubmit = $('button[type="submit"]');
  //
  // $buttonSubmit.on('click', function(event) {
  //   event.preventDefault();
  //     alert('Bienvenido!!');
  //       $(this).css('background-color','fuchsia');
  //         window.location.href = 'close.html';
  //     });
 //declaracion de variables
  var $inputName=$('#name');
  var $inputEmail=$('#email');
  var $checkbox=$('#check');
  var $btnlogin=$('#btnlogin');

  $checkbox.on('click',validCheckbox);
  $checkbox.on('click',validacionForm);
  $inputName.on('keyup',validName);
  $inputName.on('keyup',validacionForm);
  $inputEmail.on('keyup',validEmail);
  $inputEmail.on('keyup',validacionForm);
  $btnlogin.on('click',validacionForm);

  // validacionde nombre con la expresion regular
  function validName() {
  var name = false;
  var expression = /^[a-zA-Z]*$/;
  if (expression.test($($inputName).val()) && $inputName.val().length >= 5) {
    name = true;
    console.log('ya');
  }
  return name;
}

//validacion del email
function validEmail(event) {
  var email = false;
  var expression = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/);
  if (expression.test($($inputEmail).val())) {
    email = true;
    console.log('ya');
  }
  return email;
}

//validacion de checkbox
function validCheckbox() {
  return $checkbox.prop('checked');
  console.log('ya');
}

function validacionForm(){
  if(validName()&&validEmail()&&validCheckbox()){
  $btnlogin.removeClass('disabled');
  $(this).css('background-color','fuchsia');
  }
  else{
    $btnlogin.addClass('disabled');
  }
}

});
