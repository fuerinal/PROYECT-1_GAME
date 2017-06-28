function Controls(moveLeft, moveRight, i) {
  this.moveLeft = moveLeft;
  this.moveRight = moveRight;
  this.i = i;
}
rocket = [
  Rocket('Rocket1', {
    offX: 600,
    offY: 500
  }, 100 / fps, false, false)
];

Controls.prototype.controlRocket = function() {

  setInterval(function() {
    if (this.moveLeft === true && this.moveRight === false) {
      console.log("Se mueve Derecha");
      rocket.move(-15);
      this.i--;
      if (this.i < 0) {
        this.i = 0;
      }
      $("#rocket_image").attr("src", "img/frame-0" + i + ".gif");
    }
    if (this.moveLeft === false && this.moveRight === true) {
      rocket.move(+15);
      this.i++;
      if (this.i > 2) {
        this.i = 2;
      }
      $("#rocket_image").attr("src", "img/frame-0" + i + ".gif");
    }
    if (this.moveLeft === false && this.moveRight === false) {
      this.i = 1;
      $("#rocket_image").attr("src", "img/frame-0" + i + ".gif");
    }
    console.log(this.moveLeft);
    console.log(this.moveRight);
  }, 40);

  $(document).on('keydown', function(e) {
    switch (e.keyCode) {
      case 65:
        this.moveLeft = true;
        break;
      case 68:
        this.moveRight = true;
        break;
    }
  });

  $(document).on('keyup', function(a) {
    switch (a.keyCode) {
      case 65:
        this.moveLeft = false;
        break;
      case 68:
        this.moveRight = false;
        break;
    }
  });


};
