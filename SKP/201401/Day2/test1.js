(function(){

	var obj = {};

	obj.foo = function(a,b,callback){

		
		console.log("1 this: ",this);
		callback(a+b);
	}

	// obj.foo.prototype.methodA = function(){
	// 	console.log("methodA", arguments);
	// }

	obj.foo(1, 2, function(result){

		console.log("2 this: ", this);

	});

	var foo = new obj.foo(5,6,function(){});
	// foo.methodA("test");
	//obj.foo.methodA("test")

})();