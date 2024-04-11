const lat = -43.53;
const long = 170.15;
const zoom = 11;

let map = L.map('map').setView([lat, long], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([lat, long]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
