var Box = function(el) {
	this.el = el;
};

Box.prototype = {
	moveBy : function(nX, nY) {
		this.el.style.left = nX;
		this.el.style.top = nY;
		return this;
	},
	changeColor : function(sColor) {
		this.el.style.backgroundColor = sColor;
		return this;
	},
};

Box(document.getElementById("box")).moveBy(50, 50).changeColor("blue");