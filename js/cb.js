$(function() {
  // Setup drop down menu
  $('.dropdown-toggle').dropdown();
 
  // Fix input element click problem
  $('.dropdown input, .dropdown label, .dropdown .container').click(function(e) {
    e.stopPropagation();
  });
});