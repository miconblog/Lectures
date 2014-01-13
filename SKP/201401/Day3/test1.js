(function(){

   // // 1. 이벤트 연습
   // document.addEventListener("DOMContentLoaded", function(event) {
   // 		console.log("document DomLoad", event);
   // });

   // $(document).on("DOMContentLoaded", function(e){

   // 		console.log("DomLoad", e);
   // });


	// 2. 각각의 li에 이벤트 거는 방법
	// $("#nav > li").on("click", function(e){
	// 	console.log("--->", this);
	// });


	// $(".nav").delegate(".num", "click", function(e){
	// 	console.log("---> delegate: ", this, e.target);

	// });

	// $(".nav a").on("click", function(e){
	// 	//return false;

	// 	e.preventDefault(); // return false;

	// 	alert(1);
	// });


	// // 폼전송

	// var validate = {
	// 	init : function  () {
	// 		this.$email = $("#email");
	// 		this.$pass = $("#pw");
	// 		this.$error = $("#message");
	// 	},
	// 	email : function (){
	// 		var email = this.$email.val();
	// 		console.log("email: ", email);

	// 		return /\w+@\w+\.\w+/.test(email)

	// 	},
	// 	password : function(){
	// 		var pass = this.$pass.val();
	// 		return  pass.length > 8;
	// 	},
	// 	allTrue : function(){
	// 		return this.email() && this.password();
	// 	},
	// 	displayError : function(){
	// 		this.$error.html("에러..").show().fadeOut(3000);
	// 	}
	// };
	// validate.init();

	// $("form > input[type=submit]").on("click", function(e){

	// 	// 유효성 검사...
	// 	if( !validate.allTrue() ){
	// 		e.preventDefault();
	// 		validate.displayError();
	// 	}
	// });



	// 호이스팅 설명

	bar();
	var foo = function(){
		alert(3);
	}
	function bar(){
		alert(1);
	}


	// // 확인
	// $("form > input[type=button]").on("click", function(e){

	// 	// 유효성 검사.

	// 	if( isAllValidate() ){
	// 		// 전송
	// 		$("form").submit();

	// 	}else{
	// 		// 전송 취소

	// 		alert("유효하지 않습니다.");
	// 	}

	// });


	//$(".nav").html('<li>메뉴<span>1</span></li><li>메뉴<span class="num">2</span></li>');


	// var el = document.getElementById("header");
	// el.innerHTML = '<ul><li>메뉴<span>1</span></li><li>메뉴<span class="num">2</span></li></ul>'


})();
