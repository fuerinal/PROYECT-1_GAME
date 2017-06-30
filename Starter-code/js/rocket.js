
function Rocket(name, offsets, vel, velRocket,heightPrepare,theme) {
  this.name = name;
  this.posX = offsets.offX;
  this.posY = offsets.offY;
  this.vel = vel;
  this.velRocket = velRocket;
  this.heightPrepare = heightPrepare;
  this.theme = theme;
  // rocketX = $("#rocket").position().left;
  // rocketY = $("#rocket").position().top;
}

Rocket.prototype.moveRight = function() {
  this.posX += this.velRocket;
};
Rocket.prototype.moveLeft = function() {
  this.posX -= this.velRocket;

};
Rocket.prototype.prepare = function() {

  this.posY -= this.vel;
  if (this.heightPrepare<this.posY ) {

  }
};




//
// Rocket.prototype.appear = function functionName() {
//   var that = this;
//   switch (that.direction) {
//     case 1:
//       that.obstacleY = $(that.box).position().top;
//       that.obstacleY -= that.vel;
//       $(that.box).css({
//         top: that.obstacleY
//       });
//       that.obstacleY = $(that.box).position().top;
//       if (that.obstacleY < 700) {
//         that.direction = 2;
//       }
//       break;
//     case 2:
//       break;
//   }
// };

function collision() {}
