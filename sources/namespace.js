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
