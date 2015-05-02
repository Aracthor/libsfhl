/**
 * @class
 * @classdesc Sprite linked to texture.
 * @extends SFHL.Drawable
 * @todo add texture rect
 */
SFHL.Sprite = function () {
	SFHL.Drawable.call(this);
	this.position = new SFHL.Vector();
};

SFHL.Sprite.prototype = Object.create(SFHL.Drawable.prototype);

/**
 * @type {SFHL.Vector}
 */
SFHL.Sprite.prototype.position = null;

/**
 * @type {number}
 * @default
 */
SFHL.Sprite.prototype.width = 0;

/**
 * @type {number}
 * @default
 */
SFHL.Sprite.prototype.height = 0;

/**
 * @type {SFHL.Texture}
 */
SFHL.Sprite.prototype.texture = null;

/**
 * Render sprite to 2D context.
 * 
 * @param {HTMLContext} context
 */
SFHL.Sprite.prototype.render = function (context) {
	if (this.texture === null) {
		console.error("Missing texture for sprite.");
	} else if (this.texture.isReady()) {
		context.drawImage(this.texture.image, this.position.x, this.position.y, this.width, this.height);
	}
};


SFHL.Sprite.fromFile = function (file) {
	var sprite = new SFHL.Sprite();
	sprite.texture = new SFHL.Texture(file, function () {
		sprite.width = sprite.texture.image.width;
		sprite.height = sprite.texture.image.height;
	});
	
	return (sprite);
};
