/**
 * Truck
 * Creates small food truck
 * @constructor
 * @param {Vector} position - Defines the position of the circle.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Truck(position, context) {

    if (!(this instanceof Truck)) {
        return new Truck(position, context);
    }

    this.topColor = '#e33335';
    this.bottomColor = '#167b15';
    this.windowColor = '#454545';
    this.color1 = 'orangered';
    this.context = context;
    this.position = position;
    this.truckWidth = 230;
    this.angle = 0;

    //Wheel Left
    this.wheell = Wheel(Vector(this.position.x + 60, this.position.y + 170), this.context);

    //Wheel Right
    this.wheelr = Wheel(Vector(this.position.x + 215, this.position.y + 170), this.context);
}

Truck.prototype.update = function () {

    this.render();
    this.wheell.update();
    this.wheelr.update();
}

Truck.prototype.render = function () {

    //Lucesita de la parte de atras.
    let stop = Ball(Vector(this.position.x - 5, this.position.y + 15), 4, 'red', this.context);
    let stopBg = Line(Vector(this.position.x, this.position.y + 12), Vector(this.position.x, this.position.y + 20), 8, 'round', '#1b2d3d', this.context);

    //Calentador de arriba.
    let hline = Line(Vector(this.position.x + 33, this.position.y), Vector(this.position.x + 65, this.position.y), 34, 'round', this.color1, this.context);
    hline = Line(Vector(this.position.x + 30, this.position.y - 10), Vector(this.position.x + 32, this.position.y - 5), 4, 'round', '#355065', this.context);
    hline = Line(Vector(this.position.x + 36, this.position.y - 10), Vector(this.position.x + 38, this.position.y - 5), 4, 'round', '#355065', this.context);
    hline = Line(Vector(this.position.x + 42, this.position.y - 10), Vector(this.position.x + 44, this.position.y - 5), 4, 'round', '#355065', this.context);

    //Llanta o covertor de la llanta trasera
    let backTire = Line(Vector(this.position.x, this.position.y + 95), Vector(this.position.x, this.position.y + 130), 25, 'round', '#910e1a', this.context);

    //Parte de la carroseria superior
    this.context.fillStyle = this.topColor;
    this.context.beginPath();
    this.context.moveTo(this.position.x + 10, this.position.y);
    this.context.lineTo(this.position.x + this.truckWidth - 10, this.position.y);
    this.context.quadraticCurveTo(this.position.x + this.truckWidth, this.position.y, this.position.x + this.truckWidth, this.position.y + 10);
    this.context.lineTo(this.position.x + this.truckWidth + 10, this.position.y + 80);
    this.context.lineTo(this.position.x, this.position.y + 80);
    this.context.lineTo(this.position.x, this.position.y + 10);
    this.context.quadraticCurveTo(this.position.x, this.position.y, this.position.x + 10, this.position.y);
    this.context.fill();
    this.context.closePath();


    //Parte de la carroseria inferior
    this.context.fillStyle = this.bottomColor;
    this.context.beginPath();
    this.context.moveTo(this.position.x + this.truckWidth + 10, this.position.y + 80);
    this.context.lineTo(this.position.x + this.truckWidth + 30, this.position.y + 100);
    this.context.lineTo(this.position.x + this.truckWidth + 35, this.position.y + 160);
    this.context.quadraticCurveTo(this.position.x + this.truckWidth + 35, this.position.y + 170, this.position.x + this.truckWidth + 25, this.position.y + 170);
    this.context.lineTo(this.position.x + 10, this.position.y + 170);
    this.context.quadraticCurveTo(this.position.x, this.position.y + 170, this.position.x, this.position.y + 160);
    this.context.lineTo(this.position.x, this.position.y + 80);
    this.context.fill();
    this.context.closePath();


    //Ventana de ventas
    let salesWindow = RoundRect(Vector(this.position.x + 20, this.position.y + 20), 100, 80, 5, this.windowColor, this.context);

    //Base de la ventana de ventas
    let salesWindowBottom = RoundRect(Vector(this.position.x + 15, this.position.y + 85), 110, 15, 5, this.color1, this.context);

    //Lineas de adorno
    let line = Line(Vector(this.position.x, this.position.y + 170), Vector(this.position.x + 265, this.position.y + 170), 8, 'round', 'black', this.context);

    line = Line(Vector(this.position.x + 10, this.position.y + 110), Vector(this.position.x + 125, this.position.y + 110), 6, 'round', 'rgba(0,0,0,0.25)', this.context);

    line = Line(Vector(this.position.x + 10, this.position.y + 122), Vector(this.position.x + 125, this.position.y + 122), 6, 'round', 'rgba(0,0,0,0.25)', this.context);

    //Luz direccional
    let lightBg = Line(Vector(this.position.x + 10, this.position.y + 140), Vector(this.position.x + 20, this.position.y + 140), 12, 'round', 'white', this.context);

    let lightft = Line(Vector(this.position.x + 10, this.position.y + 140), Vector(this.position.x + 20, this.position.y + 140), 4, 'round', 'orange', this.context);

    //Ventan del chofer
    let points = [];
    points.push(ShapePoint(Vector(this.position.x + 220, this.position.y + 10), 10));
    points.push(ShapePoint(Vector(this.position.x + 230, this.position.y + 90), 10));
    points.push(ShapePoint(Vector(this.position.x + 190, this.position.y + 90), 10));
    points.push(ShapePoint(Vector(this.position.x + 190, this.position.y + 10), 10));
    this.context.fillStyle = this.windowColor;
    this.context.beginPath();
    this.context.moveTo(points[0].p.x - points[0].cr, points[0].p.y);
    this.context.quadraticCurveTo(points[0].p.x, points[0].p.y, points[0].p.x, points[0].p.y + points[0].cr);
    this.context.lineTo(points[1].p.x, points[1].p.y - points[1].cr);
    this.context.quadraticCurveTo(points[1].p.x, points[1].p.y, points[1].p.x - points[1].cr, points[1].p.y);
    this.context.lineTo(points[2].p.x + points[2].cr, points[2].p.y);
    this.context.quadraticCurveTo(points[2].p.x, points[2].p.y, points[2].p.x, points[2].p.y - points[2].cr);
    this.context.lineTo(points[3].p.x, points[3].p.y + points[3].cr);
    this.context.quadraticCurveTo(points[3].p.x, points[3].p.y, points[3].p.x + points[3].cr, points[3].p.y);
    this.context.closePath();
    this.context.fill();

    //Puerta
    points = [];
    points.push(ShapePoint(Vector(this.position.x + 180, this.position.y + 10), 10));
    points.push(ShapePoint(Vector(this.position.x + 180, this.position.y + 160), 10));
    points.push(ShapePoint(Vector(this.position.x + 140, this.position.y + 160), 10));
    points.push(ShapePoint(Vector(this.position.x + 140, this.position.y + 10), 10));
    this.context.strokeStyle = 'rgba(0,0,0,0.25)';
    this.context.lineWidth = 3;
    this.context.beginPath();
    this.context.moveTo(points[0].p.x - points[0].cr, points[0].p.y);
    this.context.quadraticCurveTo(points[0].p.x, points[0].p.y, points[0].p.x, points[0].p.y + points[0].cr);
    this.context.lineTo(points[1].p.x, points[1].p.y - points[1].cr);
    this.context.quadraticCurveTo(points[1].p.x, points[1].p.y, points[1].p.x - points[1].cr, points[1].p.y);
    this.context.lineTo(points[2].p.x + points[2].cr, points[2].p.y);
    this.context.quadraticCurveTo(points[2].p.x, points[2].p.y, points[2].p.x, points[2].p.y - points[2].cr);
    this.context.lineTo(points[3].p.x, points[3].p.y + points[3].cr);
    this.context.quadraticCurveTo(points[3].p.x, points[3].p.y, points[3].p.x + points[3].cr, points[3].p.y);
    this.context.closePath();
    this.context.stroke();

    //Manilla de puerta
    line = Line(Vector(this.position.x + 148, this.position.y + 100), Vector(this.position.x + 155, this.position.y + 100), 6, 'round', 'rgba(0,0,0,0.25)', this.context);

    //Ventanas de puerta
    this.context.beginPath();
    this.context.fillStyle = this.windowColor;
    this.context.strokeStyle = 'rgba(0,0,0,0.25)';
    this.context.lineWidth = 3;
    this.context.rect(this.position.x + 146, this.position.y + 18, 12, 70);
    this.context.rect(this.position.x + 162, this.position.y + 18, 12, 70);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();

    //Light
    let light1 = Ball(Vector(this.position.x + 245, this.position.y + 110), 10, 'white', this.context);
    let light2 = Ball(Vector(this.position.x + 245, this.position.y + 110), 6, '#f5c132', this.context);

    //Bumper frontal
    let bumperFrontSh = Line(Vector(this.position.x + 259, this.position.y + 159), Vector(this.position.x + 258, this.position.y + 157), 17, 'round', 'rgba(0,0,0,0.25)', this.context);

    let bumperFront = Line(Vector(this.position.x + 260, this.position.y + 155), Vector(this.position.x + 265, this.position.y + 156), 15, 'round', '#d4d9dd', this.context);

    //Bumper trasero
    let bumperBackSh = Line(Vector(this.position.x + 5, this.position.y + 158), Vector(this.position.x + 8, this.position.y + 158), 17, 'round', 'rgba(0,0,0,0.25)', this.context);

    let bumperBack = Line(Vector(this.position.x, this.position.y + 157), Vector(this.position.x + 5, this.position.y + 156), 15, 'round', '#d4d9dd', this.context);

    //Guarda barro izquierdo
    this.context.fillStyle = 'black';
    this.context.beginPath();
    this.context.arc(this.position.x + 60, this.position.y + 170, 35, Math.PI, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();

    //Guarda barro derecho
    this.context.fillStyle = 'black';
    this.context.beginPath();
    this.context.arc(this.position.x + 215, this.position.y + 170, 35, Math.PI, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();
}

function ShapePoint(p, cr) {
    if (!(this instanceof ShapePoint)) {
        return new ShapePoint(p, cr);
    }

    this.p = p;
    this.cr = cr;
}
