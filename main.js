var map = L.map('map').setView([46.816944, 11.250278], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([46.816944, 11.250278]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
