export function mapbox() {
  const apiMapBox = {
    key: "pk.eyJ1IjoiZGV2ZWxvcGVyOTIiLCJhIjoiY2tuY3Mxb2Z1MjRybDJ4cDlvY2ZoOW96ciJ9.DsszfFG2w_DeXO3hGtIO0g",
    uri: "https://account.mapbox.com/",
  };

  mapboxgl.accessToken = apiMapBox.key;
  const mapObject = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10?optimize=true",
    center: [2.3364, 48.86091],
    zoom: 16,
  });
  mapObject.addControl(new mapboxgl.NavigationControl());
  const marker1 = new mapboxgl.Marker({ color: "#000" })
    .setLngLat([2.3364, 48.86091])
    .addTo(mapObject);
  const marker2 = new mapboxgl.Marker({ color: "#727272" })
    .setLngLat([2.3333, 48.8602])
    .addTo(mapObject);
  const marker3 = new mapboxgl.Marker({ color: "#727272" })
    .setLngLat([2.3397, 48.8607])
    .addTo(mapObject);
  const marker4 = new mapboxgl.Marker({ color: "#727272" })
    .setLngLat([2.333, 48.8619])
    .addTo(mapObject);
  const marker5 = new mapboxgl.Marker({ color: "#727272" })
    .setLngLat([2.3365, 48.8625])
    .addTo(mapObject);
}
