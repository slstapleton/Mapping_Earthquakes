// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [34.0522, -118.2437],
  zoom: 13
});
//let map = L.map('mapid').setView([34.0522, -118.2437],14);

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
let marker = //L.circle([34.0522, -118.2437], {
  L.circleMarker([34.0522, -118.2437], {
  radius: 100,
  color: "black",
  fillcolor: "#ffffa1",
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("Hello There!");
