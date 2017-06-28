var fps = 30;

var obstacles = ["A", "B", "C", "D", "E"].map(function(e, i) {
  var speed = (Math.random() * 100 + 150) / fps;
  return new Obstacle('asteroid' + e, speed, {
    offX: Math.random() * 400 + 400 * i,
    offY: 0
  });
});

var rockets = ["1"].map(function(e,i) {
  var arraytheme=["blue","red"];
   return new Rocket('Rocket'+e, {
    offX: 800*i/2,
    offY: 800
  }, 100 / fps, 15, 400,arraytheme[i]);
});


obstacles.map(function(e) {
  var el = $('<div>').attr('id', e.name).addClass('asteroid');
  el.css({
    top: e.posY,
    left: e.posX
  });
  $('body').append(el);
});

rockets.map(function(e) {
  var el = $('<div>').attr('id', e.name).addClass('rocket');
  el.css({
    top: e.posY,
    left: e.posX,

  });
  $('body').append(el);
});

function moveObstacles() {
  obstacles.map(function(e) {
    e.move();
    var el = $("#" + e.name);
    el.css({
      top: e.posY % 1000,
      left: e.posX
    });
  });
}



setInterval(function() {
  moveObstacles();
}, 1000 / fps);
// setInterval(function() {
//   PrepareRocket();
// }, 1000 / fps);
//
// function PrepareRocket() {
//   rockets.map(function(e) {
//     e.prepare();
//     var el = $("#" + e.name);
//     el.css({
//       top: e.posY,
//       left: e.posX
//     });
//   });
//
// }

function moveRocket() {
  var moveLeft = false;
  var moveRight = false;
  var i = 1;
  setInterval(function() {
    if (moveLeft === true && moveRight === false) {
      console.log("Se mueve Derecha");

      rockets.map(function(e) {
        e.moveLeft();
        var el = $("#" + e.name);
        el.css({
          top: e.posY,
          left: e.posX
        });
      });

      i--;
      if (i < 0) {
        i = 0;
      }

      $(".rocket").css('background', 'url(img/frame-0' + i + '.gif)');
    }
    //Movimiento del ROcket
    if (moveLeft === false && moveRight === true) {

      rockets.map(function(e) {
        e.moveRight();
        var el = $("#" + e.name);
        el.css({
          top: e.posY,
          left: e.posX
        });
      });

      i++;
      if (i > 2) {
        i = 2;
      }
      $(".rocket").css('background', 'url(img/frame-0' + i + '.gif)');
    }
    if (moveLeft === false && moveRight === false) {
      i = 1;
      $(".rocket").css('background', 'url(img/frame-0' + i + '.gif)');
    }
    console.log(moveLeft);
    console.log(moveRight);
  }, 40);

  $(document).on('keydown', function(e) {
    switch (e.keyCode) {
      case 65:
        moveLeft = true;
        break;
      case 68:
        moveRight = true;
        break;
    }
  });

  $(document).on('keyup', function(a) {
    switch (a.keyCode) {
      case 65:
        moveLeft = false;
        break;
      case 68:
        moveRight = false;
        break;
    }
  });


  console.log(moveLeft);

}



moveRocket();
