/**
 * Create a vector from two number, or null vector by default.
 * 
 * @class
 * @classdesc Two-dimentional vector.
 * @param {number} x [x = 0]
 * @param {number} y [y = 0]
 */
SFHL.Vector = function (x, y) {
	this.x = x ? x : 0;
	this.y = y ? y : 0;
};

/**
 * @type {number}
 * @default
 */
SFHL.Vector.prototype.x = 0;

/**
 * @type {number}
 * @default
 */
SFHL.Vector.prototype.y = 0;

/**
 * Add vector's data to this one.
 * 
 * @param {SFHL.Vector} vector
 */
SFHL.Vector.prototype.add = function (vector) {
	this.x += vector.x;
	this.y += vector.y;
};

/**
 * Sub vector's data to this one.
 * 
 * @param {SFHL.Vector} vector
 */
SFHL.Vector.prototype.sub = function (vector) {
	this.x -= vector.x;
	this.y -= vector.y;
};
