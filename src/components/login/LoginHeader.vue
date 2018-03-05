<template>
  <header>
    <div class="header">
      <p class="title">PWAir</p>
      <p>Open the window when we push you</p>
      <div class="icons">
        <i class="material-icons">&#xE815;</i>
        <i class="material-icons">&#xE812;</i>
        <i class="material-icons">&#xE814;</i>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .header{padding:7.143rem 0 1.429rem;text-align:center;}
  .header .title{font-size:4rem;font-weight:bold;line-height:1;}
  .header .title + p{padding:1.429rem 0;font-size:1.286rem;}
  .icons{font-size:0;}
  .icons .material-icons{margin-left:1.429rem;font-size:3rem;}
  .icons .material-icons:first-child{margin-left:0;}
</style>
