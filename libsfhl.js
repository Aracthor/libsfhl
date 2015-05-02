/**
 * SFHL namespace library.
 * 
 * @namespace SFHL
 */
SFHL = {};
/**
 * Create application on canvas element.
 * 
 * @class
 * @classdesc SFHL Application.
 * @param {string} canvas Canvas element id.
 */
SFHL.Application = function (canvas) {
	this.canvas = document.getElementById(canvas);
	this.context = this.canvas.getContext("2d");
};
