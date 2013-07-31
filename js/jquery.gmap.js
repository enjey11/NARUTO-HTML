var map;
var naruto = new google.maps.LatLng(-12.099428104102266, -76.99907101122284);
var narutoMarker = new google.maps.LatLng(-12.099255010821027, -77.00219310251617);

var MY_MAPTYPE_ID = 'custom_style';

function initializeMap() {

  var featureOpts = [
    {
      stylers: [
        { hue: '#a6ebff' },
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#a6ebff' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 18,
    center: naruto,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID,
    zoomControl: false,
	disableDefaultUI: true,
	scaleControl: false
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  var marker = new google.maps.Marker({

	map: map,
	title: 'Naruto',
	animation: google.maps.Animation.DROP,
	position: narutoMarker,
	icon: "images/iconNaruto.png",

  });

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initializeMap);