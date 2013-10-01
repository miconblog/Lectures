exports.definition = {
    config : {

        "columns" : {
            "title" : "String",
            "date" : "String"
        },
        "defaults" : {
            "title" : "-",
            "date" : "-"
        },
        adapter : {
            type : "sql",
            collection_name : "Members"
        }
    },
    extendModel : function(Model) {
        _.extend(Model.prototype, {
            // extended functions and properties go here
        });

        return Model;
    },
    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            // extended functions and properties go here
        });

        return Collection;
    }
};
