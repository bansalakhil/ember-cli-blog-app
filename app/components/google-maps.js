import Ember from 'ember';

export default Ember.Component.extend({

    insertMap: function() {
    var container = this.$(".map-canvas");

    navigator.geolocation.getCurrentPosition(function(position) {
      var coords = position.coords;
      var options = {
        center: new google.maps.LatLng(coords.latitude, coords.longitude),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      new google.maps.Map(container[0], options);

    });
  }.on('didInsertElement')
});
