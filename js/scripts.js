let map = L.map('map1').setView([51.514, -0.066], 13.85);

L.tileLayer('https://api.mapbox.com/styles/v1/yinglei/cjp4surim3in12rnxashtpuxh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieWluZ2xlaSIsImEiOiJjanA0c3RnZnIwNHBnM2tsbWZqamQ0NHdtIn0.1tHIEbEg5mgmm3R481AK0g', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16
}).addTo(map);


let marker1 = L.marker([51.516190, -0.069676]).addTo(map);
marker1.bindPopup("<b>Emma Smith - Attacked April 3rd 1888</b>");


let marker2 = L.marker([51.515752, -0.070633]).addTo(map);
marker2.bindPopup("<b>Martha Tabram - Murdered August 7th 1888</b>");


let marker3 = L.marker([51.519907, -0.061078]).addTo(map);
marker3.bindPopup("<b>Mary Ann Nichols - Murdered August 31th 1888</b>");

let marker4 = L.marker([51.513902, -0.077971]).addTo(map);
marker4.bindPopup("<b>Catherine Eddowes - Murdered September 30th 1888</b>");
