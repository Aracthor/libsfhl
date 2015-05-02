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
	
	this.clock = new SFHL.Clock();
	SFHL.EventsHandler.call(this, this.eventsManager);
};

SFHL.Application.prototype = Object.create(SFHL.EventsHandler.prototype);

/**
 * @type {SFHL.SceneNode}
 */
SFHL.Application.prototype.root = new SFHL.SceneNode(null, null);


/**
 * Launch application.
 */
SFHL.Application.prototype.start = function () {
	this.running = true;
	
	try {
		SFHL.Application.loop();
	} catch (exception) {
		this.running = false;
		throw (exception);
	}
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
    this.context.clearRect(0, 0, this.width, this.height);
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
