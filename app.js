/**
* For the brave souls who get this far: You are the chosen ones,
* the valiant knights of programming who toil away, without rest,
* fixing our most awful code. To you, true saviors, kings of men,
* I say this: never gonna give you up, never gonna let you down,
* never gonna run around and desert you. Never gonna make you cry,
* never gonna say goodbye. Never gonna tell a lie and hurt you.
*/

$(document).ready(function($) {

  var input = $('input.form-control');

//This function checks to make sure that the input is NOT the word password
//theres a edge case the string can't have the letter d at the end WERID!!!!!
  function noPassword (user_input) {
    if (user_input == 'password') {
      $('label.control-label').text("Your password cannot be password!");
    } else {
      $('label.control-label').attr('for', 'inputError2').text('Must Be 8 characters long and include 2 numbers and 2 special characters');
    };
  }
//checks the password validation is 2 numbers 2 special characters and 8 letters :)
  function patternMatcher (argument) {
    // Abandon all hope, ye who enter here.
    // here be dragons
    var pattern = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$@%&? "]).*$/;
      return pattern.test(argument);
 }

//checks to see if the password is and email!
 function validateEmail(email) {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRegex.test(email) == true){
        $('label.control-label').text("Your password cannot be an email!");
      }
    return  emailRegex.test(email) ;
}
  input.on('keyup', function(event) {

    var password = $('input.form-control').val();
    var formdiv = $('div#mainDiv');
    var span = $('span');

//Check to see if password is a correct match
    if (patternMatcher(password)) {
      formdiv.removeClass('has-error has-warning').addClass('has-success');
      span.text("good").addClass('textFix');
    //  span.removeClass(" glyphicon-warning-sign glyphicon-remove").addClass('glyphicon-ok') ;

      $('label.control-label').attr('for', 'inputSuccess2').text('Success');

//Check to see if greater than 8 chars also warn
    } else if (password.length > 8  && !validateEmail(password)){
      formdiv.removeClass('has-error has-success').addClass('has-warning');
      span.text("fair").addClass('textFix');
     // span.removeClass(" glyphicon-ok glyphicon-remove").addClass('glyphicon-warning-sign') ;
     $('label.control-label').attr('for', 'inputWarning2').text('Add another number of special character');

//Finally throw Error!
    } else {
      formdiv.removeClass('has-warning has-success').addClass('has-error');
      span.text("weak").addClass('textFix');

     // span.removeClass(" glyphicon-warning-sign glyphicon-remove").addClass('glyphicon-remove') ;
      noPassword(password);
      validateEmail(password);
    }
  });
});
