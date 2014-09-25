import Ember from 'ember';

export
default Ember.Route.extend({

  afterModel: function(users) {
    var users = users.toArray();
    if (users.length === 0) {
      this.transitionTo('users.new')
    }
  },

    model: function() {
        if (this.controller && this.controller.get('content')) {
            return this.controller.get('content');
        }

        return this.store.find('user');
    }

});