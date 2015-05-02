/**
 * Inherit from this class allow to listen input events.
 * 
 * @abstract
 * @class
 * @classdesc May react to input events like keyboard, mouse etc.
 */
SFHL.EventsHandler = function (manager) {
	this.keyListeners = [];
	this.keyPressListeners = [];
	this.keyReleaseListeners = [];
	this.mouseMovementListener = null;
	
	if (!manager) {
		var manager = SFHL.Application.instance.eventsManager;
	}
	
	manager.addHandler(this);
};

/**
 * Add event listener to each frame during key is pressed.
 * 
 * @param {SFHL.KeyCode} key
 * @param {SFHL.KeyEventListener} listener
 */
SFHL.EventsHandler.prototype.addKeyListener = function (key, listener) {
	this.keyListeners[key] = listener;
};

/**
 * Add event listener to each time key start to be pressed.
 * 
 * @param {SFHL.KeyCode} key
 * @param {SFHL.KeyEventListener} listener
 */
SFHL.EventsHandler.prototype.addKeyPressListener = function (key, listener) {
	this.keyPressListeners[key] = listener;
};

/**
 * Add event listener to each time key is released.
 * 
 * @param {SFHL.KeyCode} key
 * @param {SFHL.KeyEventListener} listener
 */
SFHL.EventsHandler.prototype.addKeyReleaseListener = function (key, listener) {
	this.keyReleaseListeners[key] = listener;
};

/**
 * Add mouse movement listener.
 * 
 * @param {SFHL.MouseMovementListener} listener
 */
SFHL.EventsHandler.prototype.addMouseMovementListener = function (listener) {
	this.mouseMovementListener = listener;	
};


/**
 * Used to search a specific key listener, and execute it if exists.
 * 
 * @private
 * @param {Array} listeners
 * @param {SFHL.KeyCode} keyCode
 */
SFHL.EventsHandler.prototype.onKeyEvent = function (listeners, keyCode) {
	var listener = listeners[keyCode];
	
	if (listener) {
		listener.onEvent(this);
	};
};

/**
 * Called by {SFHL.EventsManager} on frame where key is pressed.
 *
 * @param {SFHL.KeyCode} keyCode
 */
SFHL.EventsHandler.prototype.onKey = function (keyCode) {
	this.onKeyEvent(this.keyListeners, keyCode);
};

/**
 * Called by {SFHL.EventsManager} on key pression.
 *
 * @param {SFHL.KeyCode} keyCode
 */
SFHL.EventsHandler.prototype.onKeyPress = function (keyCode) {
	this.onKeyEvent(this.keyPressListeners, keyCode);
};

/**
 * Called by {SFHL.EventsManager} on key release.
 *
 * @param {SFHL.KeyCode} keyCode
 */
SFHL.EventsHandler.prototype.onKeyRelease = function (keyCode) {
	this.onKeyEvent(this.keyReleaseListeners, keyCode);
};

/**
 * Called by {SFHL.EventsManager} on mouse movement.
 * Call its own mouseMovementListener.
 * 
 * @param {SFHL.Vector} movement
 */
SFHL.EventsHandler.prototype.onMouseMovement = function (movement) {
	if (this.mouseMovementListener !== null) {
		this.mouseMovementListener.onEvent(this, movement);
	}
};
