  L.mapquest.key = "vNH4YmGf1pMUK1iVQcCCQFaUXQMMVb5u";

  let baseLayer = L.mapquest.tileLayer("map");
  let map = L.mapquest.map("map", {
    center: [-23.515864, -46.625416],
    layers: baseLayer,
    zoom: 10,
  });

  L.mapquest.control().addTo(map);
