// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 18,

    scrollwheel: false,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(59.938793, 30.323091), 

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#7d0707"
      }]
    }, {
      "featureType": "administrative.land_parcel",
      "elementType": "all",
      "stylers": [{
        "saturation": "12"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "landscape.natural.landcover",
      "elementType": "all",
      "stylers": [{
        "color": "#d7adad"
      }]
    }, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.attraction",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "off"
      }, {
        "color": "#ff0000"
      }]
    }, {
      "featureType": "poi.attraction",
      "elementType": "labels.text.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#000000"
      }]
    }, {
      "featureType": "poi.attraction",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.business",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#ff0000"
      }]
    }, {
      "featureType": "poi.business",
      "elementType": "labels.text.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#000000"
      }]
    }, {
      "featureType": "poi.business",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.government",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }, {
        "saturation": "-100"
      }]
    }, {
      "featureType": "poi.medical",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }, {
        "saturation": "-100"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }, {
        "saturation": "-100"
      }, {
        "lightness": "30"
      }]
    }, {
      "featureType": "poi.place_of_worship",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.text.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#ff0000"
      }]
    }, {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi.school",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }, {
        "saturation": "-100"
      }]
    }, {
      "featureType": "poi.sports_complex",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "saturation": "-100"
      }]
    }, {
      "featureType": "poi.sports_complex",
      "elementType": "labels.text.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#000000"
      }]
    }, {
      "featureType": "poi.sports_complex",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "saturation": -100
      }, {
        "lightness": 45
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#090909"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "weight": "1"
      }]
    }, {
      "featureType": "transit.station.airport",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "transit.station.rail",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#ff0000"
      }, {
        "weight": "1"
      }]
    }, {
      "featureType": "transit.station.rail",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "on"
      }, {
        "hue": "#ff0000"
      }]
    }, {
      "featureType": "transit.station.rail",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#d4e4eb"
      }, {
        "visibility": "on"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#cbdae2"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9b7f7f"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#dfc9c9"
      }]
    }]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(59.938793, 30.323091),
    map: map,
    title: 'Snazzy!'
  });
}
