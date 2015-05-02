/**
 * Create event manager for canvas.
 * 
 * @private
 * @class
 * @classdesc Manage input events, calling listeners.
 * @param {HTMLElement} canvas
 */
SFHL.EventsManager = function (canvas) {
	this.eventsHandlers = [];
	
	this.canvas = canvas;
	this.mouseLocked = false;
	this.wantMouseLocked = false;
	canvas.requestPointerLock = canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
	
	var me = this;
	
	// Keyboard events
	document.addEventListener("keydown", function (event) {me.onKeyDown(event.keyCode); event.preventDefault();}, false);
	document.addEventListener("keyup", function (event) {me.onKeyUp(event.keyCode);}, false);
	
	// Mouse events
	canvas.addEventListener("mousemove", function (event) {me.onMouseMove(event);}, false);
	canvas.addEventListener("mousedown", function (event) {me.onMouseDown(event);}, false);
	canvas.addEventListener("mouseup", function (event) {me.onMouseUp(event);}, false);
	
	// Lock events
	document.addEventListener('pointerlockerror', me.onLockError, false);
	document.addEventListener('mozpointerlockerror', me.onLockError, false);
	document.addEventListener('webkitpointerlockerror', me.onLockError, false);
};

/**
 * Add listener to listeners list.
 * 
 * @param {SFHL.EventsHandler} handler
 */
SFHL.EventsManager.prototype.addHandler = function (handler) {
	this.eventsHandlers.push(handler);
};

/**
 * Called on any key release.
 * 
 * @private
 * @param {SFHL.KeyCode} keyCode
 */
SFHL.EventsManager.prototype.onKeyDown = function (keyCode) {
	if (!SFHL.Keyboard.keyIsPressed(keyCode)) {
		SFHL.Keyboard.pressKey(keyCode);
	}
	
	for (var i in this.eventsHandlers) {
		this.eventsHandlers[i].onKeyPress(keyCode);
	}
};

/**
 * Called on any key pression.
 * 
 * @private
 * @param {SFHL.KeyCode} keyCode
 */
SFHL.EventsManager.prototype.onKeyUp = function (keyCode) {
	SFHL.Keyboard.releaseKey(keyCode);
	
	for (var i in this.eventsHandlers) {
		this.eventsHandlers[i].onKeyRelease(keyCode);
	}
};

/**
 * Called on mouse movement.
 * 
 * @private
 * @param {Object} event New mouse position.
 */
SFHL.EventsManager.prototype.onMouseMove = function (event) {
	var x = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
	var y = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
	
	for (var i in this.eventsHandlers) {
		this.eventsHandlers[i].onMouseMovement(new SFHL.Vector(-x, -y));
	}
};

/**
 * Called on mouse click.
 * 
 * @private
 * @param {Object} event Click details.
 */
SFHL.EventsManager.prototype.onMouseDown = function (event) {
	if (!SFHL.Mouse.buttonIsPressed(event.button)) {
		SFHL.Mouse.pressButton(event.button);
	}
	
	if (this.wantMouseLocked && !this.mouseLocked) {
		this.canvas.requestPointerLock();
		this.mouseLocked = true;
		SFHL.Mouse.isLocked = true;
	}
};

/**
 * Called on mouse release.
 * 
 * @private
 * @param {Object} event Click details.
 */
SFHL.EventsManager.prototype.onMouseUp = function (event) {
	SFHL.Mouse.releaseButton(event.button);
};

/**
 * Called on mouse lock error.
 */
SFHL.EventsManager.prototype.onLockError = function () {
	alert("Couldn't lock mouse pointer.");
};

/**
 * Call key handlers for keys actually pressed.
 */
SFHL.EventsManager.prototype.callKeyListeners = function () {
	for (var i in SFHL.Keyboard.keysActuallyPressed) {
		for (var j in this.eventsHandlers) {
			this.eventsHandlers[j].onKey(SFHL.Keyboard.keysActuallyPressed[i]);
		}
	}
};

