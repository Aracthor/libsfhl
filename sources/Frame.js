/**
 * @class
 * @classdesc Pixel frame. Must be updated after each modification.
 * @implements SFHL.Drawable
 */
SFHL.Frame = function () {
	this.start = new SFHL.Vector();
	this.end = new SFHL.Vector();
	this.color = SFHL.Color.black.clone();
	
	this.borders = [new SFHL.Line(), new SFHL.Line(), new SFHL.Line(), new SFHL.Line()];

	this.angles = [new SFHL.Arc(), new SFHL.Arc(), new SFHL.Arc(), new SFHL.Arc()];
	this.angles[0].startAngle = Math.PI;
	this.angles[0].endAngle = 3 * Math.PI / 2;
	this.angles[1].startAngle = 3 * Math.PI / 2;
	this.angles[1].endAngle = Math.PI * 2;
	this.angles[2].startAngle = 0;
	this.angles[2].endAngle = Math.PI / 2;
	this.angles[3].startAngle = Math.PI / 2;
	this.angles[3].endAngle = Math.PI;
	
	this.update();
};

SFHL.Frame.prototype = Object.create(SFHL.Drawable.prototype);

/**
 * @type {SFHL.Vector}
 */
SFHL.Frame.prototype.start = null;

/**
 * @type {SFHL.Vector}
 */
SFHL.Frame.prototype.end = null;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Frame.prototype.color = SFHL.Color.black;

/**
 * @type {number}
 * @default
 */
SFHL.Frame.prototype.lineWidth = 1;

/**
 * @type {number}
 * @default
 */
SFHL.Frame.prototype.anglesRadius = 1;

/**
 * Update frame internal data from public members.
 */
SFHL.Frame.prototype.update = function () {
	for (var i in this.borders) {
		var border = this.borders[i];
		border.color = this.color;
		border.width = this.lineWidth;
	}
	
	this.borders[0].start.x = this.start.x + this.anglesRadius - 1;
	this.borders[0].start.y = this.start.y;
	this.borders[0].end.x = this.end.x - this.anglesRadius + 1;
	this.borders[0].end.y = this.start.y;
	this.borders[1].start.x = this.end.x;
	this.borders[1].start.y = this.start.y + this.anglesRadius - 1;
	this.borders[1].end.x = this.end.x;
	this.borders[1].end.y = this.end.y - this.anglesRadius + 1;
	this.borders[2].start.x = this.end.x - this.anglesRadius + 1;
	this.borders[2].start.y = this.end.y;
	this.borders[2].end.x = this.start.x + this.anglesRadius - 1;
	this.borders[2].end.y = this.end.y;
	this.borders[3].start.x = this.start.x;
	this.borders[3].start.y = this.end.y - this.anglesRadius + 1;
	this.borders[3].end.x = this.start.x;
	this.borders[3].end.y = this.start.y + this.anglesRadius - 1;

	for (var i in this.angles) {
		var angle = this.angles[i];
		angle.radius = this.anglesRadius;
		angle.color = this.color;
		angle.lineWidth = this.lineWidth;
	}
	
	this.angles[0].position.x = this.start.x + this.anglesRadius;
	this.angles[0].position.y = this.start.y + this.anglesRadius;
	this.angles[1].position.x = this.end.x - this.anglesRadius;
	this.angles[1].position.y = this.start.y + this.anglesRadius;
	this.angles[2].position.x = this.end.x - this.anglesRadius;
	this.angles[2].position.y = this.end.y - this.anglesRadius;
	this.angles[3].position.x = this.start.x + this.anglesRadius;
	this.angles[3].position.y = this.end.y - this.anglesRadius;
};

/**
 * Render intern data to 2D context.
 * 
 * @override
 * @param {HTMLContext} context
 */
SFHL.Frame.prototype.render = function (context) {
	this.borders[0].render(context);
	this.borders[1].render(context);
	this.borders[2].render(context);
	this.borders[3].render(context);
	this.angles[0].render(context);
	this.angles[1].render(context);
	this.angles[2].render(context);
	this.angles[3].render(context);
};
