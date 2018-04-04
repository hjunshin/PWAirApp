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

//서울시 권역별 실시간 대기환경 현황
var CityAir = {
  URL: '//openapi.seoul.go.kr:8088/73684579786775733932744377544d/json/RealtimeCityAir/1/25/',
  MSRDT: [],
  MSRSTE_NM: [],
  IDEX_NM: [],
  IDEX_MVL: [],
  PM10: [],
  PM25: [],
  O3: []
}


axios.get(CityAir.URL).then(function(response){
  var listTotalCount = response.data.RealtimeCityAir.list_total_count;
  var listRow = response.data.RealtimeCityAir.row;

  for(var i = 0; i < listTotalCount; i+=1){
    //측정일시
    CityAir.MSRDT.push(response.data.RealtimeCityAir.row[i].MSRDT);

    //측정소명
    CityAir.MSRSTE_NM.push(response.data.RealtimeCityAir.row[i].MSRSTE_NM);

    //통합대기환경등급
    CityAir.IDEX_NM.push(response.data.RealtimeCityAir.row[i].IDEX_NM);

    //통합대기환경지수
    CityAir.IDEX_MVL.push(response.data.RealtimeCityAir.row[i].IDEX_MVL);

    //미세먼지
    CityAir.PM10.push(response.data.RealtimeCityAir.row[i].PM10);

    //초미세먼지농도
    CityAir.PM25.push(response.data.RealtimeCityAir.row[i].PM25);

    //오존
    CityAir.O3.push(response.data.RealtimeCityAir.row[i].O3);
  }

}).catch(function(error){
  console.log(error);
});

//지오로케이션 좌표 불러오기
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
      var gu = sigugun[1];
      var idx = 0;

      switch (gu) {
        case CityAir.MSRSTE_NM[0]:
          idx = 0;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[1]:
          idx = 1;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[2]:
          idx = 2;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[3]:
          idx = 3;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[4]:
          idx = 4;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[5]:
          idx = 5;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[6]:
          idx = 6;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[7]:
          idx = 7;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[8]:
          idx = 8;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[9]:
          idx = 9;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[10]:
          idx = 10;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[11]:
          idx = 11;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[12]:
          idx = 12;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[13]:
          idx = 13;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[14]:
          idx = 14;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[15]:
          idx = 15;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[16]:
          idx = 16;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[17]:
          idx = 17;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[18]:
          idx = 18;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[19]:
          idx = 19;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[20]:
          idx = 20;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[21]:
          idx = 21;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[22]:
          idx = 22;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[23]:
          idx = 23;
          realtimeCityAir(idx);
          break;
        case CityAir.MSRSTE_NM[24]:
          idx = 24;
          realtimeCityAir(idx);
          break;
        default:
          idx = 0;
          realtimeCityAir(idx);
      }

  });

};


window.onload = function(){

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(geoSuccess);
  }else{
    alert("지오로케이션 사용 불가능");
    realtimeCityAir(0);
  }

};

function realtimeCityAir(num){
  //측정일시
  console.log(CityAir.MSRDT[num]);
  //측정소명
  console.log(CityAir.MSRSTE_NM[num]);
  //통합대기환경등급
  console.log(CityAir.IDEX_NM[num]);
  //통합대기환경지수
  console.log(CityAir.IDEX_MVL[num]);
  //미세먼지
  console.log(CityAir.PM10[num]);
  //초미세먼지농도
  console.log(CityAir.PM25[num]);
  //오존
  console.log(CityAir.O3[num]);
}




export default {
  mounted: function(){

  }
}
</script>

<style scoped>

</style>
