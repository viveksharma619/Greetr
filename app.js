//gets a  new object without new keyword
var a = G$('Vivek', 'Sharma');

$('#login').click(function(){
  //gets a  new object without new keyword
  var loginGreetr = G$($('#firstName').val(), $('#lastName').val());
  $('#logindiv').hide();
  //chainable methods 
  loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})