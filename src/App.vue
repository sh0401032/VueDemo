<template>
  <div id="ap">
    <!-- 头部 -->
    <mt-header fixed :title="headerTitle"></mt-header>
    <!-- 内容部分 -->
    <div style="margin-top:40px;margin-bottom:50px">
      <router-view v-on:init="getTitle"></router-view>
    </div>

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/wanandroid">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/gank">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">干货</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerTitle: ""
    };
  },
  methods: {
    getTitle(title) {
      this.headerTitle = title;
    }
  }
};
</script>

<style scoped>
#ap {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 960px;
  background: #f4f4f4;
}
</style>
