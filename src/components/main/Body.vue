<template>
  <section class="content">
    <article>
      <div class="box-info">
        <div class="total-info">
          <!-- 통합대기환경지수 -->
          <p>
            <i class="material-icons">&#xE815;</i><br>
            {{ CityAir.IDEX_MVL[CityAir.IDX] }}
          </p>
          <!-- 측정소명, 통합대기환경등급 -->
          <p>{{ CityAir.MSRSTE_NM[CityAir.IDX] }}의 대기는 지금 {{ CityAir.IDEX_NM[CityAir.IDX] }}!</p>
          <!-- 측정일시 -->
          <p>기준 : {{ CityAir.MSRDT[CityAir.IDX] }}</p>
        </div>

        <div class="detail-info">
          <ul class="list">
            <li>
              <p>미세먼지</p>
              <i class="material-icons">&#xE815;</i>
              <p>{{ CityAir.PM10[CityAir.IDX] }}㎍/m³</p>
            </li>
            <li>
              <p>오존</p>
              <i class="material-icons">&#xE812;</i>
              <p>{{ CityAir.O3[CityAir.IDX] }}ppm</p>
            </li>
            <li>
              <p>초미세먼지</p>
              <i class="material-icons">&#xE814;</i>
              <p>{{ CityAir.PM25[CityAir.IDX] }}㎍/m³</p>
            </li>
          </ul>
        </div>

      </div>
    </article>
  </section>
</template>

<script>
import axios from 'axios';

var CityAir = {
  URL: '//openapi.seoul.go.kr:8088/73684579786775733932744377544d/json/RealtimeCityAir/1/25/',
  IDX: 0,
  MSRDT: [],
  MSRSTE_NM: [],
  IDEX_NM: [],
  IDEX_MVL: [],
  PM10: [],
  PM25: [],
  O3: []
}


export default {
  data: function(){
    return{
      CityAir
    }
  },
  mounted: function(){

    //서울시 권역별 실시간 대기환경 현황 불러오기
    axios.get(CityAir.URL).then(function(response){
      var listTotalCount = response.data.RealtimeCityAir.list_total_count;
      var listRow = response.data.RealtimeCityAir.row;

      for(var i = 0; i < listTotalCount; i+=1){
        CityAir.MSRDT.push(response.data.RealtimeCityAir.row[i].MSRDT);
        CityAir.MSRSTE_NM.push(response.data.RealtimeCityAir.row[i].MSRSTE_NM);
        CityAir.IDEX_NM.push(response.data.RealtimeCityAir.row[i].IDEX_NM);
        CityAir.IDEX_MVL.push(response.data.RealtimeCityAir.row[i].IDEX_MVL);
        CityAir.PM10.push(response.data.RealtimeCityAir.row[i].PM10);
        CityAir.PM25.push(response.data.RealtimeCityAir.row[i].PM25);
        CityAir.O3.push(response.data.RealtimeCityAir.row[i].O3);
      }

      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(geoSuccess);
      }else{
        alert("위치 정보를 불러올 수 없습니다.");
        realtimeCityAir(0);
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
          var sigugun = items[0].addrdetail.sigugun;
          var gu = sigugun;

          var switchGu = {
            "중구": function() {
              CityAir.IDX = 0;
            },
            "종로구": function() {
              CityAir.IDX = 1;
            },
            "용산구": function() {
              CityAir.IDX = 2;
            },
            "은평구": function() {
              CityAir.IDX = 3;
            },
            "서대문구": function() {
              CityAir.IDX = 4;
            },
            "마포구": function() {
              CityAir.IDX = 5;
            },
            "광진구": function() {
              CityAir.IDX = 6;
            },
            "성동구": function() {
              CityAir.IDX = 7;
            },
            "중랑구": function() {
              CityAir.IDX = 8;
            },
            "동대문구": function() {
              CityAir.IDX = 9;
            },
            "성북구": function() {
              CityAir.IDX = 10;
            },
            "도봉구": function() {
              CityAir.IDX = 11;
            },
            "강북구": function() {
              CityAir.IDX = 12;
            },
            "노원구": function() {
              CityAir.IDX = 13;
            },
            "강서구": function() {
              CityAir.IDX = 14;
            },
            "구로구": function() {
              CityAir.IDX = 15;
            },
            "영등포구": function() {
              CityAir.IDX = 16;
            },
            "동작구": function() {
              CityAir.IDX = 17;
            },
            "관악구": function() {
              CityAir.IDX = 18;
            },
            "금천구": function() {
              CityAir.IDX = 19;
            },
            "양천구": function() {
              CityAir.IDX = 20;
            },
            "강남구": function() {
              CityAir.IDX = 21;
            },
            "서초구": function() {
              CityAir.IDX = 22;
            },
            "송파구": function() {
              CityAir.IDX = 23;
            },
            "강동구": function() {
              CityAir.IDX = 24;
            },
            _default: function() {
              CityAir.IDX = 0;
            }
          };
          switchGu[gu](CityAir.MSRSTE_NM);

      });
    };

  }
}
</script>

<style scoped>
  .content > article, .box-info, .total-info{height:100%;}
  .box-info{position:relative;}
  .total-info{line-height:1;text-align:center;box-sizing:border-box;}
  .total-info .material-icons{font-size:6rem;}
  .detail-info{position:absolute;left:0;bottom:0;width:100%;padding:1.429rem 0 2.857rem;box-sizing:border-box;}
  .detail-info:before{content:'';display:block;position:absolute;left:0;top:0;width:100%;height:100%;background:#fff;opacity:.5;}
  .detail-info .list{font-size:0;line-height:1;}
  .detail-info .list > li{display:inline-block;width:33.3%;font-size:1rem;text-align:center;}
</style>
