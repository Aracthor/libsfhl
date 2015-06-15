/**
 * @class
 * @classdesc Renderable text.
 * @implements VVGL.Drawable
 * @param {string} string
 */
SFHL.Text = function (string) {
	this.string = string;
	this.position = new SFHL.Vector();
	this.color = SFHL.Color.black.clone();
};

SFHL.Text.prototype = Object.create(SFHL.Drawable.prototype);

/**
 * @type {SFHL.Vector}
 */
SFHL.Text.prototype.position = null;

/**
 * @type {boolean}
 * @default
 */
SFHL.Text.prototype.lined = false;

/**
 * @type {boolean}
 * @default
 */
SFHL.Text.prototype.horizontalAligned = false;

/**
 * @type {boolean}
 * @default
 */
SFHL.Text.prototype.verticalAligned = false;


/**
 * @type {number}
 * @default
 */
SFHL.Text.prototype.lineWidth = 2;

/**
 * @type {number}
 * @default
 */
SFHL.Text.prototype.size = 10;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Text.prototype.color = SFHL.Color.black;

/**
 * @type {string}
 * @default
 */
SFHL.Text.prototype.font = "Arial";

/**
 * Render text to 2D context.
 * 
 * @param {HTMLContext} context
 */
SFHL.Text.prototype.render = function (context) {
	context.font = this.size + "pt " + this.font;
	context.textAlign = this.horizontalAligned ? "center" : "";
	context.textBaseline = this.verticalAligned ? "middle" : "";
	
	if (this.lined) {
		context.lineWidth = this.lineWidth;
		context.strokeStyle = this.color.toString();
		context.strokeText(this.string, this.position.x, this.position.y);
	} else {
		context.fillStyle = this.color.toString();
		context.fillText(this.string, this.position.x, this.position.y);
	}
};
