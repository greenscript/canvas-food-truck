function Wheel(position, context) {
    if (!(this instanceof Wheel)) {
        return new Wheel(position, context);
    }

    this.context = context;
    this.position = position;
    this.degree = 0;
    this.update();
}

Wheel.prototype.update = function () {
    this.degree += 10;
    this.render();
}

Wheel.prototype.render = function () {

    this.context.translate(this.position.x, this.position.y);
    this.context.rotate(toRadians(this.degree));
    this.context.fillStyle = '#585858';
    this.context.beginPath();
    this.context.arc(0, 0, 30, 0, Math.PI * 2, true);
    this.context.closePath();
    this.context.fill();

    this.context.fillStyle = 'white';
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 5;
    this.context.beginPath();
    this.context.arc(0, 0, 13, 0, Math.PI * 2, true);
    this.context.closePath();
    this.context.stroke();
    this.context.fill();

    this.context.fillStyle = 'black';
    this.context.beginPath();
    this.context.arc(0, -5, 2, 0, Math.PI * 2, true);
    this.context.closePath();
    this.context.fill();

    this.context.beginPath();
    this.context.arc(0, 5, 2, 0, Math.PI * 2, true);
    this.context.closePath();
    this.context.fill();

    this.context.beginPath();
    this.context.arc(-5, 0, 2, 0, Math.PI * 2, true);
    this.context.closePath();
    this.context.fill();

    this.context.beginPath();
    this.context.arc(5, 0, 2, 0, Math.PI * 2, true);
    this.context.closePath();
    this.context.fill();

    this.context.resetTransform();

}