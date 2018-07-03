<template>
  <section class="content" v-bind:class="bgClass">
    <article>
      <div class="box-info">
        <div class="total-info">
          <!-- 통합대기환경지수 -->
          <div v-if="CityAir.IDEX_NM[CityAir.IDX] === '좋음'"><i class="material-icons">sentiment_very_satisfied</i></div>
          <div v-else-if="CityAir.IDEX_NM[CityAir.IDX] === '보통'"><i class="material-icons">sentiment_satisfied</i></div>
          <div v-else-if="CityAir.IDEX_NM[CityAir.IDX] === '나쁨'"><i class="material-icons">sentiment_dissatisfied</i></div>
          <div v-else-if="CityAir.IDEX_NM[CityAir.IDX] === '매우나쁨'"><i class="material-icons">sentiment_very_dissatisfied</i></div>
          <div v-else-if="CityAir.IDEX_NM[CityAir.IDX] === '점검중'"><i class="material-icons">build</i></div>

          <!-- 측정소명, 통합대기환경등급 -->
          <div v-if="CityAir.IDEX_NM[CityAir.IDX] === '점검중'">
            <p class="total-area">{{ CityAir.MSRSTE_NM[CityAir.IDX] }} 측정소는 지금 {{ CityAir.IDEX_NM[CityAir.IDX] }}!</p>
          </div>
          <div v-else>
            <p class="total-score">{{ CityAir.IDEX_MVL[CityAir.IDX] }}</p>
            <p class="total-area">{{ CityAir.MSRSTE_NM[CityAir.IDX] }}의 대기는 지금 {{ CityAir.IDEX_NM[CityAir.IDX] }}!</p>
          </div>

          <!-- 측정일시 -->
          <p>기준 : {{ CityAir.MSRDT[CityAir.IDX] }}</p>
        </div>


        <div v-if="CityAir.IDEX_NM[CityAir.IDX] === '점검중'"></div>
        <div v-else>
          <div class="detail-info">
            <ul class="list">
              <li>
                <p class="detail-category">미세먼지</p>
                <div v-if="CityAir.PM10[CityAir.IDX] >= 0 && CityAir.PM10[CityAir.IDX] <= 30">
                  <i class="material-icons">sentiment_very_satisfied</i>
                  <p>좋음</p>
                </div>
                <div v-else-if="CityAir.PM10[CityAir.IDX] > 30 && CityAir.PM10[CityAir.IDX] <= 80">
                  <i class="material-icons">sentiment_satisfied</i>
                  <p>보통</p>
                </div>
                <div v-else-if="CityAir.PM10[CityAir.IDX] > 80 && CityAir.PM10[CityAir.IDX] <= 150">
                  <i class="material-icons">sentiment_dissatisfied</i>
                  <p>나쁨</p>
                </div>
                <div v-else-if="CityAir.PM10[CityAir.IDX] > 150">
                  <i class="material-icons">sentiment_very_dissatisfied</i>
                  <p>매우나쁨</p>
                </div>
                <p class="detail-value">{{ CityAir.PM10[CityAir.IDX] }}&#13197;/m&#179;</p>
              </li>
              <li>
                <p class="detail-category">오존</p>
                <div v-if="CityAir.O3[CityAir.IDX] >= 0 && CityAir.O3[CityAir.IDX] <= 0.030">
                  <i class="material-icons">sentiment_very_satisfied</i>
                  <p>좋음</p>
                </div>
                <div v-else-if="CityAir.O3[CityAir.IDX] > 0.030 && CityAir.O3[CityAir.IDX] <= 0.090">
                  <i class="material-icons">sentiment_satisfied</i>
                  <p>보통</p>
                </div>
                <div v-else-if="CityAir.O3[CityAir.IDX] > 0.090 && CityAir.O3[CityAir.IDX] <= 0.15">
                  <i class="material-icons">sentiment_dissatisfied</i>
                  <p>나쁨</p>
                </div>
                <div v-else-if="CityAir.O3[CityAir.IDX] > 0.150">
                  <i class="material-icons">sentiment_very_dissatisfied</i>
                  <p>매우나쁨</p>
                </div>
                <p class="detail-value">{{ CityAir.O3[CityAir.IDX] }}ppm</p>
              </li>
              <li>
                <p class="detail-category">초미세먼지</p>
                <div v-if="CityAir.PM25[CityAir.IDX] >= 0 && CityAir.PM25[CityAir.IDX] <= 15">
                  <i class="material-icons">sentiment_very_satisfied</i>
                  <p>좋음</p>
                </div>
                <div v-else-if="CityAir.PM25[CityAir.IDX] > 15 && CityAir.PM25[CityAir.IDX] <= 35">
                  <i class="material-icons">sentiment_satisfied</i>
                  <p>보통</p>
                </div>
                <div v-else-if="CityAir.PM25[CityAir.IDX] > 35 && CityAir.PM25[CityAir.IDX] <= 75">
                  <i class="material-icons">sentiment_dissatisfied</i>
                  <p>나쁨</p>
                </div>
                <div v-else-if="CityAir.PM25[CityAir.IDX] > 75">
                  <i class="material-icons">sentiment_very_dissatisfied</i>
                  <p>매우나쁨</p>
                </div>
                <p class="detail-value">{{ CityAir.PM25[CityAir.IDX] }}&#13197;/m&#179;</p>
              </li>
            </ul>
          </div>
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

var bgClass = {
  bg1: false,
  bg2: false,
  bg3: false,
  bg4: false,
  bg5: false
  // 'bg-very_satisfied': false,
  // 'bg-satisfied': false,
  // 'bg-dissatisfied': false,
  // 'bg-very_dissatisfied': false,
  // 'bg-build': false
}


export default {
  data: function(){
    return{
      CityAir,
      bgClass
    }
  },
  beforeCreate: function(){
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

          var result = response.result;
          var items = result.items;
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
            }
          };
          switchGu[gu]();

          switch (CityAir.IDEX_NM[CityAir.IDX]) {
            case "좋음":
              bgClass.bg1 = true;
              break;
            case "보통":
              bgClass.bg2 = true;
              break;
            case "나쁨":
              bgClass.bg3 = true;
              break;
            case "매우나쁨":
              bgClass.bg4 = true;
              break;
            case "점검중":
              bgClass.bg5 = true;
              break;
          }

      });

    };
  },
  mounted: function(){

  }
}
</script>

<style scoped>
  .bg1{background:#52dbbe;}
  .bg2{background:#fe9f1f;}
  .bg3{background:#f94558;}
  .bg4{background:#ba0300;}
  .bg5{background:#000;}
  /* .bg-very_satisfied{background:#52dbbe;}
  .bg-satisfied{background:#fe9f1f;}
  .bg-dissatisfied{background:#f94558;}
  .bg-very_dissatisfied{background:#ba0300;}
  .bg-build{background:#000;} */

  .content > article, .box-info{height:100%;}
  .box-info{position:relative;}
  .total-info{padding-top:3rem;line-height:1;text-align:center;box-sizing:border-box;}
  .total-info .material-icons{padding:2rem 0 1rem;font-size:6rem;}
  .total-info .total-score{padding-bottom:2rem;font-size:3rem;}
  .total-info .total-area{padding-bottom:2rem;font-size:1.43rem;font-weight:bold;}
  .detail-info{position:absolute;left:0;bottom:0;width:100%;padding:1.429rem 0 2.857rem;box-sizing:border-box;}
  .detail-info:before{content:'';display:block;position:absolute;left:0;top:0;width:100%;height:100%;background:#fff;opacity:.3;}
  .detail-info .list{font-size:0;line-height:1;}
  .detail-info .list > li{display:inline-block;width:33.3%;font-size:1rem;text-align:center;}
  .detail-info .detail-category{font-size:1.143rem;}
  .detail-info .material-icons{padding:1rem 0 0.5rem;}
  .detail-info .detail-value{padding-top:0.5rem;}
</style>
