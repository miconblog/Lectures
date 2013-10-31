(function(){

	Model = function(){
		this.attributes = {
			x : 1, 
			y : 2,
			counter : 3,
			name : "ModelNo1"
		};
	}

	Model.prototype.set = function(key, value){
		this.attributes[key] = value;

		this.trigger("change:" + key, value);
	}

	_.extend(Model.prototype, Events);

})();