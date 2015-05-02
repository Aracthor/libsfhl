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
