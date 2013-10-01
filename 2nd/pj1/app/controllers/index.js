function handleOpenWindow (e){
    
    openFixedPostionWindow(e.x, e.y);
}

function openFixedPostionWindow (left, top){
    var win = Alloy.createController("TitleWindow").getView();
    win.open(); 
}

$.window.open();
