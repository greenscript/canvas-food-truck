function Building(position, width, height, context) {
    if (!(this instanceof Building)) {
        return new Building(position, width, height, context);
    }

    this.color = 'gray';
    this.position = position;
    this.width = width;
    this.height = height;
    this.context = context;
    this.velocity = Vector(-1, 0);
}

Building.prototype.update = function () {
    this.checkBoundaries();
    this.position.add(this.velocity);
    this.render();
}

Building.prototype.render = function () {
    //background
    this.context.fillStyle = this.color;
    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);

    for (var j = 20; j < this.height - 40; j += 40) {
        for (var i = 20; i < this.width; i += 40) {
            this.context.fillStyle = 'yellow';
            this.context.fillRect(this.position.x + i, this.position.y + j, 20, 20);
        }
    }
}

Building.prototype.checkBoundaries = function () {
    if (this.position.x <= -this.width) {
        this.position.x = window.innerWidth;
    }
}