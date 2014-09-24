import Ember from 'ember';

export
default Ember.Component.extend({
    classNames: ['user_post_excerpt'],

    displayContent: false,

    actions: {
        toggleContent: function() {
            this.toggleProperty("displayContent");
        }
    }
});