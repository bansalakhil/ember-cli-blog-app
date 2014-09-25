import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    var users = this.controllerFor('users').get('content');
    if (users.get('length') === 0) {
      users = this.store.find('user');
    }

    return {
      users: users,
    };
  },
});
