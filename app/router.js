import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {

    this.resource('users', function() {
        this.route('show', {
            path: ':user_id'
        });
        // this.route('new')
        // this.route('search')
    });



    this.resource('posts', function() {
        this.route('new')
    });
  this.route('posts/new');
});

export
default Router;