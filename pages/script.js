window.onload = function() {
L.mapquest.key = "vNH4YmGf1pMUK1iVQcCCQFaUXQMMVb5u";

  let map = L.mapquest.map("map", {
    center: [-23.515864, -46.625416],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
  });

  map.addControl(L.mapquest.control());
      }
