function Game() {

  this.SoundMenu = new Audio('sounds/menuMusic.mp3');
  this.SoundBlast = new Audio('sounds/LaserBlast.mp3');
  this.SoundMenu.play();


  this.SoundMenu.loop = true;
  var that = this;
  this.fps = 30;
  this.m = 0;
  this.CreateObstacles();
  this.CreateRockets();
  this.render();
  this.moveObjects();
  this.CanShot();
  this.checkobstacles();
  this.shotRocket = [];
}

Game.prototype.CreateObstacles = function() {
  var i = 0;
  this.obstacles = ["A", "B", "C", "D", "E"].map(function(e, i) {
    var speed = (Math.random() * 100 + 150) / this.fps;
    return new Obstacle('asteroid' + e, speed, {
      offX: Math.random() * 400 + 400 * i,
      offY: 0
    });
  });
};
Game.prototype.CreateRockets = function() {
  this.rockets = ["1"].map(function(e, i) {
    var arraytheme = ["blue", "red"];
    return new Rocket('Rocket' + e, {
      offX: 800,
      offY: 800
    }, 100 / this.fps, 15, 400, arraytheme[0]);
  });

};

Game.prototype.CreateShot = function() {
  var posXS = $("#Rocket1").position().left + 100;
  var posYS = $("#Rocket1").position().top;
  var shot = new Shot('shot', {
    offX: posXS,
    offY: posYS
  }, 20);
  this.shotRocket.push(shot);

};
//Disparar
Game.prototype.CanShot = function() {
  var that = this;

  $(document).on('keydown', function(e) {

    switch (e.keyCode) {
      case 32:
        that.CreateShot();
        that.SoundBlast.play();
        break;
    }
  });
};
//RENDERR
Game.prototype.render = function() {
  this.obstacles.map(function(e) {
    var elementObsctacle = $('<div>').attr('id', e.name).addClass('asteroid');
    elementObsctacle.css({
      top: e.posY,
      left: e.posX
    });
    $('body').append(elementObsctacle);
  });

  this.rockets.map(function(e) {
    var elementRocket = $('<div>').attr('id', e.name).addClass('rocket');
    elementRocket.css({
      top: e.posY,
      left: e.posX,
    });
    $('body').append(elementRocket);
  });

};
//moveObjects
Game.prototype.moveObjects = function() {
  var that = this;
  that.i = 1;
  console.log(that.obstacles);
  console.log(that.obstacles);
  that.moveLeft = false;
  that.moveRight = false;
  that.moveShot = false;

  setInterval(function() {
    that.obstacles.map(function(e) {
      e.move();
      var el = $("#" + e.name);
      el.css({
        top: e.posY % 1000,
        left: e.posX
      });
    });

    if (that.moveLeft === true && that.moveRight === false) {
      //console.log("Se mueve Derecha");
      that.rockets.map(function(e) {
        e.moveLeft();
        var el = $("#" + e.name);
        el.css({
          top: e.posY,
          left: e.posX
        });
      });
      that.i--;
      if (that.i < 0) {
        that.i = 0;
      }
      $(".rocket").css('background', 'url(img/frame-0' + that.i + '.gif)');
    }
    //Movimiento del ROcket
    if (that.moveLeft === false && that.moveRight === true) {
      that.rockets.map(function(e) {
        e.moveRight();
        var el = $("#" + e.name);
        el.css({
          top: e.posY,
          left: e.posX
        });
      });

      that.i++;
      if (that.i > 2) {
        that.i = 2;
      }
      $(".rocket").css('background', 'url(img/frame-0' + that.i + '.gif)');
    }
    if (that.moveLeft === false && that.moveRight === false) {
      that.i = 1;
      $(".rocket").css('background', 'url(img/frame-0' + that.i + '.gif)');
    }

  }, 40);

  $(document).on('keydown', function(e) {
    switch (e.keyCode) {
      case 65:
        that.moveLeft = true;
        break;
      case 68:
        that.moveRight = true;
        break;
      case 32:
        that.moveShot = true;
        break;
    }
  });

  $(document).on('keyup', function(a) {
    switch (a.keyCode) {
      case 65:
        that.moveLeft = false;
        break;
      case 68:
        that.moveRight = false;
        break;
      case 32:
        that.moveShot = false;
        break;
    }
  });
};
Game.prototype.checkobstacles = function() {
  var time=60;
  setInterval(function() {
    time-=1;
    $(".score_time").text(time);

  }, 1000);
  var i=0;
  function checkObstacles() {
    var impactoA, impactoB, impactoC, impactoD, impactoE = false;

    if ($(".shot").collision("#asteroidA").length > 0) {
      console.log("ImpactoA");
      impactoA = true;
      if (impactoA === true) {
        i=i+10;
        $("#asteroidA").css('background', 'url(img/explosion.gif)');
        setTimeout(function() {
          $("#asteroidA").css('background', 'url(img/Money.gif)');
        }, 200);

        setTimeout(function() {
          $("#asteroidA").css('background', 'url(img/Asteroide.gif)');

        }, 500);

      }
    }
    if ($(".shot").collision("#asteroidB").length > 0) {
      console.log("ImpactoB");
      impactoB = true;
      if (impactoB === true) {
        i=i+10;
        $("#asteroidB").css('background', 'url(img/explosion.gif)');
        setTimeout(function() {
          $("#asteroidB").css('background', 'url(img/Money.gif)');
        }, 200);

        setTimeout(function() {
          $("#asteroidB").css('background', 'url(img/Asteroide.gif)');
        }, 500);

      }
    }
    if ($(".shot").collision("#asteroidC").length > 0) {
      console.log("ImpactoC");
      impactoC = true;
      if (impactoC === true) {
        i=i+10;
        $("#asteroidC").css('background', 'url(img/explosion.gif)');
        setTimeout(function() {
          $("#asteroidC").css('background', 'url(img/Money.gif)');
        }, 200);
        setTimeout(function() {
          $("#asteroidC").css('background', 'url(img/Asteroide.gif)');
        }, 500);
      }
    }
    if ($(".shot").collision("#asteroidD").length > 0) {
      console.log("ImpactoD");
      impactoD = true;
      if (impactoD === true) {
        i=i+10;
        $("#asteroidD").css('background', 'url(img/explosion.gif)');
        setTimeout(function() {
          $("#asteroidD").css('background', 'url(img/Money.gif)');
        }, 200);
        setTimeout(function() {
          $("#asteroidD").css('background', 'url(img/Asteroide.gif)');
        }, 500);
      }
    }
    if ($(".shot").collision("#asteroidE").length > 0) {
      console.log("ImpactorocketE");
      impactoE = true;
      if (impactoE === true) {
        i=i+10;
        $("#asteroidE").css('background', 'url(img/explosion.gif)');
        setTimeout(function() {
          $("#asteroidE").css('background', 'url(img/Money.gif)');
        }, 200);
        setTimeout(function() {
          $("#asteroidE").css('background', 'url(img/Asteroide.gif)');
        }, 500);
      }
    }
    if ($(".rocket").collision(".asteroid").length > 0) {
      console.log("ImpactorocketE");
      $(".rocket").css('background', 'url(img/explosion.gif)');
      setTimeout(function() {
        
      }, 500);

    }


  }
  setInterval(function() {
    $(".score_value").text(i);
    checkObstacles();
  }, 40);
};
Game();
