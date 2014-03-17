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
      formdiv.removeClass('has-error has-warning');
      span.removeClass(" glyphicon-warning-sign glyphicon-remove") ;

      $('label.control-label').attr('for', 'inputSuccess2').text('Success');

//Check to see if greater than 8 chars also warn
    } else if (password.length > 8 ){

        formdiv.toggleClass('has-error has-success');
        span.toggleClass(" glyphicon-warning-sign glyphicon-remove");


     $('label.control-label').attr('for', 'inputWarning2').text('warning');

//Finally throw Error!
    } else {
      formdiv.toggleClass('has-success has-warning');
      span.toggleClass(" glyphicon-warning-sign glyphicon-ok");

      $('label.control-label').attr('for', 'inputError2').text('error');

    }
  });
});
