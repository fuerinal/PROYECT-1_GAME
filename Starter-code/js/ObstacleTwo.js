function ObstacleTwo(obstacleY, vel, time, direction, box) {

  this.obstacleY = obstacleY;
  this.vel = vel;
  this.time = time;
  this.direction = direction;
  this.box = box;

  this.maxheight = 1000;





  console.log(this.obstacleY);
}


ObstacleTwo.prototype.move = function() {


  var that = this;
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
          left: Math.floor((Math.random() * (1200 - 600) + 600))
        });
        that.obstacleY = $(that.box).position().top;
      }
  }

};
