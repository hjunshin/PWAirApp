<template>
  <header>
    <div class="header">
      <p class="title">PWAir</p>
      <p>Open the window when we push you</p>
      <div class="icons">
        <md-icon class="md-size-2x">sentiment_very_satisfied</md-icon>
        <md-icon class="md-size-2x">sentiment_satisfied</md-icon>
        <md-icon class="md-size-2x">sentiment_very_dissatisfied</md-icon>
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
  .icons .md-icon{margin-left:1.429rem;color:#fff;font-size:3rem;}
  .icons .md-icon:first-child{margin-left:0;}
</style>
