/**
 * @class
 * @classdesc Handle a key event.
 * @see {@link SFHL.EventsHandler}
 * @param {function} onEvent Function to call on event.
 */
SFHL.KeyEventListener = function (onEvent) {
	this.onEvent = onEvent;
};

/**
 * Called on matching key event.
 * 
 * @param {SFHL.EventsHandler} data Object that was listening.
 */
SFHL.KeyEventListener.prototype.onEvent = function (data) {
	throw new SFHL.ImplementationException(this, "onEvent", "KeyEventListener");
};
