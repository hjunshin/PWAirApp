<template>
  <section>
    <div class="content">
      <article>
        <!-- <dong v-bind:dongdata="dongname"></dong> -->
        <!-- <div id="map" style="width:100%;height:400px;"></div> -->
      </article>
    </div>
  </section>
</template>

<script>
var startPos;
var geoSuccess = function(position) {
  startPos = position;
  var dong;
  var lati = startPos.coords.latitude;
  var longi = startPos.coords.longitude;

  var latlng = new naver.maps.LatLng(lati, longi);

  naver.maps.Service.reverseGeocode({
      location: latlng,
  }, function(status, response) {
      if (status !== naver.maps.Service.Status.OK) {
          return alert('Something wrong!');
      }

      var result = response.result, // 검색 결과의 컨테이너
          items = result.items; // 검색 결과의 배열
          dong = items[0].addrdetail.dongmyun;
          //document.getElementsByClassName('dong').textContent = items[0].addrdetail.dongmyun;
          console.log(dong);
          //http://openapi.seoul.go.kr:8088/73684579786775733932744377544d/json/RealtimeCityAir/1/5/%EB%8F%99%EB%82%A8%EA%B6%8C/%EC%86%A1%ED%8C%8C%EA%B5%AC
      // do Something
  });

};
navigator.geolocation.getCurrentPosition(geoSuccess);

console.log(geoSuccess);

// Vue.component('dong', {
//   props: []
// });

export default {
  mounted: function(){


  }
}
</script>

<style scoped>
  .content{}
</style>
