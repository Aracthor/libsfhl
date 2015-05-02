/**
 * @class
 * @classdesc Colored rectangle.
 * @extends SFHL.Drawable
 */
SFHL.Rectangle = function () {
	this.position = new SFHL.Vector();
	this.fillColor = SFHL.Color.white.clone();
	this.borderColor = SFHL.Color.black.clone();
};

SFHL.Rectangle.prototype = Object.create(SFHL.Drawable.prototype);

/**
 * @type {SFHL.Vector}
 */
SFHL.Rectangle.prototype.position = null;

/**
 * @type {number}
 * @default
 */
SFHL.Rectangle.prototype.width = 0;

/**
 * @type {number}
 * @default
 */
SFHL.Rectangle.prototype.height = 0;

/**
 * @type {boolean}
 * @default
 */
SFHL.Rectangle.prototype.fill = true;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Rectangle.prototype.fillColor = SFHL.Color.white;

/**
 * @type {boolean}
 * @default
 */
SFHL.Rectangle.prototype.border = false;

/**
 * @type {number}
 * @default
 */
SFHL.Rectangle.prototype.borderWidth = 1;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Rectangle.prototype.borderColor = SFHL.Color.black;

/**
 * Render line to 2D context.
 * 
 * @param {HTMLContext} context
 */
SFHL.Rectangle.prototype.render = function (context) {
	context.beginPath();
	context.rect(this.position.x, this.position.y, this.width, this.height);
	if (this.fill) {
		context.fillStyle = this.fillColor.toString();
		context.fill();
	}
	if (this.border) {
		context.lineWidth = this.borderWidth;
		context.strokeStyle = this.borderColor.toString();
		context.stroke();	
	}
};
