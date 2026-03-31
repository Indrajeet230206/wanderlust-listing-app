
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listingData.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

console.log(listingData.geometry.coordinates);

const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listingData.geometry.coordinates) //listing.geometry.coordinates
    .addTo(map);