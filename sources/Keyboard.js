/**
 * Static object regrouping keyboard functions.
 * 
 * @class
 */
SFHL.Keyboard = {};

SFHL.Keyboard.keysActuallyPressed = new Array(SFHL.KeyCode.MAX);


/**
 * To know if a key is actually pressed.
 * 
 * @static
 * @param {SFHL.KeyCode} key
 * @return {boolean}
 */
SFHL.Keyboard.keyIsPressed = function (key) {
	return (this.keysActuallyPressed.indexOf(key) !== -1);
};

/**
 * Add key from pressed list.
 * 
 * @private
 * @static
 * @param {SFHL.KeyCode} key
 */
SFHL.Keyboard.pressKey = function (key) {
	this.keysActuallyPressed.push(key);
};

/**
 * Remove key from pressed list.
 * 
 * @private
 * @static
 * @param {SFHL.KeyCode} key
 */
SFHL.Keyboard.releaseKey = function (key) {
	this.keysActuallyPressed.splice(this.keysActuallyPressed.indexOf(key), 1);
};
