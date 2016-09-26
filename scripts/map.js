$(document).ready(function(){

  document.getElementById("googleMap").innerHTML =
  "<script src=\"http://maps.googleapis.com/maps/api/js\"></script>";

  var myCenter = new google.maps.LatLng(44.088138, -103.249492);
  var surbeck = new google.maps.LatLng(44.075854, -103.208377);

  function initialize() {
  var mapProp = {
  center:myCenter,
  zoom:12,
  scrollwheel:false,
  draggable:false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker = new google.maps.Marker({
  position:myCenter,
  label:"KTEQ Radio Broadcast"
  });

  var surbMarker = new google.maps.Marker({
  position:surbeck,
  label:"KTEQ Studio"
  });

  marker.setMap(map);

  surbMarker.setMap(map);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
})