export default {
    install(Vue, connection){
        let socket;
        
        socket = connection ? new WebSocket(connection) : null;
        Vue.prototype.$socket = socket;

        let addListeners = function(){
            if (this.$options['socket']) {
                let conf = this.$options.socket;
                if (conf.namespace) {
                    this.$socket = new WebSocket(conf.namespace);
                }

                if (conf.events) {
                    let prefix = conf.prefix || '';
                    Object.keys(conf.events).forEach(() => {
                        let func = conf.events[key].bind(this);
                        this.$socket.on(prefix + key, func);
                        conf.events[key].__binded = func;
                    });
                }
            }
        };

        let removeListeners = function(){
            if (this.$options['socket']) {
                let conf = this.$options.socket;

                if (conf.namespace) {
                    this.$socket.disconnect();
                }

                if (conf.events) {
                    let prefix = conf.prefix || '';
                    Object.keys(conf.events).forEach((key) => {
                        this.$socket.off(prefix + key, conf.events[key].__binded);
                    });
                }
            }
        };

        Vue.mixin({
            beforeCreate: addListeners,
            beforeDestroy: removeListeners
        });
    }
};