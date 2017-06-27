var obstacle1 = new Obstacle1($("#box1").position().top, 4, 20, 1, "#box1");
var obstacle2 = new Obstacle2($("#box2").position().top, 4, 20, 1, "#box2");
var obstacle3 = new Obstacle3($("#box3").position().top, 4, 20, 1, "#box3");
var obstacle4 = new Obstacle4($("#box4").position().top, 4, 20, 1, "#box4");
var rocket = new Rocket();


function a() {
  setInterval(function() {
    obstacle1.move();
  }, 20);
  setInterval(function() {
    obstacle2.move();
  }, 20);
  setInterval(function() {
    obstacle3.move();
  }, 20);
  setInterval(function() {
    obstacle4.move();
  }, 20);
}

a();
