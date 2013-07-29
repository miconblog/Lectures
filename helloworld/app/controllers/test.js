var args = arguments[0] || {};

var model = args.model;
var member = args.member;

model.on("change:title", function(model, title){
    $.title.text = title;
});


member.on("change:name", function(model, name){
   $.title.text = "예약자가 변경됐습니다. " + name ; 
});

$.window.addEventListener("click", function(){
   model.set("title", "Hello World!"); 
});


