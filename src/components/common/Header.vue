<template>
  <header class="header">
    <div class="page-container md-layout-column">
      <md-toolbar>
        <md-button class="md-icon-button btn-menu" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">PWAir</span>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button btn-cached">
            <md-icon>refresh</md-icon>
          </md-button>
        </div>
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">PWAir</span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>update</md-icon>
            <span class="md-list-item-text">실시간 대기 지수</span>
          </md-list-item>

          <md-list-item>
            <md-icon>timeline</md-icon>
            <span class="md-list-item-text">지난 미세먼지 지수</span>
          </md-list-item>
        </md-list>
      </md-drawer>
    </div>
  </header>
</template>


<style scoped>
  .header{position:absolute;left:0;top:0;width:100%;height:100%;}
  .header .md-toolbar{background:transparent;}
  .header .md-title{color:#fff;font-size:1.429rem;font-weight:bold;line-height:4.286rem;}
  .header .btn-menu .md-icon{color:#fff;}
  .header .btn-cached .md-icon{color:#fff;}
  .md-drawer{width:230px;max-width:calc(100vw - 125px);}
</style>

<script>
export default {
  data: function(){
    return{
      showNavigation: false,
      showSidepanel: false
    }
  },
  methods: {
    btnRefresh(){

    }
  }
}
</script>
