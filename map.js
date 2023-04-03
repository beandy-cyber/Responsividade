let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -23.515864, lng: -46.625416 },
    zoom: 8,
  });
}

window.initMap = initMap;
