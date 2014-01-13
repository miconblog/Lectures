var MobileCart = {

	App2 : {}
};

(function(){
	var $el = $("#box");

	// $el.fadeOut(1000, function(){
	// 	$(this).fadeIn(1000);
	// });

	MobileCart = {
		getValue : function(name){
			var value = $el.css(name);
			return parseInt(value, 10);
		},
		left : function(num){
			var value = this.getValue("left");
			$el.css("left", value-num);
		},

		right : function(num){
			var value = this.getValue("left");
			$el.css("left", value+num);
		},

		up : function(num){			
			var value = this.getValue("top");
			$el.css("top", value-num);
		},

		down: function(num){
			var value = this.getValue("top");
			$el.css("top", value+num);
		}

	};

	var direction = ["left", "right", "up", "down"];
	$el.on("mouseover", function(){
		var dir = direction[Math.floor(Math.random() * 1000 % 4)];
		MobileCart[dir](Math.floor(Math.random() * 1000 % 100 + 10));
	});

	// var el = document.getElementById("box");
	// el.addEventListener("click", function(){
	// 	console.log(11);
	// });

})();