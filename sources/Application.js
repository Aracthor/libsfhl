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
