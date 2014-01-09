(function(){
	View = function(model){

		this.model = model;

		this.model.on("change:name", function(model, name){
			
			document.getElementById("counter").innerHTML = name;

		});
	}
})();