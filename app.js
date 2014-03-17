$(document).ready(function($) {

  var input = $('input.form-control');
  console.log(input);
  function patternMatcher (argument) {
    // at least one number, one lowercase and one special character
    // at least eight characters
    console.log(argument);
    var pattern = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$@%&? "]).*$/;
      return pattern.test(argument);
 }

  input.on('keypress', function(event) {
    console.log(event);
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

     $('label.control-label').attr('for', 'inputWarning2').text('warning');

//Finally throw Error!
    } else {
      formdiv.removeClass('has-warning has-success').addClass('has-error');
      span.removeClass(" glyphicon-warning-sign glyphicon-remove").addClass('glyphicon-remove') ;

      $('label.control-label').attr('for', 'inputError2').text('error');

    }
  });
});
