(function(){
    
    View = function(model){
        this.model = model;
        
        this.model.on("change", function(model, value){
            
            alert(model);
           $("#view").html(model);
        });
    }
    
    
})()
