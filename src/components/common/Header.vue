<template>
  <header>
    <div class="header">
      <div class="bar">
        <h1 class="title"><a href="/home">PWAir</a></h1>
        <md-button class="md-icon-button md-primary btn-nav" title="메뉴">
          <md-icon>menu</md-icon>
        </md-button>
        <md-button class="md-icon-button md-dense md-raised md-primary btn-cached" title="새로고침">
          <md-icon>cached</md-icon>
        </md-button>
      </div>

      <nav>
        <div class="nav">
          <ul>
            <li>메뉴 1</li>
            <li>메뉴 1</li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .header .bar{position:relative;padding-left:52px;width:100%;height:60px;box-sizing:border-box;}
  .header .bar .title{padding-left:1.429rem;font-size:1.429rem;font-weight:bold;line-height:4.286rem;}
  .header .bar .btn-nav{position:absolute;left:0;top:50%;margin-top:-20px;}
  .header .bar .btn-cached{position:absolute;right:20px;top:50%;margin-top:-16px;}
  .header .nav{display:none;position:absolute;left:0;top:0;width:250px;height:100%;background:#fff;z-index:9000;}
  .btn-nav.md-button.md-theme-default.md-primary .md-icon-font{color:#fff;}
  .md-theme-default a:not(.md-button){display:inline-block;height:100%;color:#fff;text-decoration:none;}
</style>

<script>

</script>
