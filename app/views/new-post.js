import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'posts/new-post-form',

    didInsertElement: function(){
      Ember.$('#new_post_title').focus();
    }
});
