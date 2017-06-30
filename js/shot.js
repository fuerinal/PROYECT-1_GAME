function Shot(name, offsets, vel, id) {

  
  this.name = name;
  this.posX = offsets.offX;
  this.posY = offsets.offY;
  this.vel = vel;
  this.id = id;
  this.shotCreate();
  this.shotVertical();
  $(".score_value").attr("value", "OTRO TEXTO");

}
Shot.prototype.shotCreate = function() {

  this.shotId = $('<div>').addClass('shot');
  $(this.shotId).css({
    left: this.posX,
    top: this.posY
  });
  $('body').append(this.shotId);
};
Shot.prototype.shotVertical = function() {
  var that = this;
  setInterval(function() {
    that.posY -= that.vel;
    $(that.shotId).css({
      left: that.posX,
      top: that.posY
    });
  }, 40);

};
Shot.prototype.shotLeft = function() {
  this.posX -= this.vel;
  this.posY -= this.vel;
  $(this.shotId).css({
    left: this.posX,
    top: this.posY
  });
};
Shot.prototype.shotRight = function() {
  this.posX += this.vel;
  this.posY -= this.vel;
  $(this.shotId).css({
    left: this.posX,
    top: this.posY
  });
};
