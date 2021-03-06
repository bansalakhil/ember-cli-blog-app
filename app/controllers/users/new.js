import Ember from 'ember';

export
default Ember.ObjectController.extend({
    needs: ['application'],

    actions: {
        save: function() {
            var _this = this;

            var user = this.store.createRecord('user', {
                name: this.get('name'),
                bio: this.get('bio')
            });

            user.save().then(
                function() {

                    _this.notifySuccess(user);

                    _this.resetForm();
                    _this.transitionToRoute('users.show', user);
                },

                function() {
                    _this.notifyFailure(user);
                    user.deleteRecord();
                    // alert('Could not save record')
                }
            );

        },
        cancel: function() {
            this.transitionToRoute('users');
        },
    },
    notifySuccess: function(user) {
        console.log(this.get('controllers.application').send('pushNotification', 'success', 'Saved Successfully!!', 'User ' + user.get('name') + ' saved on server successfully.'));
    },
    notifyFailure: function(user) {
        console.log(this.get('controllers.application').send('pushNotification', 'fail', 'Failed!!!', 'User ' + user.get('name') + ' could not be saved on server.'));
    },

    resetForm: function() {
        this.set('name', '');
        this.set('bio', '');
    },

});