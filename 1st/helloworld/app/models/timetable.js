exports.definition = {
	config: {

		adapter: {
			type: "properties",
			collection_name: "timetable"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	}
}

