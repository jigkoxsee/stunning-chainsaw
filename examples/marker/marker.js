var myMarker = [];

function initMap() {
    var direct = "https://maps.googleapis.com/maps/api/directions/json?origin=Boston,MA&destination=Concord,MA&waypoints=Charlestown,MA|via:Lexington,MA";

    var place = [
        {
            name: "CE KMITL",
            lat: 13.729118,
            lng: 100.775801
        }, {
            name: "Paseo",
            lat: 13.721021,
            lng: 100.727105
        }, {
            name: "Tescolotus",
            lat: 13.722524,
            lng: 100.714046
        }];
    var myLatlng = new google.maps.LatLng(13.729308, 100.7761584);

    var mapOptions = {
        zoom: 14,
        center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    for (i = 0; i < 3; i++) {
    latlng = new google.maps.LatLng(place[i].lat, place[i].lng);
    marker = new google.maps.Marker({
        position: latlng,
        title: place[i].name
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
    myMarker.push(marker);
}
}
