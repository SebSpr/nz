let lat = -43.53;
let lng = 170.15;
let zoom = 11;


// L = Leaflet

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



let jsonPunkt = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [lng, lat]
    },
    "properties": {
        "name": "Fox Glacier"

    }
};

L.geoJSON(jsonPunkt, {}).bindPopup(function (layer) {
    return `
    <h2>${layer.feature.properties.name}</h2>
    <ul> 
        <li>Breite: ${layer.feature.geometry.coordinates[0]}</li>
        <li>Länge: ${layer.feature.geometry.coordinates[1]}</li>
    </ul>
`;
}).addTo(map);