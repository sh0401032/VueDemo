<template>
  <div>
    <mt-swipe class="swipe" :auto="2000">
      <mt-swipe-item v-for="(item,index) in list" :key="index">
        <img class="swipe-img" :src="item.imagePath">
      </mt-swipe-item>
    </mt-swipe>
    <div class="main-content">
      <div class="article-content">
        <!-- 首页文章列表 -->
        <homeArticle></homeArticle>
      </div>
    </div>
  </div>
</template>
<script>
import Api from '../../api/wanandroid'
import HomeArticle from './HomeArticle'
export default {
  data () {
    return {
      title: '玩安卓',
      list: []
    }
  },
  components: {
    homeArticle: HomeArticle
  },
  created () {
    // 获取当前底部是否显示
    let _footer = this.$store.state.footerVisible
    if (!_footer) {
      this.$store.commit('TOGGLE_FOOTER')
    }
    // 设置选中的tab
    this.$store.commit('SELECT_TAB', 'main')
    // 获取banner图片
    this.getImages()
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$emit('init', this.title)
    },
    getImages () {
      this.axios
        .get(Api.wandroidBanner)
        .then(reponse => {
          var result = reponse.data
          if (result.errorCode === 0) {
            this.list = result.data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.swipe {
  overflow: hidden;
  height: 200px;
}
.swipe-img {
  width: 100%;
}

.main-content {
  overflow: hidden;
}

/* .friend-web-site {
  float: right;
  width: 300px;
} */
</style>
