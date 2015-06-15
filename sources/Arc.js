/**
 * @class
 * @classdesc Pixel arc.
 * @implements SFHL.Drawable
 */
SFHL.Arc = function () {
	this.position = new SFHL.Vector();
	this.color = SFHL.Color.black.clone();
};

SFHL.Arc.prototype = Object.create(SFHL.Drawable.prototype);

/**
 * @type {SFHL.Vector}
 */
SFHL.Arc.prototype.position = null;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Arc.prototype.color = SFHL.Color.black;

/**
 * @type {number}
 * @default
 */
SFHL.Arc.prototype.lineWidth = 1;

/**
 * @type {number}
 * @default
 */
SFHL.Arc.prototype.radius = 0;

/**
 * @type {number}
 * @default
 */
SFHL.Arc.prototype.startAngle = 0;

/**
 * @type {number}
 * @default
 */
SFHL.Arc.prototype.endAngle = 2 * Math.PI;


/**
 * Render arc to context.
 * 
 * @override
 * @param {HTMLContext} context
 */
SFHL.Arc.prototype.render = function (context) {
	context.beginPath();
	context.arc(this.position.x, this.position.y, this.radius, this.startAngle, this.endAngle, false);
	context.lineWidth = this.lineWidth;
	
	context.strokeStyle = this.color.toString();
	context.stroke();
};
