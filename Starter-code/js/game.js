var fps = 30;

var obstacles = ["A", "B", "C", "D", "E"].map(function(e, i) {
  var speed = (Math.random() * 100 + 150) / fps;
  return new Obstacle('asteroid' + e, speed, {
    offX: Math.random() * 400 + 400 * i,
    offY: 0
  });
});

var rockets = ["1"].map(function(e, i) {
  var arraytheme = ["blue", "red"];
  return new Rocket('Rocket' + e, {
    offX: 800 * i / 2,
    offY: 800
  }, 100 / fps, 15, 400, arraytheme[i]);
});
var m=0;

var shotRocket = [0].map(function(e) {
  var speed=300;

  return new Shot('shot', {
    offX: 400,
    offY:900
  }, speed, m);
});



$('#start').on('click', function() {
  console.log("click");
  //CreateArrayShot();
  shotRocket[0].shotCreate();

m++;


});




obstacles.map(function(e) {
  var elementObsctacle = $('<div>').attr('id', e.name).addClass('asteroid');
  elementObsctacle.css({
    top: e.posY,
    left: e.posX
  });
  $('body').append(elementObsctacle);
});

rockets.map(function(e) {
  var elementRocket = $('<div>').attr('id', e.name).addClass('rocket');
  elementRocket.css({
    top: e.posY,
    left: e.posX,
  });
  $('body').append(elementRocket);
});


// function shoot() {
//   console.log("shoot");
//   shotRocket.map(function(e) {
//     var elementsShoot = $('<div>').attr('id', e.name).addClass('shot');
//     $('body').append(elementsShoot);
//     e.shotVertical();
//
//     elementsShoot.css({
//       top: e.posY,
//       left: e.posX
//     });
//   });
// }



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
  var moveShot = false;
  var el;
  var els;
  var i = 1;
  setInterval(function() {
    if (moveShot === true) {
      console.log(shotRocket[0]);
      // shotRocket[0].shotCreate();
      // console.log("Shooot");

    }
    if (moveLeft === true && moveRight === false) {
      //console.log("Se mueve Derecha");
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
    //console.log(moveLeft);
    //console.log(moveRight);
  }, 40);

  $(document).on('keydown', function(e) {
    switch (e.keyCode) {
      case 65:
        moveLeft = true;
        break;
      case 68:
        moveRight = true;
        break;
      case 32:
        moveShot = true;
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
      case 32:
        moveShot = false;
        break;
    }
  });


  console.log(moveLeft);

}



moveRocket();
