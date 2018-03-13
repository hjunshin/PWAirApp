<template>
  <div class="">
    Statistic
  </div>
</template>

<script>
window.onload = function() {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    var lati = startPos.coords.latitude;
    var longi = startPos.coords.longitude;

    var map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(lati, longi),
        zoom: 10,
        mapTypeControl: true
    });

    map.setCursor('pointer');
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);



};



export default {
}
</script>
<style>
</style>
