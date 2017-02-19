/**
 * Ball
 * Defines a Ball shape for the canvas
 * @constructor
 * @param {vector} position - Position.
 * @param {number} radius - Radius for the shape.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Ball(position, radius, color, context) {

    if (!(this instanceof Ball)) {
        return new Ball(position, radius, color, context);
    }

    this.position = position;
    this.radius = radius;
    this.color = color;
    this.context = context;
    this.debug = false;
    this.update();
}

Ball.prototype.render = function () {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.position.x, this.position.y, this.radius, 0, (2 * Math.PI), false);
    this.context.fill();
    this.context.closePath();

    if (this.debug) {
        this.context.beginPath();
        this.context.strokeStyle = 'lawngreen';
        this.context.lineWidth = 2;
        this.context.rect(this.position.x - this.radius, this.position.y - this.radius, this.radius * 2, this.radius * 2);
        this.context.stroke();
        this.context.closePath();
    }
}

Ball.prototype.update = function () {
    this.render();
}

Ball.prototype.getBounds = function () {
    return Rect(this.position.x - this.radius, this.position.y - this.radius, this.radius * 2, this.radius * 2);
}

/**
 * Circle
 * Creates a more circle shape for the canvas, this class has more options than a ball, use it when you need stroke and remove the fill.
 * @constructor
 * @param {Vector} position - Defines the position of the circle.
 * @param {number} radius - Radius for the shape.
 * @param {boolea} hasFill - Set the circle to show the fill.  
 * @param {string} fillColor - Color for the shape.
 * @param {boolea} hasStroke - Set the circle to show the stroke. 
 * @param {string} strokeColor - Stroke color for the shape.
 * @param {number} lineWidth - Stroke line size.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Circle(position, radius, hasFill, fillColor, hasStroke, strokeColor, lineWidth, context) {

    if (!(this instanceof Circle)) {
        return new Circle(position, radius, hasFill, fillColor, hasStroke, strokeColor, lineWidth, context);
    }

    this.position = position;
    this.radius = radius;
    this.hasFill = hasFill;
    this.fillColor = fillColor;
    this.hasStroke = hasStroke;
    this.strokeColor = strokeColor;
    this.lineWidth = lineWidth;
    this.context = context;
    this.update();
}

Circle.prototype.render = function () {

    this.context.beginPath();

    if (this.hasFill) {
        this.context.fillStyle = this.fillColor;
    }

    if (this.hasStroke) {
        this.context.strokeStyle = this.strokeColor;
        this.context.lineWidth = this.lineWidth;
        this.context.lineCap = 'round';
    }

    this.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);

    if (this.hasFill) {
        this.context.fill();
    }

    if (this.hasStroke) {
        this.context.stroke()
    }

    this.context.closePath();
}

Circle.prototype.update = function () {
    this.render();
}

Circle.prototype.getBounds = function () {
    return Rect(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
}

/**
 * Ellipse
 * Creates a ellipse shape for the canvas.
 * @constructor
 * @param {Vector} position - Defines the position of the circle.
 * @param {number} radiusX - Radius x for the shape.
 * @param {number} radiusY - Radius y for the shape.
 * @param {number} rotation - Rotation for the shape in radians.
 * @param {boolea} hasFill - Set the circle to show the fill.  
 * @param {string} fillColor - Color for the shape.
 * @param {boolea} hasStroke - Set the circle to show the stroke. 
 * @param {string} strokeColor - Stroke color for the shape.
 * @param {number} lineWidth - Stroke line size.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Ellipse(position, radiusX, radiusY, rotation, hasFill, fillColor, hasStroke, strokeColor, lineWidth, context) {

    if (!(this instanceof Ellipse)) {
        return new Ellipse(position, radiusX, radiusY, rotation, hasFill, fillColor, hasStroke, strokeColor, lineWidth, context);
    }

    this.position = position;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.rotation = rotation;
    this.hasFill = hasFill;
    this.fillColor = fillColor;
    this.hasStroke = hasStroke;
    this.strokeColor = strokeColor;
    this.lineWidth = lineWidth;
    this.context = context;
    this.update();
}

Ellipse.prototype.render = function () {

    this.context.beginPath();

    if (this.hasFill) {
        this.context.fillStyle = this.fillColor;
    }

    if (this.hasStroke) {
        this.context.strokeStyle = this.strokeColor;
        this.context.lineWidth = this.lineWidth;
        this.context.lineCap = 'round';
    }

    this.context.ellipse(this.position.x, this.position.y, this.radiusX * 2, this.radiusY * 2, this.rotation, 0, Math.PI * 2, false);

    if (this.hasFill) {
        this.context.fill();
    }

    if (this.hasStroke) {
        this.context.stroke()
    }

    this.context.closePath();
}

Ellipse.prototype.update = function () {
    this.render();
}

Ellipse.prototype.getBounds = function () {
    return Rect(this.position.x, this.position.y, this.radiusX, this.radiusY);
}

/**
 * Defines a Triangle shape for the canvas
 * @constructor
 * @param {Vector} position - Vector position.
 * @param {number} size - Size for the shape.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Triangle(position, size, color, context) {

    if (!(this instanceof Triangle)) {
        return new Triangle(position, size, color, context);
    }

    this.position = position;
    this.size = size;
    this.color = color;
    this.context = context;
    this.update();
}

Triangle.prototype.render = function () {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.moveTo((this.position.x), (this.position.y - (this.size / 2)));
    this.context.lineTo((this.position.x + (this.size / 2)), (this.position.y + (this.size / 2)));
    this.context.lineTo((this.position.x - (this.size / 2)), (this.position.y + (this.size / 2)));
    this.context.closePath();
    this.context.fill();
}

Triangle.prototype.update = function () {
    this.render();
}

Triangle.prototype.getBounds = function () {
    return Rect(this.position.x, this.position.y, this.size, this.size);
}

/**
 * Box
 * Defines a simple box shape for the canvas.
 * @constructor
 * @param {Vector} position - The shapes osition.
 * @param {number} size - Size for the shape.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Box(position, size, color, context) {

    if (!(this instanceof Box)) {
        return new Box(position, size, color, context);
    }

    this.position = position;
    this.size = size;
    this.color = color;
    this.context = context;
    this.update();
}

Box.prototype.render = function () {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.position.x, this.position.y, this.size, this.size);
}

Box.prototype.update = function () {
    this.render();
}

Box.prototype.getBounds = function () {
    return Rect(this.position.x, this.position.y, this.size, this.size);
}

/**
 * Rectangle
 * Defines a rectangle shape for the canvas with strke options.
 * @constructor
 * @param {Vector} position - Defines the position of the shape.
 * @param {number} width - Width for the shape.
 * @param {number} height - Height for the shape.
 * @param {boolea} hasFill - Set the shape to show the fill.  
 * @param {string} fillColor - Color for the shape.
 * @param {boolea} hasStroke - Set the shape to show the stroke. 
 * @param {string} strokeColor - Stroke color for the shape.
 * @param {number} lineWidth - Stroke line size.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Rectangle(position, width, height, hasFill, fillColor, hasStroke, strokeColor, lineWidth, context) {

    if (!(this instanceof Rectangle)) {
        return new Rectangle(position, width, height, hasFill, fillColor, hasStroke, strokeColor, lineWidth, context);
    }

    this.position = position;
    this.width = width;
    this.height = height;
    this.hasFill = hasFill;
    this.fillColor = fillColor;
    this.hasStroke = hasStroke;
    this.strokeColor = strokeColor;
    this.lineWidth = lineWidth;
    this.context = context;
    this.update();
}

Rectangle.prototype.render = function () {

    this.context.beginPath();

    if (this.hasFill) {
        this.context.fillStyle = this.fillColor;
    }

    if (this.hasStroke) {
        this.context.strokeStyle = this.strokeColor;
        this.context.lineWidth = this.lineWidth;
        this.context.lineCap = 'round';
    }

    if (this.hasFill) {
        this.context.fill();
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    if (this.hasStroke) {
        this.context.strokeRect(this.position.x, this.position.y, this.width, this.height);
    }

    this.context.closePath();
}

Rectangle.prototype.update = function () {
    this.render();
}


Rectangle.prototype.getBounds = function () {
    return Rect(this.position.x, this.position.y, this.width, this.height);
}

/**
 * Defines a Line shape for the canvas.
 * @constructor
 * @param {Vector} p1 - Start postion.
 * @param {Vector} p2 - End postion.
 * @param {number} lineWidth - Width for the line.
 * @param {string} lineCap - Line cap style.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Line(p1, p2, lineWidth, lineCap, color, context) {
    if (!(this instanceof Line)) {
        return new Line(p1, p2, lineWidth, lineCap, color, context);
    }
    this.p1 = p1;
    this.p2 = p2;
    this.lineWidth = lineWidth;
    this.lineCap = lineCap;
    this.color = color;
    this.context = context;
    this.update();
}

Line.prototype.render = function () {
    this.context.beginPath()
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.lineWidth;
    this.context.lineCap = this.lineCap;
    this.context.moveTo(this.p1.x, this.p1.y);
    this.context.lineTo(this.p2.x, this.p2.y);
    this.context.stroke();
}

Line.prototype.update = function () {
    this.render();
}

/**
 * Defines a grid shape for the canvas.
 * @constructor
 * @param {Vector} position - Start postion.
 * @param {number} width - Grids width.
 * @param {number} height - Grids height.
 * @param {number} divisionSize - Grids division size..
 * @param {string} lineColor - Color for the grid lines.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Grid(position, width, height, divisionSize, lineColor, context) {

    if (!(this instanceof Grid)) {
        return new Grid(position, width, height, divisionSize, lineColor, context);
    }

    this.position = position;
    this.width = width;
    this.height = height;
    this.divisionSize = divisionSize;
    this.lineColor = lineColor;
    this.context = context;
    this.update();
}

Grid.prototype.update = function () {
    this.render();
}

Grid.prototype.render = function () {
    var x = this.position.x;
    for (var i = 0; i < this.width; i += this.divisionSize) {
        x += this.divisionSize;
        var line = Line(Vector(x, this.position.y), Vector(x, this.height), 0.5, 'round', this.lineColor, this.context);
    }

    var y = this.position.y;
    for (var i = 0; i < this.height; i += this.divisionSize) {
        y += this.divisionSize;
        var line = Line(Vector(this.position.x, y), Vector(this.width, y), 0.5, 'round', this.lineColor, this.context);
    }
}

/**
 * Defines a Text shape for the canvas
 * @constructor
 * @param {Vector} position - Postion.
 * @param {number} size - Text size.
 * @param {string} text - Text.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Text(position, size, text, color, context) {
    if (!(this instanceof Text)) {
        return new Text(position, size, text, color, context);
    }
    this.position = position;
    this.size = size;
    this.text = text;
    this.color = color;
    this.context = context;
    this.update();
}

Text.prototype.render = function () {
    this.context.fillStyle = this.color;
    this.context.font = '' + this.size + 'px Lato';
    this.context.textAlign = 'left';
    this.context.fillText(this.text, this.position.x, this.position.y);

}

Text.prototype.update = function () {
    this.render();
}

/**
 * SBall
 * Defines a simmple svg ball.
 * @constructor
 * @param {vector} position - Position.
 * @param {number} radius - Radius for the shape.
 * @param {string} color - Color for the shape.
 */
function SBall(position, radius, color) {

    if (!(this instanceof SBall)) {
        return new SBall(position, radius, color);
    }

    this.position = position;
    this.radius = radius;
    this.color = color;
    this.svg;
    this.circle;
    this.render();
    this.update();
}

SBall.prototype.update = function () {
    this.svg.style.left = this.position.x;
    this.svg.style.top = this.position.y;
}

SBall.prototype.render = function () {
    let xmlns = "http://www.w3.org/2000/svg";
    this.svg = document.createElementNS(xmlns, 'svg');
    this.svg.setAttribute('width', (this.radius * 2));
    this.svg.setAttribute('height', (this.radius * 2));
    this.svg.style.fill = this.color;
    document.body.appendChild(this.svg);

    this.circle = document.createElementNS(xmlns, 'circle');
    this.circle.setAttribute('cx', this.radius);
    this.circle.setAttribute('cy', this.radius);
    this.circle.setAttribute('r', this.radius);
    this.svg.appendChild(this.circle);
}

SBall.prototype.getBounds = function () {
    return Rect(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
}

/**
 * RoundRect
 * Defines a rectangle shape for the canvas with strke options.
 * @constructor
 * @param {Vector} p - Defines the position of the shape.
 * @param {number} w - Width for the shape.
 * @param {number} h - Height for the shape.
 * @param {number} cr - Radius for the corner.
 * @param {number} c - Color for the shape.
 * @param {CanvasRenderingContext2D} ctx - The 2d rendering context from the canvas.
 */
function RoundRect(p, w, h, cr, c, ctx) {
    if (!(this instanceof RoundRect)) {
        return new RoundRect(p, w, h, cr, c, ctx);
    }
    this.p = p;
    this.w = w;
    this.h = h;
    this.cr = cr
    this.c = c;
    this.ctx = ctx;
    this.update();
}

RoundRect.prototype.update = function () {
    this.render();
}

RoundRect.prototype.render = function () {
    this.ctx.fillStyle = this.c;
    this.ctx.beginPath();
    this.ctx.moveTo(this.p.x + (this.w - this.cr), this.p.y);
    this.ctx.quadraticCurveTo(this.p.x + this.w, this.p.y, this.p.x + this.w, this.p.y + this.cr);
    this.ctx.lineTo(this.p.x + this.w, this.p.y + (this.h - this.cr));
    this.ctx.quadraticCurveTo(this.p.x + this.w, this.p.y + this.h, this.p.x + (this.w - this.cr), this.p.y + this.h);
    this.ctx.lineTo(this.p.x + this.cr, this.p.y + this.h);
    this.ctx.quadraticCurveTo(this.p.x, this.p.y + this.h, this.p.x, this.p.y + (this.h - this.cr));
    this.ctx.lineTo(this.p.x, this.p.y + this.cr);
    this.ctx.quadraticCurveTo(this.p.x, this.p.y, this.p.x + this.cr, this.p.y);
    this.ctx.closePath();
    this.ctx.fill()
}



/**
 * RoundRectangle
 * Defines a rectangle shape for the canvas with strke options.
 * @constructor
 * @param {Vector} p - Defines the position of the shape.
 * @param {number} w - Width for the shape.
 * @param {number} h - Height for the shape.
 * @param {number} cr - Radius for the corner.
 * @param {boolea} hasFill - Set the shape to show the fill.  
 * @param {string} c - Color for the shape.
 * @param {boolea} hasStroke - Set the shape to show the stroke. 
 * @param {string} sc - Stroke color for the shape.
 * @param {number} lw - Stroke line width size.
 * @param {CanvasRenderingContext2D} ctx - The 2d rendering context from the canvas.
 */
function RoundRectangle(p, w, h, cr, hasFill, c, hasStroke, sc, lw, ctx) {
    if (!(this instanceof RoundRectangle)) {
        return new RoundRectangle(p, w, h, cr, hasFill, c, hasStroke, sc, lw, ctx);
    }
    this.p = p;
    this.w = w;
    this.h = h;
    this.cr = cr
    this.hasFill = hasFill;
    this.c = c;
    this.hasStroke = hasStroke;
    this.sc = sc;
    this.lw = lw;
    this.ctx = ctx;
    this.update();
}

RoundRectangle.prototype.update = function () {
    this.render();
}

RoundRectangle.prototype.render = function () {



    if (this.hasFill) {
        this.ctx.fillStyle = this.c;
        this.ctx.beginPath();
    }

    if (this.hasStroke) {
        this.ctx.strokeStyle = this.sc;
        this.ctx.lineWidth = this.lw;
        this.ctx.lineCap = 'round';
    }

    this.ctx.moveTo(this.p.x + (this.w - this.cr), this.p.y);
    this.ctx.quadraticCurveTo(this.p.x + this.w, this.p.y, this.p.x + this.w, this.p.y + this.cr);
    this.ctx.lineTo(this.p.x + this.w, this.p.y + (this.h - this.cr));
    this.ctx.quadraticCurveTo(this.p.x + this.w, this.p.y + this.h, this.p.x + (this.w - this.cr), this.p.y + this.h);
    this.ctx.lineTo(this.p.x + this.cr, this.p.y + this.h);
    this.ctx.quadraticCurveTo(this.p.x, this.p.y + this.h, this.p.x, this.p.y + (this.h - this.cr));
    this.ctx.lineTo(this.p.x, this.p.y + this.cr);
    this.ctx.quadraticCurveTo(this.p.x, this.p.y, this.p.x + this.cr, this.p.y);
    this.ctx.closePath();

    if (this.hasFill) {
        this.ctx.fill()
    }

    if (this.hasStroke) {
        this.ctx.stroke();
    }

}
