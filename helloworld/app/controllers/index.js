function testClick(e) {  
    alert($.label.text);
}

$.window.open();

if( OS_IOS ){
    var x = "ios";
    
}

if( OS_ANDROID ){
    var x = "android";
}


alert(x);


var osname = Ti.Platform.osname;
if( osname == "android" ){
    
    
}

if( osname == "ios" ){
    
    
}
