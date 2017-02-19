/** 
 * Converts randians to degrees.
 * @param {number} radians - The radians angle to convert to degrees.
 * @return {number} angle - Return the angle in degrees.
 */
function toDegrees(radians) {
    return radians * 180 / Math.PI;
}

/** 
 * Converts degrees to radians.
 * @param {number} degrees - The degrees angle to convert to radians.
 * @return {number} angle - Return the angle in radians.
 */
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

/**
 * Point
 * This is a simple class to define a point in space.
 * @param {number} x - X position.
 * @param {number} y - Y position.
 */
function Point(x, y) {
    if (!(this instanceof Point)) {
        return new Point(x, y);
    }
    this.x = x;
    this.y = y;
}

/**
 * Rect
 * This is a simple class to define a rect in space.
 * @param {number} x - X position.
 * @param {number} y - Y position.
 * @param {number} width - This is the width proportions of the shape.
 * @param {number} height - This is the height proportions of the shape.
 */
function Rect(x, y, width, height) {
    if (!(this instanceof Rect)) {
        return new Rect(x, y, width, height);
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

/**
 * hitRectOnRect() check if two given rects are intersecting each other.
 * @param {Rect} r1 - Rect 1 to check 
 * @param {Rect} r2 - Rect 2 to check 
 * @return {boolean} value - Returns true if there is intersection between the two rects
 */
function hitRectOnRect(r1, r2) {
    if (r1.x + r1.width > r2.x &&
        r2.x + r2.width > r1.x &&
        r1.y + r1.height > r2.y &&
        r2.y + r2.height > r1.y) {
        return true;
    }
    return false;
}

/**
 * hitPointOnRect() check if two given rects are intersecting each other.
 * @param {number} x - X coordinate to check from.
 * @param {number} y - Y coordinate to check from.
 * @param {Rect} r - Rect to check 
 * @return {boolean} value - Returns true if there is intersection between the two rects
 */
function hitPointOnRect(x, y, r) {
    if (x > r.x &&
        x < r.x + r.width &&
        y > r.y &&
        y < r.y + r.height) {
        return true;
    }
    return false;
}

/**
 * hitBallOnBall() check if two given balls are colliding each other.
 * @param {Vector} p1 - p1 position 1.
 * @param {number} r1 - r1 radious.
 * @param {Vector} p2 - p2 position 1.
 * @param {number} r2 - r2 radious.
 * @return {boolean} value - Returns true if there is a collision between the two objects.
 */
function hitBallOnBall(p1, r1, p2, r2) {
    let m = p1.magnitudeTo(p2);
    if (m < r1 + r2) {
        return true;
    }
    return false;
}

function createCanvas(x, y, w, h) {
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.left = x;
    canvas.style.top = y;
    canvas.width = w;
    canvas.height = h;
    return canvas;
}

function randomBtween(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}