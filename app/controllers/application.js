import Ember from 'ember';

export
default Ember.Controller.extend({
    /**
     * @property {Array} The array of app-wide notifications
     */
    notifications: Ember.A(),

    /**
     * @observer Not technically necessary, but cleans up
     * the notifications array when all have been closed
     */
    notificationsWereClosed: function() {
        var notifications = this.get('notifications');
        // Don't do anything if there are no notifications.
        if (!notifications.length) {
        // alert(4)
            return;
        }
        // If all the notifications have been closed,
        // wipe our list clean so cruft doesn't build up
        if (this.get('notifications').everyBy('closed')) {
            this.set('notifications', Ember.A());
        }
    }.observes('notifications.@each.closed'),

    actions: {
        /**
         * Action handler for creating a new notification.
         * Could be called from elsewhere throughout the application.
         * @param type {String} classification; used for which icon to show
         * @param title {String} leading text
         * @param message {String} supporting text
         */
        pushNotification: function(type, title, message) {
            // alert(type+title+message);
            var notification = Ember.Object.create({
                type: type,
                title: title,
                message: message,
                closed: false
            });
            // debugger
            this.notifications.pushObject(notification);
        }
    }

});