//var obstacleOne = new ObstacleOne($("#asteroid").position().top, 19, 20, 1, "#asteroid");
var obstacleOne = new ObstacleOne($("#asteroid").position().top, 19, 20, 1, "#asteroid");
var obstacleTwo = new ObstacleTwo($("#asteroid2").position().top, 19, 20, 1, "#asteroid2");
//var obstacle2 =new Obstacle1($("#asteroid2").position().top, 16, 20, 1, "#asteroid2");
// var obstacle2 = new Obstacle($("#box2").position().top, 4, 20, 1, "#box2");
// var obstacle3 = new Obstacle($("#box3").position().top, 4, 20, 1, "#box3");
// var obstacle4 = new Obstacle($("#box4").position().top, 4, 20, 1, "#box4");
var rocket = new Rocket(false, false);
$('#start').on('click', function() {
  rocket.activeMove();
  Obstaculo1Active();
  Obstaculo2Active();
  moveRocket();
  ShowObstacles();
});




function Obstaculo1Active() {

  setInterval(function() {
    obstacleOne.move();
  }, 40);
}

function Obstaculo2Active() {
  setInterval(function() {
    obstacleTwo.move();
  }, 40);
}

function moveRocket() {
  if (this.moveLeft === true && this.moveRight === false) {
    console.log("Se mueve Derecha");
    Rocket.moveXR();
    i--;
    if (i < 0) {
      i = 0;
    }
    $("#rocket_image").attr("src", "img/frame-0" + i + ".gif");
  }
  if (this.moveLeft === false && this.moveRight === true) {
    Rocket.moveXL();

    i++;
    if (i > 2) {
      i = 2;
    }
    $("#rocket_image").attr("src", "img/frame-0" + i + ".gif");
  }
}

function ShowObstacles() {
  $("#asteroid").css("display", "block");
  $("#asteroid2").css("display", "block");
}
// function b() {
//   setInterval(function() {
//     obstacle2.move();
//   }, 40);
// }
// b();
