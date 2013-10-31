(function(){
	var events = {};

	Model = function(){
		this.attributes = {
			x : 1, 
			y : 2,
			counter : 3,
			name : "ModelNo1"
		};

		this.set = function(key, value){
			this.attributes[key] = value;

			this.trigger("change:" + key, value);
		}

		this.on = function(eventname, callback){
			events[eventname] = callback;
		};

		this.trigger = function(eventname, data){

			for(var name in events){

				if( name === eventname){
					events[name](this, data)
				}
			}

		}
	}

})();