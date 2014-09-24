import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'my-new-app', // TODO: loaded via config
  Resolver: Resolver,
  PostDefaultImageURL: 'http://lorempixel.com/1920/1920/nature/'
});

loadInitializers(App, 'my-new-app');

export default App;
