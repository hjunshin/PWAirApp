<template>
  <section>
    <div class="content">
      <article>
        <!-- <div id="map" style="width:100%;height:400px;"></div> -->
      </article>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

var CityAir = 'http://openapi.seoul.go.kr:8088/73684579786775733932744377544d/json/RealtimeCityAir/1/25/';
var dongName = [];

axios.get(CityAir).then(function(response){
  var listTotalCount = response.data.RealtimeCityAir.list_total_count;
  var listRow = response.data.RealtimeCityAir.row;

  for(var i = 0; i < listTotalCount; i+=1){
    dongName.push(response.data.RealtimeCityAir.row[i].MSRSTE_NM);
  }

}).catch(function(error){
  console.log(error);
});

var gu;
var geoSuccess = function(position) {
  var location = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);

  naver.maps.Service.reverseGeocode({
      location,
  }, function(status, response) {
      if (status !== naver.maps.Service.Status.OK) {
          return alert('Something wrong!');
      }

      var result = response.result; // 검색 결과의 컨테이너
      var items = result.items; // 검색 결과의 배열
      var sigugun = items[0].addrdetail.sigugun.split(" ");
          gu = sigugun[1];
  });

};
navigator.geolocation.getCurrentPosition(geoSuccess);

window.onload = function(){
  console.log(gu);

};




export default {
  mounted: function(){
    console.log("마운티드");


  }
}
</script>

<style scoped>
  .content{}
</style>
