(function() {

    Model = function() {
        var events = {};

        this.attributes = {};

        this.set = function(key, value) {
            this.attributes[key] = value;

            this.fireEvent("change", value);
        }

        this.fireEvent = function(eventName, data) {
            if( events[eventName] ) {
                events[eventName].call(null, data);
            }
        }

        this.on = function(eventName, callback) {
            events[eventName] = callback;
        }
    };

})()
