function Cloud (position, radius, color, move, ctx) {
  if (!(this instanceof Cloud)) {
    return new Cloud(position, radius, color, move, ctx);
  }

  this.position = position;
  this.radius = radius;
  this.color = color;
  this.move = move;
  this.ctx = ctx;
}

Cloud.prototype.update = function() {
  if (this.move) {
    this.position.x += -3;
  }
  this.checkBound();
  this.render();
}

Cloud.prototype.checkBound = function () {
  if (this.position.x < -250) {
      this.position.x = 2100;
  }
}

Cloud.prototype.render = function() {
  this.ctx.beginPath();
  this.ctx.arc(this.position.x, this.position.y, this.radius, 0, (2 * Math.PI), false);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
  this.ctx.closePath();
}
