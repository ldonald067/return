$(document).ready(function() {
  $("#letter form").submit(function(event) {
  var nameInput = $("input#name").val().toUpperCase();

  $(".name1").text(nameInput);
  $("#response").show();


  event.preventDefault();

  });
});
