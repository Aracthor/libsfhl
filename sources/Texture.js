/**
 * Create texture from image file.
 * 
 * @param {string} source
 */
SFHL.Texture = function (source, loadCallback) {
	var me = this;
	
	this.ready = false;
	this.source = source;
	this.image = new Image();
	this.image.onload = function () {
		me.ready = true;
		if (loadCallback) {
			loadCallback();
		}
	};
	this.image.onerror = function () {
		console.error("Failed to load " + me.source);
	};
	this.image.src = source;
};

SFHL.Texture.prototype.isReady = function () {
	return (this.ready);
};
