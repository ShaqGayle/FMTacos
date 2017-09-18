var taco = document.getElementById('taco');
var tilt = 0;
var map;

window.onload = function() {
  setInterval(() => {
    tilt === 0 ? tilt = 45 : tilt = 0;
    taco.style.transform = 'rotate(' + tilt + 'deg)';
  }, 500)
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
        });
      }

function newMarker(coordinates) {
  var position = {
    lat: coordinates.latitude,
    lng: coordinates.lng
  };

  var marker = new google.maps.Marker({
    position: position,
    map: map,
    title: 'Hello World!'
  });
}
