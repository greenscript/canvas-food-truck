function Tree (lineP1, lineP2, lineWidth, lineCap, lineColor, context, ballPosition, radius, color, move) {

  if (!(this instanceof Tree)) {
    return new Tree(lineP1, lineP2, lineWidth, lineCap, lineColor, ctx, ballPosition, radius, color, move);
  }

  this.lineP1 = lineP1;
  this.lineP2 = lineP2;
  this.lineWidth = lineWidth;
  this.lineCap = lineCap;
  this.lineColor = lineColor;
  this.context = context;
  this.ballPosition = ballPosition;
  this.radius = radius;
  this.color = color;
  this.move = move;
  this.update();
}

Tree.prototype.render = function () {


  this.context.beginPath();
  this.context.strokeStyle = this.lineColor;
  this.context.lineWidth = this.lineWidth;
  this.context.lineCap = this.lineCap;
  this.context.moveTo(this.lineP1.x, this.lineP1.y);
  this.context.lineTo(this.lineP2.x, this.lineP2.y);
  this.context.stroke();
  this.context.closePath();

  this.context.beginPath();

  this.context.arc(this.ballPosition.x, this.ballPosition.y, this.radius, 0, (2 * Math.PI), false);
  this.context.fillStyle = this.color;
  this.context.fill();
  this.context.closePath();
}

Tree.prototype.update = function () {
    if (this.move) {
      this.lineP1.x += -3;
      this.lineP2.x += -3;
      this.ballPosition.x += -3;
    }

    this.checkBound();
    this.render();
}

Tree.prototype.checkBound = function () {
    if (this.lineP1.x < -250 && this.ballPosition.x < -250 && this.lineP2.x && this.lineP2.x < -250) {
        this.lineP1.x = 2100;
        this.lineP2.x = 2100;
        this.ballPosition.x = 2100;
    }
}
