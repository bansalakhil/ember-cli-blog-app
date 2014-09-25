import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  // debugger
  image_url: window.MyNewApp.PostDefaultImageURL +  Math.floor((Math.random() * 10) + 1),
  isEditing: false,
  selectedUser: null,
  // needs: ["users"],
  // users: Ember.computed.alias('controllers.users'),

  actions: {
    save: function() {
      var _this = this;
      var post = this.store.createRecord('post',  {

        title: this.get('title'),
        content: this.get('body'),
        image_url: this.get('image_url'),
        user: this.get('selectedUser'),
        excerpt: this.get('excerpt'),
      });

      post.save().then(

        function() {

          _this.notifySuccess(post);
          _this.resetForm();
          _this.transitionToRoute('posts');
        },

        function() {
          _this.notifyFailure(post);
          post.deleteRecord();
        }
      );

    },
    cancel: function() {
      this.resetForm();
      this.transitionToRoute('posts');

    },
  },
  notifySuccess: function(post) {
    // debugger
    console.log(this.get('controllers.application').send('pushNotification', 'success', 'Saved Successfully!!', 'Post ' + post.get('title') + ' saved on server successfully.'));
  },
  notifyFailure: function(post) {
    console.log(this.get('controllers.application').send('pushNotification', 'fail', 'Failed!!!', 'Post ' + post.get('title') + ' could not be saved on server.'));
  },

  resetForm: function() {
    this.set('title', '');
    this.set('excerpt', '');
    this.set('body', '');
    this.set('selectedUser', null);

  },  
});
