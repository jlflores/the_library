var GoogleMap = (function () {

  return function (mapElementId) {

    var map = new google.maps.Map(document.getElementById(mapElementId), {
      scrollwheel: false
    });

    return {
      infoWindow: null,
      markers: [],
      addMarker: function (description, lat, lng, callback) {
        var self = this;
        var position = {lat: parseFloat(lat), lng: parseFloat(lng)};
        var marker = new google.maps.Marker({
          position: position,
          map: map
        });
        self.infoWindow = new google.maps.InfoWindow({});
        marker.addListener('click', function(e) {
          if (self.infoWindow) { self.infoWindow.close();}
          self.infoWindow.setContent('<div class="markerContent">' + description + '</div>');
          self.infoWindow.open(map, marker);
          if (callback) {
            callback();
          }
        });
        map.setCenter(position);
        map.setZoom(15);
        this.markers.push(marker);
      },
      viewSatellite: function () {
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
        map.setZoom(19);
      }
    };
  };
})();