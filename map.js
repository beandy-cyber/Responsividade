let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -23.51, lng: -46.62 },
    zoom: 8,
  });
}

window.initMap = initMap;
