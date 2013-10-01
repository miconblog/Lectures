(function(){

	var a = 2;	

	var obj = {
		value : 1,
		methodA : function(){
			setInterval(this.methodB.bind(this), 1000);
		},

		methodB : function(){
			console.log(this.value++);
		}

	}

	obj.methodA();

})();