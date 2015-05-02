/**
 * @class
 * @classdesc Represent a drawable object.
 */
SFHL.Drawable = function () {
};

/**
 * Render object to context.
 * 
 * @abstract
 * @param {HTMLContext} context
 */
SFHL.Drawable.prototype.render = function (context) {
	throw new Error("Missing draw implementation of Drawable object.");
};

/**
 * Render object to scene.
 */
SFHL.Drawable.prototype.draw = function () {
	this.render(SFHL.Application.instance.context);
};
