$(document).ready(function() {

  var $buttonSubmit = $('button[type="submit"]');
  $buttonSubmit.on('click', function(event) {
    event.preventDefault();
      alert('Bienvenido!!');
  });
});
