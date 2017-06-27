function Rocket() {
  rocketX = $("#rocket").position().left;
  rocketY = $("#rocket").position().top;




}
Rocket.prototype.activeMove = function() {


  console.log("sadas");
var i=1;
  $(document).on('keydown', function(e) {



    if (e.keyCode == 65) {
      i--;
      console.log("Derecha");
      Rocket.prototype.moveXR();
      if (i==-1) {
        i=0;

      }
      $("#rocket_image").attr("src","img/frame-0"+i+".gif");

      }



    if (e.keyCode == 68) {
      i++;
      console.log("Left");
      Rocket.prototype.moveXL();
      if (i>2) {
        i=2;

      }
      $("#rocket_image").attr("src","img/frame-0"+i+".gif");

    }
  });
  $("#rocket").click(function() {
    i++;
    $("#rocket_image").attr("src","img/frame-0"+i+".gif");

    console.log("click");
    //console.log(stack.push());
    //
    if (i > 6) {
      i = 0;
    }
  });
};

Rocket.prototype.moveXR = function() {
  console.log("Rightworks");
  $("#rocket").css({
    left: $("#rocket").position().left - 10
  });

};
Rocket.prototype.moveXL = function() {
  console.log("Leftworks");
  $("#rocket").css({
    left: $("#rocket").position().left + 10
  });
};


function collision() {

}

function canmove() {

}
