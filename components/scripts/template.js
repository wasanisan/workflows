$(function() {
  var Mustache = require('mustache');

  $.getJSON('js/data.json', function(data) {
    var template = $('#speakerstpl').html();
    var html = Mustache.render(template, data);
    $('#speakers').html(html);    
  }).done(function() {
  	console.log('success!');
  }).fail(function(jqxhr, textStatus, error) {
  	var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  }).always(function() {
  	console.log('complete!');
  }); //getJSON
  
}); //function