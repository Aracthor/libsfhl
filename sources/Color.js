/**
 * @class
 * @classdesc Functions for color-number manipulation.
 */
SFHL.Color = function (r, g, b) {
	if (r !== undefined) {
		this.setFromIntNumbers(r, g, b);
	}
};

/**
 * Red color data
 * 
 * @type {number}
 * @default
 */
SFHL.Color.prototype.r = 0x00;

/**
 * Green color data
 * 
 * @type {number}
 * @default
 */
SFHL.Color.prototype.g = 0x00;

/**
 * Blue color data
 * 
 * @type {number}
 * @default
 */
SFHL.Color.prototype.b = 0x00;

/**
 * Replace color data by a new one.
 * 
 * @param {number} number New data.
 */
SFHL.Color.prototype.setFromInteger = function (number) {
	this.r = (number & 0xFF0000) >> 16;
	this.g = (number & 0x00FF00) >> 8;
	this.b = (number & 0x0000FF) >> 0;
};

/**
 * Replace color data by a new one.
 * Each param must be between 0x00 and 0xFF.
 * 
 * @param {number} r Red value.
 * @param {number} g Green value.
 * @param {number} b Blue value.
 */
SFHL.Color.prototype.setFromIntNumbers = function (r, g, b) {
	this.setFromInteger((r << 16) + (g << 8) + b);
};

/**
 * Replace color data by a new one.
 * Each param must be between 0.0 and 1.0.
 * 
 * @param {number} r Red value.
 * @param {number} g Green value.
 * @param {number} b Blue value.
 */
SFHL.Color.prototype.setFromFloatNumbers = function (r, g, b) {
	this.r = r * 0xFF;
	this.g = g * 0xFF;
	this.b = b * 0xFF;
};

/**
 * Return a copy of the instance.
 * 
 * @return {SFHL.Color} Copy of the instance.
 */
SFHL.Color.prototype.clone = function () {
	var copy = new SFHL.Color();
	
	copy.setFromIntNumbers(this.r, this.g, this.b);
	
	return (copy);
};

/**
 * Convert color to hexa string format.
 * 
 * @return {string}
 */
SFHL.Color.prototype.toString = function () {
	var colors = [this.r, this.g, this.b];
	var string = "#";
	
	for (var i in colors) {
		var color = colors[i];
		var elem = color.toString(16);
		if (elem.length === 1) {
			elem = "0" + elem;
		}
		string += elem;
	}
	
	return (string);
};


/**
 * Black color instance.
 * 
 * @type {SFHL.Color}
 * @const
 */
SFHL.Color.black = new SFHL.Color(0, 0, 0);

/**
 * Red color instance.
 * 
 * @type {SFHL.Color}
 * @const
 */
SFHL.Color.red = new SFHL.Color(0xFF, 0, 0);

/**
 * Green color instance.
 * 
 * @type {SFHL.Color}
 * @const
 */
SFHL.Color.green = new SFHL.Color(0, 0xFF, 0);

/**
 * Blue color instance.
 * 
 * @type {SFHL.Color}
 * @const
 */
SFHL.Color.blue = new SFHL.Color(0, 0, 0xFF);

/**
 * Yellow color instance.
 * 
 * @type {SFHL.Color}
 * @const
 */
SFHL.Color.yellow = new SFHL.Color(0xFF, 0xFF, 0);

/**
 * Magenta color instance.
 * 
 * @type {SFHL.Color}
 * @const
 */
SFHL.Color.magenta = new SFHL.Color(0xFF, 0, 0xFF);

/**
 * Cyan color instance.
 * 
 * @type {SFHL.Color}
 * @const
 */
SFHL.Color.cyan = new SFHL.Color(0, 0xFF, 0xFF);

/**
 * White color instance.
 * 
 * @type {SFHL.Color}
 * @const
 */
SFHL.Color.white = new SFHL.Color(0xFF, 0xFF, 0xFF);
