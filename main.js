let lat = -43.53;
let long = 170.15;
let zoom = 11;

let map = L.map('map').setView([lat, long], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([lat, long]).addTo(map);
marker.bindPopup(`
    <h2>Fox Glacier</h2>
    <ul> 
        <li>Breite: ${lat.toFixed(5)}</li>
        <li>Länge: ${long.toFixed(5)}</li>
    </ul>
`).openPopup();
