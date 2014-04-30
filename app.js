/**
* For the brave souls who get this far: You are the chosen ones,
* the valiant knights of programming who toil away, without rest,
* fixing our most awful code. To you, true saviors, kings of men,
* I say this: never gonna give you up, never gonna let you down,
* never gonna run around and desert you. Never gonna make you cry,
* never gonna say goodbye. Never gonna tell a lie and hurt you.
*/

$(document).ready(function($) {

  var $passwordInput = $('#password');
  var $confirm = $('#confirm');
  var $email = $('#emailInput');
  var $security = $('#security');

//This function checks to make sure that the input is NOT the word password
  function noPassword (user_input) {
    if (user_input == 'password') {
      $('#passwordLabel').text("Your password cannot be password!");
    } else {
      $('#passwordLabel').attr('for', 'inputError2').text('Must Be 8 characters long and include 2 numbers and 2 special characters');
    };
  }
//checks the password validation is 2 numbers 2 special characters and 8 letters :)
  function patternMatcher (password) {
    // Abandon all hope, ye who enter here.
    // here be dragons
    var pattern = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$@%&? "]).*$/;
      return pattern.test(password);
 }

function emptyPassword (password) {
  // body...
}

//checks to see if the password is and email!
 function validateEmail(email) {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRegex.test(email) == true){
        $('#passwordLabel').text("Your password cannot be an email!");
      }
    return  emailRegex.test(email) ;
}



  $passwordInput.on('keyup', function(event) {

    var password = $('#password').val();
    var $passwordDiv = $('#passwordDiv');
    var $passwordSpan = $('#passwordSpan');

//Check to see if password is a correct match
    if (patternMatcher(password) && !validateEmail(password)) {
      $passwordDiv.removeClass('has-error has-warning').addClass('has-success');
      $passwordSpan.text("good").addClass('textFix');

      $('#passwordLabel').attr('for', 'inputSuccess2').text('Success');
      $('#passwordIcon').removeClass('glyphicon-remove glyphicon-warning-sign').addClass('glyphicon-ok')

//Check to see if greater than 8 chars also warn
    } else if (password.length >= 8  && !validateEmail(password) && noPassword(password)){
      $passwordDiv.removeClass('has-error has-success').addClass('has-warning');
      $passwordSpan.text("fair").addClass('textFix');
      $('#passwordLabel').attr('for', 'inputWarning2').text('Add another number or special character');
      $('#passwordIcon').removeClass('glyphicon-remove')
//Finally throw Error!
    } else if (password.length === 0 ){
      $passwordDiv.removeClass('has-warning has-success').addClass('has-error');
      $passwordSpan.text("invalid").addClass('textFix');
       $('#passwordLabel').attr('for', 'inputWarning2').text('Password cannot be empty');
       $('#passwordIcon').addClass('glyphicon-remove');
    } else {
      $passwordDiv.removeClass('has-warning has-success').addClass('has-error');
      $passwordSpan.text("weak").addClass('textFix');
      $('#passwordIcon').addClass('glyphicon-remove');

      noPassword(password);
      validateEmail(password);
    }
  });

  $email.on('keyup', function() {
   var $emailSpan = $('#emailSpan');
   var $emailDiv = $("#emailDiv");

   var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ($email.val().length === 0) {
        $emailDiv.removeClass('has-success').addClass('has-error');
        $emailSpan.text("invalid").addClass('textFix');

        $('#emailLabel').attr('for', 'inputError2').text('Email cannot be empty');
    } else if ( emailRegex.test($email.val()) ){
        $emailDiv.removeClass('has-error').addClass('has-success');
        $emailSpan.text("good").addClass('textFix');
        $('#emailIcon').removeClass('glyphicon-remove').addClass('glyphicon-ok')


        $('#emailLabel').attr('for', 'inputSuccess2').text('Success');

      } else{
        $emailDiv.removeClass('has-success').addClass('has-error');
        $emailSpan.text("invalid").addClass('textFix');
        $('#emailIcon').addClass('glyphicon-remove');

        $('#emailLabel').attr('for', 'inputSuccess2').text('Please Enter a vaild Email');
      }
  });

  $confirm.on('keyup',function() {
      var $confirmSpan = $('#confirmSpan');
      var $password = $('#password').val();
      var $confirmDiv = $("#confirmDiv");

      if ($confirm.val() === "") {
        $confirmDiv.removeClass('has-success').addClass('has-error');
        $confirmSpan.text("invalid").addClass('textFix');

        $('#confirmLabel').attr('for', 'inputError2').text('Password cannot be empty');

      } else if ($confirm.val().toString() === $password){
        $confirmDiv.removeClass('has-error').addClass('has-success');
        $confirmSpan.text("good").addClass('textFix');
        $('#confirmIcon').removeClass('glyphicon-remove').addClass('glyphicon-ok');

        $('#confirmLabel').attr('for', 'inputSuccess2').text('Success');

      } else {
        $confirmDiv.removeClass('has-success').addClass('has-error');
        $confirmSpan.text("invalid").addClass('textFix');
        $('#confirmIcon').addClass('glyphicon-remove');

        $('#confirmLabel').attr('for', 'inputError2').text('Passwords Do Not Match');
      }
  });

  $security.on('keyup', function() {
      var $securityDiv = $('#securityDiv');
      var $securitySpan = $('#securitySpan');

      if ( $security.val().length > 0) {
      $securityDiv.removeClass('has-error').addClass('has-success');
      $securitySpan.text("good").addClass('textFix');
      $('#securityLabel').attr('for', 'inputSuccess2').text('Success');
      $('#securityIcon').removeClass('glyphicon-remove').addClass('glyphicon-ok');
      }else{
      $securityDiv.removeClass('has-success').addClass('has-error');
      $securitySpan.text("invalid").addClass('textFix');
      $('#securityLabel').attr('for', 'inputError2').text('Cannot Be Empty');
      $('#securityIcon').addClass('glyphicon-remove');
      }

  });

  });//DOCUMENT
