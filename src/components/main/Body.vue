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

var cityAir = '//openapi.seoul.go.kr:8088/73684579786775733932744377544d/json/RealtimeCityAir/1/25/';
var guName = [];

axios.get(cityAir).then(function(response){
  var listTotalCount = response.data.RealtimeCityAir.list_total_count;
  var listRow = response.data.RealtimeCityAir.row;

  for(var i = 0; i < listTotalCount; i+=1){
    guName.push(response.data.RealtimeCityAir.row[i].MSRSTE_NM);
  }

}).catch(function(error){
  console.log(error);
});

var gu;

var geoSuccess = function(position) {

  naver.maps.Service.reverseGeocode({
    location: new naver.maps.LatLng(position.coords.latitude, position.coords.longitude),
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


window.onload = function(){

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(geoSuccess);

  }else{
    alert("지오로케이션 사용 불가능");
  }

};




export default {
  mounted: function(){

  }
}
</script>

<style scoped>

</style>
