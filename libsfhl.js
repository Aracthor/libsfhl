/**
 * SFHL namespace library.
 * 
 * @namespace SFHL
 */
SFHL = {};

/**
 * Allow multi-inheritance.
 * Return a prototype that concatenate both arguments.
 * 
 * @param {Object.prototype} prototype1
 * @param {Object.prototype} prototype2
 * @return {Object.prototype} Fusion of both.
 */
SFHL.fusionClasses = function (prototype1, prototype2) {
	var fusion = {};
	var property;
	
	for (property in prototype1) {
		if (prototype1.hasOwnProperty(property)) {
			fusion[property] = prototype1[property];
		}
	}
	
	for (property in prototype2) {
		if (prototype2.hasOwnProperty(property)) {
			if (prototype1.hasOwnProperty(property)) {
				throw new Error("FUSION ERROR: " + property + " present in two classes !");
			}
			fusion[property] = prototype2[property];
		}
	}
	
	return (fusion);
};
/**
 * KeyCode used by event listeners.
 * 
 * @enum {number}
 */
SFHL.KeyCode = {
	BACKSPACE:	0x08,
	TAB:		0x09,
	ENTER:		0x0D,
	SHIFT:		0x10,
	CTRL:		0x11,
	ALT:		0x12,
	PAUSE:		0x13,
	CAPS_LOCK:	0x14,
	ESCAPE:		0x1B,
	SPACE:		0x20,
	
	LEFT_ARROW:	0x25,
	UP_ARROW:	0x26,
	RIGHT_ARROW:0x27,
	DOWN_ARROW:	0x28,
	
	A:			0x41,
	B:			0x42,
	C:			0x43,
	D:			0x44,
	E:			0x45,
	F:			0x46,
	G:			0x47,
	H:			0x48,
	I:			0x49,
	J:			0x4A,
	K:			0x4B,
	L:			0x4C,
	M:			0x4D,
	N:			0x4E,
	O:			0x4F,
	P:			0x50,
	Q:			0x51,
	R:			0x52,
	S:			0x53,
	T:			0x54,
	U:			0x55,
	V:			0x56,
	W:			0x57,
	X:			0x58,
	Y:			0x59,
	Z:			0x5A,
	
	F1:			0x70,
	F2:			0x71,
	F3:			0x72,
	F4:			0x73,
	F5:			0x74,
	F6:			0x75,
	F7:			0x76,
	F8:			0x77,
	F9:			0x78,
	F10:		0x79,
	F11:		0x7A,
	F12:		0x7B,
	MAX:		0x7C
};
/**
 * MouseButton used by event listeners.
 * 
 * @enum {number}
 */
SFHL.MouseButton = {
	LEFT:	0,
	MIDDLE:	1,
	RIGHT:	2,
	MAX: 	3
};
/**
 * Enum for line drawing style.
 * 
 * @readonly
 * @enum {string}
 */
SFHL.LineCap = {
	BUTT: "butt",
	ROUND: "round",
	SQUARE: "square"
};
/**
 * Represent a drawable object.
 * 
 * @interface
 */
SFHL.Drawable = function () {};

/**
 * Render object to context.
 * 
 * @abstract
 * @param {HTMLContext} context
 */
SFHL.Drawable.prototype.render = function (context) {
	throw new Error("Missing draw implementation of Drawable object.");
};
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
/**
 * Create a vector from two number, or null vector by default.
 * 
 * @class
 * @classdesc Two-dimentional vector.
 * @param {number} x [x = 0]
 * @param {number} y [y = 0]
 */
SFHL.Vector = function (x, y) {
	this.x = x ? x : 0;
	this.y = y ? y : 0;
};

/**
 * @type {number}
 * @default
 */
SFHL.Vector.prototype.x = 0;

/**
 * @type {number}
 * @default
 */
SFHL.Vector.prototype.y = 0;

/**
 * Add vector's data to this one.
 * 
 * @param {SFHL.Vector} vector
 */
SFHL.Vector.prototype.add = function (vector) {
	this.x += vector.x;
	this.y += vector.y;
};

/**
 * Sub vector's data to this one.
 * 
 * @param {SFHL.Vector} vector
 */
SFHL.Vector.prototype.sub = function (vector) {
	this.x -= vector.x;
	this.y -= vector.y;
};
/**
 * @class
 * @classdesc Pixel arc.
 * @implements SFHL.Drawable
 */
SFHL.Arc = function () {
	this.position = new SFHL.Vector();
	this.color = SFHL.Color.black.clone();
};

SFHL.Arc.prototype = Object.create(SFHL.Drawable.prototype);

/**
 * @type {SFHL.Vector}
 */
SFHL.Arc.prototype.position = null;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Arc.prototype.color = SFHL.Color.black;

/**
 * @type {number}
 * @default
 */
SFHL.Arc.prototype.lineWidth = 1;

/**
 * @type {number}
 * @default
 */
SFHL.Arc.prototype.radius = 0;

/**
 * @type {number}
 * @default
 */
SFHL.Arc.prototype.startAngle = 0;

/**
 * @type {number}
 * @default
 */
SFHL.Arc.prototype.endAngle = 2 * Math.PI;


/**
 * Render arc to context.
 * 
 * @override
 * @param {HTMLContext} context
 */
SFHL.Arc.prototype.render = function (context) {
	context.beginPath();
	context.arc(this.position.x, this.position.y, this.radius, this.startAngle, this.endAngle, false);
	context.lineWidth = this.lineWidth;
	
	context.strokeStyle = this.color.toString();
	context.stroke();
};
/**
 * @class
 * @classdesc Time lord.
 */
SFHL.Clock = function () {
	this.reset();
};

/**
 * Return elapsed time (in miliseconds) from last reset.
 * 
 * @return {number} Elapsed time since last reset.
 */
SFHL.Clock.prototype.getElapsedTime = function () {
	return (new Date().getTime() - this.lastTime);
};

/**
 * Reset clock counter.
 * Called on creation.
 * 
 * @return {number} Elapsed time since last reset.
 */
SFHL.Clock.prototype.reset = function () {
	var newTime = new Date().getTime();
	var elapsedTime = newTime - this.lastTime;
	
	this.lastTime = newTime;
	
	return (elapsedTime);
};
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

/**
 * @class
 * @classdesc Pixel frame. Must be updated after each modification.
 * @implements SFHL.Drawable
 */
SFHL.Frame = function () {
	this.start = new SFHL.Vector();
	this.end = new SFHL.Vector();
	this.color = SFHL.Color.black.clone();
	
	this.borders = [new SFHL.Line(), new SFHL.Line(), new SFHL.Line(), new SFHL.Line()];

	this.angles = [new SFHL.Arc(), new SFHL.Arc(), new SFHL.Arc(), new SFHL.Arc()];
	this.angles[0].startAngle = Math.PI;
	this.angles[0].endAngle = 3 * Math.PI / 2;
	this.angles[1].startAngle = 3 * Math.PI / 2;
	this.angles[1].endAngle = Math.PI * 2;
	this.angles[2].startAngle = 0;
	this.angles[2].endAngle = Math.PI / 2;
	this.angles[3].startAngle = Math.PI / 2;
	this.angles[3].endAngle = Math.PI;
	
	this.update();
};

SFHL.Frame.prototype = Object.create(SFHL.Drawable.prototype);

/**
 * @type {SFHL.Vector}
 */
SFHL.Frame.prototype.start = null;

/**
 * @type {SFHL.Vector}
 */
SFHL.Frame.prototype.end = null;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Frame.prototype.color = SFHL.Color.black;

/**
 * @type {number}
 * @default
 */
SFHL.Frame.prototype.lineWidth = 1;

/**
 * @type {number}
 * @default
 */
SFHL.Frame.prototype.anglesRadius = 1;

/**
 * Update frame internal data from public members.
 */
SFHL.Frame.prototype.update = function () {
	for (var i in this.borders) {
		var border = this.borders[i];
		border.color = this.color;
		border.width = this.lineWidth;
	}
	
	this.borders[0].start.x = this.start.x + this.anglesRadius - 1;
	this.borders[0].start.y = this.start.y;
	this.borders[0].end.x = this.end.x - this.anglesRadius + 1;
	this.borders[0].end.y = this.start.y;
	this.borders[1].start.x = this.end.x;
	this.borders[1].start.y = this.start.y + this.anglesRadius - 1;
	this.borders[1].end.x = this.end.x;
	this.borders[1].end.y = this.end.y - this.anglesRadius + 1;
	this.borders[2].start.x = this.end.x - this.anglesRadius + 1;
	this.borders[2].start.y = this.end.y;
	this.borders[2].end.x = this.start.x + this.anglesRadius - 1;
	this.borders[2].end.y = this.end.y;
	this.borders[3].start.x = this.start.x;
	this.borders[3].start.y = this.end.y - this.anglesRadius + 1;
	this.borders[3].end.x = this.start.x;
	this.borders[3].end.y = this.start.y + this.anglesRadius - 1;

	for (var i in this.angles) {
		var angle = this.angles[i];
		angle.radius = this.anglesRadius;
		angle.color = this.color;
		angle.lineWidth = this.lineWidth;
	}
	
	this.angles[0].position.x = this.start.x + this.anglesRadius;
	this.angles[0].position.y = this.start.y + this.anglesRadius;
	this.angles[1].position.x = this.end.x - this.anglesRadius;
	this.angles[1].position.y = this.start.y + this.anglesRadius;
	this.angles[2].position.x = this.end.x - this.anglesRadius;
	this.angles[2].position.y = this.end.y - this.anglesRadius;
	this.angles[3].position.x = this.start.x + this.anglesRadius;
	this.angles[3].position.y = this.end.y - this.anglesRadius;
};

/**
 * Render intern data to 2D context.
 * 
 * @override
 * @param {HTMLContext} context
 */
SFHL.Frame.prototype.render = function (context) {
	this.borders[0].render(context);
	this.borders[1].render(context);
	this.borders[2].render(context);
	this.borders[3].render(context);
	this.angles[0].render(context);
	this.angles[1].render(context);
	this.angles[2].render(context);
	this.angles[3].render(context);
};
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
/**
 * @class
 * @classdesc Pixel line.
 * @implements SFHL.Drawable
 */
SFHL.Line = function () {
	this.start = new SFHL.Vector();
	this.end = new SFHL.Vector();
	this.color = SFHL.Color.black.clone();
};

SFHL.Line.prototype = Object.create(SFHL.Drawable.prototype);

/**
 * @type {SFHL.Vector}
 */
SFHL.Line.prototype.start = null;

/**
 * @type {SFHL.Vector}
 */
SFHL.Line.prototype.end = null;

/**
 * @type {number}
 * @default
 */
SFHL.Line.prototype.width = 1;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Line.prototype.color = SFHL.Color.black;

/**
 * @type {SFHL.LineCap}
 * @default
 */
SFHL.Line.prototype.lineCap = SFHL.LineCap.BUTT;

/**
 * Render line to 2D context.
 * 
 * @override
 * @param {HTMLContext} context
 */
SFHL.Line.prototype.render = function (context) {
	context.beginPath();
	context.moveTo(this.start.x, this.start.y);
	context.lineTo(this.end.x, this.end.y);
	context.lineWidth = this.width;
	context.strokeStyle = this.color.toString();
	context.lineCap = this.lineCap;
	context.stroke();
};
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
/**
 * @class
 * @classdesc Colored rectangle.
 * @implements SFHL.Drawable
 */
SFHL.Rectangle = function () {
	this.position = new SFHL.Vector();
	this.fillColor = SFHL.Color.white.clone();
	this.borderColor = SFHL.Color.black.clone();
};

SFHL.Rectangle.prototype = Object.create(SFHL.Drawable.prototype);

/**
 * @type {SFHL.Vector}
 */
SFHL.Rectangle.prototype.position = null;

/**
 * @type {number}
 * @default
 */
SFHL.Rectangle.prototype.width = 0;

/**
 * @type {number}
 * @default
 */
SFHL.Rectangle.prototype.height = 0;

/**
 * @type {boolean}
 * @default
 */
SFHL.Rectangle.prototype.fill = true;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Rectangle.prototype.fillColor = SFHL.Color.white;

/**
 * @type {boolean}
 * @default
 */
SFHL.Rectangle.prototype.border = false;

/**
 * @type {number}
 * @default
 */
SFHL.Rectangle.prototype.borderWidth = 1;

/**
 * @type {SFHL.LineCap}
 * @default
 */
SFHL.Rectangle.prototype.borderCap = SFHL.LineCap.BUTT;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Rectangle.prototype.borderColor = SFHL.Color.black;

/**
 * Render line to 2D context.
 * 
 * @param {HTMLContext} context
 */
SFHL.Rectangle.prototype.render = function (context) {
	context.beginPath();
	context.rect(this.position.x, this.position.y, this.width, this.height);
	if (this.fill) {
		context.fillStyle = this.fillColor.toString();
		context.fill();
	}
	if (this.border) {
		context.lineWidth = this.borderWidth;
		context.lineCap = this.borderCap; // useless...
		context.strokeStyle = this.borderColor.toString();
		context.stroke();
	}
};
/**
 * Create node for a renderable data.
 * 
 * @param {SFHL.Renderable} data
 */
SFHL.SceneNode = function (data) {
	this.data = data;
	this.parent = null;
	this.children = [];
	
	this.position = new SFHL.Vector();
	this.scale = new SFHL.Vector(1, 1, 1);
};

/**
 * @type {SFHL.SceneNode}
 * @default
 */
SFHL.SceneNode.prototype.parent = null;

/**
 * @type {SFHL.Drawable}
 * @default
 */
SFHL.SceneNode.prototype.data = null;

/**
 * @type {SFHL.Vector}
 */
SFHL.SceneNode.prototype.position = null;

/**
 * @type {number}
 * @default
 */
SFHL.SceneNode.prototype.rotation = 0;

/**
 * @type {SFHL.Vector}
 */
SFHL.SceneNode.prototype.scale = null;


/**
 * Add child to children list.
 * 
 * @param {SFHL.SceneNode} child
 */
SFHL.SceneNode.prototype.addChild = function (child) {
	child.parent = this;
	this.children.push(child);
};

/**
 * Draw this node and its children.
 * 
 * @param {HTMLContext} context
 */
SFHL.SceneNode.prototype.draw = function (context) {
	context.save();
	{
		context.translate(this.position.x, this.position.y);
		context.scale(this.scale.x, this.scale.y);
		context.rotate(this.rotation);
		
		if (this.data) {
			this.data.render(context);
		}
		for (var i in this.children) {
			this.children[i].draw(context);
		}
	}
	context.restore();
};
/**
 * @class
 * @classdesc Sprite linked to texture.
 * @implements SFHL.Drawable
 * @todo add texture rect
 */
SFHL.Sprite = function () {
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
/**
 * @class
 * @classdesc Renderable text.
 * @implements VVGL.Drawable
 * @param {string} string
 */
SFHL.Text = function (string) {
	this.string = string;
	this.position = new SFHL.Vector();
	this.color = SFHL.Color.black.clone();
};

SFHL.Text.prototype = Object.create(SFHL.Drawable.prototype);

/**
 * @type {SFHL.Vector}
 */
SFHL.Text.prototype.position = null;

/**
 * @type {boolean}
 * @default
 */
SFHL.Text.prototype.lined = false;

/**
 * @type {boolean}
 * @default
 */
SFHL.Text.prototype.horizontalAligned = false;

/**
 * @type {boolean}
 * @default
 */
SFHL.Text.prototype.verticalAligned = false;


/**
 * @type {number}
 * @default
 */
SFHL.Text.prototype.lineWidth = 2;

/**
 * @type {number}
 * @default
 */
SFHL.Text.prototype.size = 10;

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Text.prototype.color = SFHL.Color.black;

/**
 * @type {string}
 * @default
 */
SFHL.Text.prototype.font = "Arial";

/**
 * Render text to 2D context.
 * 
 * @param {HTMLContext} context
 */
SFHL.Text.prototype.render = function (context) {
	context.font = this.size + "pt " + this.font;
	context.textAlign = this.horizontalAligned ? "center" : "";
	context.textBaseline = this.verticalAligned ? "middle" : "";
	
	if (this.lined) {
		context.lineWidth = this.lineWidth;
		context.strokeStyle = this.color.toString();
		context.strokeText(this.string, this.position.x, this.position.y);
	} else {
		context.fillStyle = this.color.toString();
		context.fillText(this.string, this.position.x, this.position.y);
	}
};
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
/**
 * Create application on canvas element.
 * 
 * @class
 * @classdesc SFHL Application.
 * @extends SFHL.EventsHandler
 * @param {string} canvas Canvas element id.
 */
SFHL.Application = function (canvas) {
	SFHL.Application.instance = this;
	this.canvas = document.getElementById(canvas);
	this.eventsManager = new SFHL.EventsManager(this.canvas);
	this.context = this.canvas.getContext("2d");
	
	this.width = this.canvas.width;
	this.height = this.canvas.height;
	this.clearColor = SFHL.Color.white.clone();
	
	this.clock = new SFHL.Clock();
	SFHL.EventsHandler.call(this, this.eventsManager);
};

SFHL.Application.prototype = Object.create(SFHL.EventsHandler.prototype);

/**
 * Resize canvas resolution to specific width and height.
 * 
 * @param {number} width
 * @param {number} height
 */
SFHL.Application.prototype.resize = function (width, height) {
	this.width = width;
	this.height = height;
	this.canvas.width = width;
	this.canvas.height = height;
};

/**
 * Resize canvas resolution to navigator's window resolution.
 */
SFHL.Application.prototype.resizeToWindow = function () {
	this.resize(window.innerWidth, window.innerHeight);
};

/**
 * @type {SFHL.SceneNode}
 */
SFHL.Application.prototype.root = new SFHL.SceneNode(null);

/**
 * @type {SFHL.Color}
 * @default
 */
SFHL.Application.prototype.clearColor = SFHL.Color.white;


/**
 * Launch application.
 */
SFHL.Application.prototype.start = function () {
	this.running = true;
	
	try {
		SFHL.Application.loop();
	} catch (exception) {
		this.stop();
		throw (exception);
	}
};

/**
 * Stop or pause the application.
 */
SFHL.Application.prototype.stop = function () {
	this.running = false;	
};


/**
 * Manage all application data.
 * 
 * @abstract
 */
SFHL.Application.prototype.manageData = function () {
	this.elapsedTime = this.clock.reset();
};

/**
 * Clear application screen.
 * 
 * @private
 */
SFHL.Application.prototype.clear = function () {
	this.context.rect(0, 0, this.width, this.height);
	this.context.fillStyle = this.clearColor.toString();
	this.context.fill();
};

/**
 * Draw everything.
 * 
 * @abstract
 */
SFHL.Application.prototype.manageDisplay = function () {
	this.root.draw(this.context);
};

/**
 * Manage all input events.
 * 
 * @private
 */
SFHL.Application.prototype.manageEvents = function () {
	this.eventsManager.callKeyListeners();
};


/**
 * Lock mouse pointer once user will have clicked.
 */
SFHL.Application.prototype.lockPointer = function () {
	this.eventsManager.wantMouseLocked = true;
};

/**
 * Disable mouse lock.
 * 
 * @todo unlock pointer for real.
 */
SFHL.Application.prototype.unlockPointer = function () {
	this.eventsManager.wantMouseLocked = false;
};

/**
 * Window will reload on F5.
 */
SFHL.Application.prototype.acceptReload = function () {
	var listener = new SFHL.KeyEventListener(function () {
		window.location.reload(false);
	});
	this.addKeyPressListener(SFHL.KeyCode.F5, listener);
};


/**
 * Application singleton.
 * 
 * @type {SFHL.Application}
 */
SFHL.Application.instance = null;

/**
 * Loop function called by {@see SFHL.Application.prototype.start}.
 * 
 * @private
 */
SFHL.Application.loop = function () {
	var app = SFHL.Application.instance;
	
	if (app.running) {
		window.requestAnimationFrame(SFHL.Application.loop);
		
		app.manageEvents();
		app.manageData();
		app.clear();
		app.manageDisplay();
	}
};
