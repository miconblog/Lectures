function handleClose (){
    $.window.close();
}

$.window.addEventListener("close", function(){
    $.destroy();
});
