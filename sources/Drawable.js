/**
 * Represent a drawable object.
 * 
 * @interface
 */
SFHL.Drawable = function () {};

/**
 * Render object to context.
 * 
 * @abstract
 * @param {HTMLContext} context
 */
SFHL.Drawable.prototype.render = function (context) {
	throw new Error("Missing draw implementation of Drawable object.");
};
