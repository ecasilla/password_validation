$(document).ready(function($) {

  var input = $('input.form-control');

  function noPassword (user_input) {
    if (!user_input === 'password' || 'Password') {
      $('label.control-label').text("Your Password cannot be password");
    } else{
      $('label.control-label').attr('for', 'inputError2').text('Weak Must Be 8 characters long and include 2 numbers and 2 special characters');
    };
  }

  function patternMatcher (argument) {
    // at least two number, one lowercase and two special character
    // at least eight characters
    var pattern = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$@%&? "]).*$/;
      return pattern.test(argument);
 }

  input.on('keypress', function(event) {

    var password = $('input.form-control').val();
    var formdiv = $('div#mainDiv');
    var span = $('span.glyphicon');

//Check to see if password is a correct match
    if (patternMatcher(password)) {
      formdiv.removeClass('has-error has-warning').addClass('has-success');
      span.removeClass(" glyphicon-warning-sign glyphicon-remove").addClass('glyphicon-ok') ;

      $('label.control-label').attr('for', 'inputSuccess2').text('Success');

//Check to see if greater than 8 chars also warn
    } else if (password.length > 8 ){
      formdiv.removeClass('has-error has-success').addClass('has-warning');
      span.removeClass(" glyphicon-ok glyphicon-remove").addClass('glyphicon-warning-sign') ;

     $('label.control-label').attr('for', 'inputWarning2').text('Add another number of special character');

//Finally throw Error!
    } else {
      formdiv.removeClass('has-warning has-success').addClass('has-error');
      span.removeClass(" glyphicon-warning-sign glyphicon-remove").addClass('glyphicon-remove') ;
      noPassword(password);
    }
  });
});
