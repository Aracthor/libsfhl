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
