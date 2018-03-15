<template>
  <section>
    <div class="content">
      <article>
      </article>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

var CityAir = '//openapi.seoul.go.kr:8088/73684579786775733932744377544d/json/RealtimeCityAir/1/25/';
var guName = [];

axios.get(CityAir).then(function(response){
  var listTotalCount = response.data.RealtimeCityAir.list_total_count;
  var listRow = response.data.RealtimeCityAir.row;

  for(var i = 0; i < listTotalCount; i+=1){
    guName.push(response.data.RealtimeCityAir.row[i].MSRSTE_NM);
  }

  console.log(guName);

}).catch(function(error){
  console.log(error);
});

var gu;

var geoSuccess = function(position) {
  console.log(position);

  var mapLocation = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);

  naver.maps.Service.reverseGeocode({
      mapLocation,
  }, function(status, response) {
      if (status !== naver.maps.Service.Status.OK) {
          return alert('Something wrong!');
      }

      var result = response.result; // 검색 결과의 컨테이너
      var items = result.items; // 검색 결과의 배열
      var sigugun = items[0].addrdetail.sigugun.split(" ");
          gu = sigugun[1];
          console.log(gu);
  });

};

navigator.geolocation.getCurrentPosition(geoSuccess);


window.onload = function(){
  console.log(gu);
};




export default {
  mounted: function(){

  }
}
</script>

<style scoped>
  .content{}
</style>
