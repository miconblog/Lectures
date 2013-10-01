// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var model = Alloy.Models.instance("Members");
var moment = require('alloy/moment');

model.set("title", "안녕하세요.");
model.set("date", moment().format("LL"));

console.log(">>>>>>>>>>>>", JSON.stringify(model));
