import Ember from 'ember';

export
default Ember.Route.extend({
    model: function() {
        if (this.controller && this.controller.get('content')) {
            return this.controller.get('content');
        }

        return this.store.find('post');
    }
});