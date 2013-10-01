var memberModel = Alloy.Models.instance("Members");

$.title.text = memberModel.get("title");
$.date.text = memberModel.get("date");

function handleClose() {
    $.window.close();
}

$.window.addEventListener("close", function() {
    $.destroy();
});
