import Ember from 'ember';

export default Ember.View.extend({

    layoutName: 'footer-layout',
    templateName: 'footer',
    currentTime: null,

    setCurrentTime: function(){
     // debugger
     setInterval(function(){
        this.set('currentTime', new Date());
      }.bind(this), 1000);

    }.on('didInsertElement'),

    // didInsertElement: function() {
    //     this.set('currentTime', new Date())
    // },

});
