function Obstacle(obstacleY, vel, time, direction, box) {

  this.obstacleY = obstacleY;
  this.vel = vel;
  this.time = time;
  this.direction = direction;
  this.box = box;
  this.maxheight = 800;
  this.time=20;
  this.vel = vel;
  this.vel=4;

  console.log(this.obstacleY);
}


Obstacle.prototype.move = function() {


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
            left: Math.random() * (450 - 150) + 150
          });
          that.obstacleY = $(that.box).position().top;
        }
    }

};
function Obstacle(obstacleY, vel, time, direction, box) {

  this.obstacleY = obstacleY;
  this.vel = vel;
  this.time = time;
  this.direction = direction;
  this.box = box;
  this.maxheight = 800;
  this.time=20;
  this.vel = vel;
  this.vel=4;

  console.log(this.obstacleY);
}


Obstacle.prototype.move = function() {


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
            left: Math.random() * (450 - 150) + 150
          });
          that.obstacleY = $(that.box).position().top;
        }
    }

};
function Obstacle(obstacleY, vel, time, direction, box) {

  this.obstacleY = obstacleY;
  this.vel = vel;
  this.time = time;
  this.direction = direction;
  this.box = box;
  this.maxheight = 800;
  this.time=20;
  this.vel = vel;
  this.vel=4;

  console.log(this.obstacleY);
}


Obstacle.prototype.move = function() {


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
            left: Math.random() * (450 - 150) + 150
          });
          that.obstacleY = $(that.box).position().top;
        }
    }

};
