function Colision(height, width, DivA, DivB) {
  this.width = width;
  this.height = height;
  this.ver1XA = DivA.ver1X;
  this.ver2XA = DivA.ver2X;
  this.ver1YA = DivA.ver1Y;
  this.ver2YA = DivA.ver2Y;
  this.posCA = DivA.posC;

  this.ver1XB = DivB.ver1X;
  this.ver2XB = DivB.ver2X;
  this.ver1YB = DivB.ver1Y;
  this.ver2YB = DivB.ver2Y;
  this.posCB = DivB.posC;
}
Colision.prototype.action = function() {
  switch (expression) {
    case 1:
      //Impacto de colision direction descendente
      if (this.ver1XA > this.ver1XB && this.ver2XA > this.ver2XB && this.posCA < this.posCB ) {
        a = 1;
      }
      if (x > 1470 && a === 0) {
        a = 3;
      }
      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    default:

  }

};
