/**
 * @class
 * @classdesc Handle a mouse movement.
 * @param {function} onEvent Function to call on event.
 */
SFHL.MouseMovementListener = function (onEvent) {
	this.onEvent = onEvent;
};

/**
 * Called on mouse movement.
 * 
 * @param {SFHL.EventsHandler} data Object that was listening.
 * @param {SFHL.Vector} movement.
 */
SFHL.KeyEventListener.prototype.onEvent = function (data, movement) {
	throw new Error("missing implementation of onEvent in  MouseMovementListener");
};
