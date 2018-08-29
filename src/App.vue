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
      <mt-tab-item>
        <router-link to="/wanandroid">
          <img src="./assets/app/home.png" class="tab-item-img">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/gank">
          <img src="./assets/app/picture.png" class="tab-item-img">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/shopcar">
          <img src="./assets/app/shop.png" class="tab-item-img">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/search">
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 960px;
  background: #f4f4f4;
}
.tab-item-img {
  width: 30px;
  height: 30px;
}
</style>
