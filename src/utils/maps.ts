// Google Maps initialization
declare global {
  interface Window {
    initMap: () => void;
    google: typeof google;
  }
}

window.initMap = function() {
  if (!window.google) {
    console.warn('Google Maps API not loaded');
    return;
  }

  const mapElement = document.getElementById('map');
  if (!mapElement) {
    console.warn('Map element not found');
    return;
  }

  // Styles a map in night mode.
  new window.google.maps.Map(mapElement, {
      center: {lat: 40.674, lng: -73.945}, // Update with valid coordinates
      zoom: 12,
      scrollwheel: false,
      disableDefaultUI: true,
      styles: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{color: '#d59563'}]},
          {featureType: 'poi', elementType: 'labels.text.fill', stylers: [{color: '#d59563'}]},
          {featureType: 'poi.park', elementType: 'geometry', stylers: [{color: '#263c3f'}]},
          {featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{color: '#6b9a76'}]},
          {featureType: 'road', elementType: 'geometry', stylers: [{color: '#38414e'}]},
          {featureType: 'road', elementType: 'geometry.stroke', stylers: [{color: '#212a37'}]},
          {featureType: 'road', elementType: 'labels.text.fill', stylers: [{color: '#9ca5b3'}]},
          {featureType: 'road.highway', elementType: 'geometry', stylers: [{color: '#746855'}]},
          {featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{color: '#1f2835'}]},
          {featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{color: '#f3d19c'}]},
          {featureType: 'transit', elementType: 'geometry', stylers: [{color: '#2f3948'}]},
          {featureType: 'transit.station', elementType: 'labels.text.fill', stylers: [{color: '#d59563'}]},
          {featureType: 'water', elementType: 'geometry', stylers: [{color: '#17263c'}]},
          {featureType: 'water', elementType: 'labels.text.fill', stylers: [{color: '#515c6d'}]},
          {featureType: 'water', elementType: 'labels.text.stroke', stylers: [{color: '#17263c'}]}
      ]
  });
};

// Export empty object to make this a module
export {};
