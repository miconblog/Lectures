(function(){
    
    View = function(model){
        this.model = model;
        
        
        
        $("#plus").on("click", function(e){
             
             var x = parseInt( this.model.get("x"), 10);
             this.model.set("x", x+1);
             
        }.bind(this));
        
        $("#minus").on("click", function(e){
            
            var x = this.model.get("x") - 0;
             this.model.set("x", x-1);
            
        }.bind(this));
        
    
        this.model.on("change", function(model){
            
           $("#msg").html(model.get("x"));
        });
    }
    
    
})()
