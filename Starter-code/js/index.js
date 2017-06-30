$(document).ready(function() {
  var time=60;
  var game = new Game();
  $('#start').on('click', function() {
    console.log("click");
    game();
    

  });
});
