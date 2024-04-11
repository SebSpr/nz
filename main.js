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
let marker = L.marker([lat, lng]).addTo(map);
L.control.scale({imperial: false, maxWidth: 100}).addTo(map);
marker.bindPopup(`
    <h2>Fox Glacier</h2>
    <ul> 
        <li>Breite: ${lat.toFixed(5)}</li>
        <li>Länge: ${long.toFixed(5)}</li>
    </ul>
`).openPopup();
