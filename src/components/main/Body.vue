<template>
  <section>
    <div class="content">
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
    </div>
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
          var sigugun = items[0].addrdetail.sigugun.split(" ");
          var gu = sigugun[1];

          switch (gu) {
            case CityAir.MSRSTE_NM[0]:
              CityAir.IDX = 0;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[1]:
              CityAir.IDX = 1;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[2]:
              CityAir.IDX = 2;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[3]:
              CityAir.IDX = 3;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[4]:
              CityAir.IDX = 4;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[5]:
              CityAir.IDX = 5;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[6]:
              CityAir.IDX = 6;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[7]:
              CityAir.IDX = 7;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[8]:
              CityAir.IDX = 8;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[9]:
              CityAir.IDX = 9;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[10]:
              CityAir.IDX = 10;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[11]:
              CityAir.IDX = 11;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[12]:
              CityAir.IDX = 12;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[13]:
              CityAir.IDX = 13;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[14]:
              CityAir.IDX = 14;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[15]:
              CityAir.IDX = 15;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[16]:
              CityAir.IDX = 16;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[17]:
              CityAir.IDX = 17;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[18]:
              CityAir.IDX = 18;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[19]:
              CityAir.IDX = 19;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[20]:
              CityAir.IDX = 20;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[21]:
              CityAir.IDX = 21;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[22]:
              CityAir.IDX = 22;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[23]:
              CityAir.IDX = 23;
              realtimeCityAir(idx);
              break;
            case CityAir.MSRSTE_NM[24]:
              CityAir.IDX = 24;
              realtimeCityAir(idx);
              break;
            default:
              CityAir.IDX = 0;
              realtimeCityAir(idx);
          }

      });
    };

    function realtimeCityAir(num){
      //측정일시
      CityAir.MSRDT[num];
      //측정소명
      CityAir.MSRSTE_NM[num];
      //통합대기환경등급
      CityAir.IDEX_NM[num];
      //통합대기환경지수
      CityAir.IDEX_MVL[num];
      //미세먼지
      CityAir.PM10[num];
      //초미세먼지농도
      CityAir.PM25[num];
      //오존
      CityAir.O3[num];
    }

  }
}
</script>

<style scoped>
  .total-info{text-align:center;box-sizing:border-box;}
  .detail-info{position:absolute;left:0;bottom:0;padding:1.429rem 0 2.857rem;width:100%;height:25%;box-sizing:border-box;}
  .detail-info:before{content:'';display:block;position:absolute;left:0;top:0;width:100%;height:100%;background:#fff;opacity:.5;}
  .detail-info .list{font-size:0;}
  .detail-info .list > li{display:inline-block;width:33.3%;font-size:1rem;text-align:center;}
</style>
