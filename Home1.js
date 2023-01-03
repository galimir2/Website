// Initialize and add the map
function initMap() {
    // The location of Maidenhead
    const madrid = { lat: 40.453053, lng: -3.688344 };

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: madrid,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: madrid,
        map: map,
    });
}