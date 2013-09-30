var model = Alloy.createModel("timetable");
var member = Alloy.createModel("member");


function onOpenDetail(e) {  
    
    // 컨트롤러를 생성하고, 
    // open 한다. 
    
    var win = Alloy.createController("test", {model: model, member:member}).getView();
    win.open();
   
    
}

$.window.open();

