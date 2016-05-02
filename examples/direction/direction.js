function initMap() {
    // Place - Origin,destination and between
    var place = [
        {
            lat: 13.728741,
            lng: 100.7770341
        }, {
            lat: 13.721562,
            lng: 100.726744
        }, {
            lat: 13.722293,
            lng: 100.71881
        }];

    var map = new google.maps.Map(document.getElementById('map'), {
        center: place[0],
        //scrollwheel: false,
        zoom: 8
    });

    var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map
    });

    // Loop through all place
    //for (i = 1;i < 2;i++){
    // Set destination, origin and travel mode.
    var request = {
        destination: place[1],
        origin: place[0],
        travelMode: google.maps.TravelMode.DRIVING
    };

    // Pass the directions request to the directions service.
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
        }
    });
    //}

}
