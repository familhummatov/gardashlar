if ($("#map").length > 0) {
  function initMap() {
    var lat = parseFloat(document.getElementById("map").getAttribute("lat"));
    var lng = parseFloat(document.getElementById("map").getAttribute("lng"));
    var coordinats = { lat: lat, lng: lng };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: coordinats
    });
    var marker = new google.maps.Marker({
      position: coordinats,
      map: map,
      icon: {
        url: "img/marker.png"
      }
    });
  }
}
