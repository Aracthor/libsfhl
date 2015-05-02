/**
 * @class
 * @classdesc Pixel line.
 * @extends SFHL.Drawable
 */
SFHL.Line = function () {
	this.start = new SFHL.Vector();
	this.end = new SFHL.Vector();
	this.color = SFHL.Color.black.clone();
};

SFHL.Line.prototype = Object.create(SFHL.Drawable.prototype);

/**
 * @type {SFHL.Vector}
 */
SFHL.Line.prototype.start = null;

/**
 * @type {SFHL.Vector}
 */
SFHL.Line.prototype.end = null;

/**
 * @type {number}
 * @default
 */
SFHL.Line.prototype.width = 1;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Line.prototype.color = SFHL.Color.black;

/**
 * @type {SFHL.LineCap}
 * @default
 */
SFHL.Line.prototype.lineCap = SFHL.LineCap.butt;

/**
 * Render line to 2D context.
 * 
 * @param {HTMLContext} context
 */
SFHL.Line.prototype.render = function (context) {
	context.beginPath();
	context.moveTo(this.start.x, this.start.y);
	context.lineTo(this.end.x, this.end.y);
	context.lineWidth = this.width;
	context.strokeStyle = this.color.toString();
	context.lineCap = this.lineCap;
	context.stroke();
};
