let map;
let service;
let infowindow;

function initMap () {
  var onePieceRestaurant = new google.maps.LatLng(35.62768988248756, 139.7741834153436);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: onePieceRestaurant, zoom: 19});

  var request = {
    phoneNumber: '+81355005843',
    fields: ['name', 'geometry'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromPhoneNumber(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(results)
      map.setCenter(results[0].geometry.location);
    }
  });
}