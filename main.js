let map = L.map('map').setView([-43.53, 170.15], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([-43.53, 170.15]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
