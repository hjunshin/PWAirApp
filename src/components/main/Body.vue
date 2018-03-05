<template>
  <section>
    <div class="content">
      <article>
        Body
        <p id="startLat"></p>
        <p id="startLon"></p>
      </article>
    </div>
  </section>
</template>

<script>

window.onload = function() {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};

export default {
}
</script>

<style scoped>
  .content{}
</style>
