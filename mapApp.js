/// <reference path="./typings/index.d.ts" />
function initialize() {
    var option = {
        center: new google.maps.LatLng(34.059, -118.39),
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById('mapDiv'), option);
    addButtons(map);
}
function addButtons(map) {
    document.getElementById('btnTerrain').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
    });
    document.getElementById('btnRoadmap').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    });
    document.getElementById('btnSatellite').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    });
    document.getElementById('btnHybrid').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.HYBRID);
    });
}
google.maps.event.addDomListener(window, "load", initialize);
//# sourceMappingURL=mapApp.js.map