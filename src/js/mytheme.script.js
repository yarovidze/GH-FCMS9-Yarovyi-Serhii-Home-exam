import 'popper.js';
import 'bootstrap';



(function ($) {

  'use strict';



  Drupal.behaviors.helloWorld = {
    attach: function (context) {
      console.log('Hello World');
      $(document).on('leaflet.map', function(event, map, lMap) {
        var map  = Drupal.Leaflet["leaflet-map-view-main-map-block-main-map"].lMap;
        if(window.localStorage['mapZoom']){
          map.setZoom(parseInt(window.localStorage['mapZoom']));
        }
        if(window.localStorage['mapLat'] && window.localStorage['mapLng']){
          map.panTo([parseFloat(window.localStorage['mapLat']),parseFloat(window.localStorage['mapLng'])]);
        }
        map.on('moveend',function() {
          console.log(map.getCenter());
          var center = map.getCenter();
          window.localStorage['mapLat'] = center.lat;
          window.localStorage['mapLng'] = center.lng;
          window.localStorage['mapZoom'] = map.getZoom();
        });
      });
    }
  };


})(jQuery, Drupal);

