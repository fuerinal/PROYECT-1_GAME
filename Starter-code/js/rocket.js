function Rocket(moveLeft, moveRight) {

  this.moveLeft = moveLeft;
  this.moveRight = moveRight;

  rocketX = $("#rocket").position().left;
  rocketY = $("#rocket").position().top;
}
Rocket.prototype.activeMove = function() {

  var that = this;
  var i = 1;
  $(document).on('keydown', function(e) {
    switch (e.keyCode) {

      case 65:
        console.log("LEft");
        that.moveLeft = true;
        break;

      case 68:
        console.log("Right");
        that.moveRight = true;
        break;

    }
  });

  $(document).on('keyup', function(a) {
    switch (a.keyCode) {


      case 68:
        that.moveLeft = false;
        console.log("LEftFALSE");
        break;

      case 65:
        that.moveRight = false;
        console.log("LEftRIGHT");
        break;

    }
  });



};

Rocket.prototype.moveXR = function() {
  console.log("Rightworks");
  $("#rocket").css({
    left: $("#rocket").position().left - 15
  });

};
Rocket.prototype.moveXL = function() {
  console.log("Leftworks");
  $("#rocket").css({
    left: $("#rocket").position().left + 15
  });
};

function collision() {
}
function canmove() {
}
