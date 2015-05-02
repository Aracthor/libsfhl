/**
 * Static object regrouping mouse functions.
 * 
 * @class
 */
SFHL.Mouse = {};

SFHL.Mouse.buttonsActuallyPressed = new Array(SFHL.MouseButton.MAX);


/**
 * To know if a mouse button is actually pressed.
 * 
 * @static
 * @param {SFHL.MouseButton} button
 * @return {boolean}
 */
SFHL.Mouse.buttonIsPressed = function (button) {
	return (this.buttonsActuallyPressed.indexOf(button) !== -1);
};

/**
 * To know if the mouse cursor is locked.
 * 
 * @type {boolean}
 * @static
 * @readonly
 */
SFHL.Mouse.isLocked = false;

/**
 * Add button from pressed list.
 * 
 * @private
 * @static
 * @param {SFHL.MouseButton} button
 */
SFHL.Mouse.pressButton = function (button) {
	this.buttonsActuallyPressed.push(button);
};

/**
 * Remove button from pressed list.
 * 
 * @private
 * @static
 * @param {SFHL.MouseButton} button
 */
SFHL.Mouse.releaseButton = function (button) {
	this.buttonsActuallyPressed.splice(this.buttonsActuallyPressed.indexOf(button), 1);
};
