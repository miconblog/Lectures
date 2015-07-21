(function() {

    var foo = function(arr, n) {
        $("output").innerHTML += arr[n].desc + "<br />";
        $("output").innerHTML += "최소값: " + arr[n].min + "<br />";
        $("output").innerHTML += "최대값: " + arr[n].max + "<br />";
    };

    $.ajax("data.json", {
        success: function(data){
          var JavaDataTypeSize = JSON.parse(data);
          foo(JavaDataTypeSize, 1);
          foo(JavaDataTypeSize, 2);
          foo(JavaDataTypeSize, 3);
        }
    });

})();