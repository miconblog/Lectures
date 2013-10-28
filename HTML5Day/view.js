(function(){
	View = function(model){

		this.model = model;

		this.model.on("change:name", function(model, name){
			console.log(model, name);
			$("#counter").html(name);

		});

		console.log('model - ', this.model.attributes.name);

	}
})();