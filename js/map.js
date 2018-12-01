let map = L.map('map2').setView([40.727, -73.953], 12.00);

L.tileLayer('https://api.mapbox.com/styles/v1/yinglei/cjp4surim3in12rnxashtpuxh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieWluZ2xlaSIsImEiOiJjanA0c3RnZnIwNHBnM2tsbWZqamQ0NHdtIn0.1tHIEbEg5mgmm3R481AK0g', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14
}).addTo(map);

//for ( let i = 0; i < places.length; i++) {
//  L.marker ( [places[i].lat, places[i].lng])
//  .bindPopup('<h3>' + places[i].name + '</h3>' + '<p>' + places[i].url + '</p>')
//  .addTo(map);
//}

for ( let i = 0;  i < places.length; i++) {
  L.marker( [places[i].lat, places[i].lng ] )
  .bindPopup( '<h3>' + places[i].name + '</h3>' + '<p>' +     places[i].url + '</p>')
  .addTo( map );

}