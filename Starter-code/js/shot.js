function Shot(name, offsets, vel, id) {
  this.name = name;
  this.posX = offsets.offX;
  this.posY = offsets.offY;
  this.vel = vel;
  this.id = id;

}
Shot.prototype.shotCreate = function() {
  console.log("Create");

  this.id++;
  var el = $('<div>').attr('id', this.name+this.id).addClass('shot');
  $('body').append(el);
  $("#shot"+this.id).css({
    left: this.posX,
    top: this.posY
  });
  // this.posX = $("#shot1").position().left;
  // this.posY = $("#shot1").position().top;
};
Shot.prototype.shotVertical = function() {
  this.posY -= this.vel;
  $("#shot"+this.id).css({
    left: this.posX,
    top: this.posY
  });
};
Shot.prototype.shotLeft = function() {
  this.posX -= this.vel;
  this.posY -= this.vel;
};
Shot.prototype.shotRight = function() {
  this.posX += this.vel;
  this.posY -= this.vel;
};
