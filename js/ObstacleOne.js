function Obstacle(name, vel, offsets) {

  
  this.name = name;
  this.posX = offsets.offX;
  this.posY = offsets.offY;
  this.vel = vel;
  setInterval(function() {
  this.vel+=100;
  }, 40);
}

Obstacle.prototype.move = function() {
  this.posY += this.vel;
};

/*  var that = this;
    switch (that.direction) {

      case 1:

        if (that.direction == 1) {
          that.obstacleY = $(that.box).position().top;

          that.obstacleY += that.vel;
          $(that.box).css({
            top: that.obstacleY
          });

        }
        if (that.obstacleY > that.maxheight) {
          $(that.box).css({
            top: 0,
            left: Math.floor((Math.random() * 600) + 1)
          });
          that.obstacleY = $(that.box).position().top;
        }
    }*/
