var Events = {

    on : function(name, callback, context) {
        this._events || (this._events = {});

        var events = this._events[name] || (this._events[name] = []);
        events.push({
            callback : callback,
            context : context,
            ctx : context || this
        });
        return this;
    },

    off : function(name, callback, context) {
        var retain, ev, events, names, i, l, j, k;

        names = name ? [name] : _.keys(this._events);
        for ( i = 0, l = names.length; i < l; i++) {
            name = names[i];
            if ( events = this._events[name]) {
                this._events[name] = retain = [];
                if (callback || context) {
                    for ( j = 0, k = events.length; j < k; j++) {
                        ev = events[j];
                        if ((callback && callback !== ev.callback && callback !== ev.callback._callback) || (context && context !== ev.context)) {
                            retain.push(ev);
                        }
                    }
                }
                if (!retain.length)
                    delete this._events[name];
            }
        }

        return this;
    },
    trigger : function(name) {
        if (!this._events)
            return this;
        var args = slice.call(arguments, 1);
        if (!eventsApi(this, 'trigger', name, args))
            return this;
        var events = this._events[name];
        var allEvents = this._events.all;
        if (events)
            triggerEvents(events, args);
        if (allEvents)
            triggerEvents(allEvents, arguments);
        return this;
    }
};