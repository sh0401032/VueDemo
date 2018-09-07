<template>
  <div id="ap">
    <!-- 头部 -->
    <mt-header :title="headerTitle">
    </mt-header>
    <!-- 内容部分 -->
    <div style="margin-bottom:46px">
      <router-view v-on:init="getTitle"></router-view>
    </div>

    <!-- 底部 -->
    <mt-tabbar fixed>
      <mt-tab-item class="tab-bar">
        <router-link to="/app/wanandroid">
          <img src="./assets/app/home.png" class="tab-item-img">
        </router-link>
      </mt-tab-item>
      <mt-tab-item class="tab-bar">
        <router-link to="/app/gank">
          <img src="./assets/app/picture.png" class="tab-item-img">
        </router-link>
      </mt-tab-item>
      <mt-tab-item class="tab-bar">
        <router-link to="/app/shopcar">
          <img src="./assets/app/shop.png" class="tab-item-img">
        </router-link>
      </mt-tab-item>
      <mt-tab-item class="tab-bar">
        <router-link to="/app/search">
          <img src="./assets/app/search.png" class="tab-item-img">
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headerTitle: ''
    }
  },
  methods: {
    getTitle (title) {
      this.headerTitle = title
    }
  }
}
</script>

<style scoped>
#ap {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f4f4f4;
}
.tab-item-img {
  width: 30px;
  height: 30px;
}
.tab-bar{
  width: 25%;
  box-sizing: border-box;
}
</style>
