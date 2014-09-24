import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MyNewAppENV.locationType
});

Router.map(function() {

  this.resource('users', function() {
    // this.resource('user', {
    //   path: ':user_id'
    // })
    // this.route('new')
    // this.route('search')
  });
  
});

export default Router;
