


//   var colliders_selector = ".rocket";
//   var obstacles_selector = ".asteroid";
//   var hits = $(colliders_selector).collision(obstacles_selector);
//   setInterval(function() {
//   console.log(hits);
// }, 20);




// this.width = width;
// this.height = height;
//   this.ver1XA = DivA.ver1X;
//   this.ver2XA = DivA.ver2X;
//   this.ver1YA = DivA.ver1Y;
//   this.ver2YA = DivA.ver2Y;
//   this.posCA = DivA.posC;
//
//   this.ver1XB = DivB.ver1X;
//   this.ver2XB = DivB.ver2X;
//   this.ver1YB = DivB.ver1Y;
//   this.ver2YB = DivB.ver2Y;
//   this.posCB = DivB.posC;
//   this.case =Case;
// }
// Colision.prototype.action = function() {
//   switch (this.case) {
//     case 1:
//       //Impacto de colision direction descendente
//       if (this.ver1XA > this.ver1XB && this.ver2XA < this.ver2XB && this.posCA < this.posCB ) {
//         console.log("colision");
//       }
//       if (x > 1470 && a === 0) {
//         a = 3;
//       }
//       break;
//     case 2:
//
//       break;
//     case 3:
//
//       break;
//     case 4:
//
//       break;
//     default:
//
//   }
// var colision =["A", "B", "C", "D", "E"].map(function(e) {
//   var speed = (Math.random() * 100 + 150) / fps;
//   return new Colision({
//     ver1X: $("#roket1").position().left,
//     ver2X: $("#roket1").position().left+200,
//     ver1Y: $("#roket1").position().top,
//     ver2Y: $("#roket1").position().top+150,
//     posC: 0,
//   }, {
//     ver1X: $("#asteroid"+e).position().left,
//     ver2X: $("#asteroid"+e).position().left+200,
//     ver1Y: $("#asteroid"+e).position().top,
//     ver2Y: $("#asteroid"+e).position().top+200,
//     posC: 0,
//   },1);
// });
