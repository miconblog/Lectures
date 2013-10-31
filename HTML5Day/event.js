/**
 * Model에서 Event 객체를 분리
 */
var Events = {
	channels : {},

	trigger : function(events, data){
		for(var eventName in Events.channels){
			if(Events.channels.hasOwnProperty(eventName)){
				if(eventName == events){
					Events.channels[eventName](this, data);
				}
			}
		}
	},

	on: function (events, callback){
		Events.channels[events] = callback;
	},

	off: function(eventName){
		delete Events.channels[eventName];
	}
};

