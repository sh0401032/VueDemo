<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(item,index) in list" :key="index">
        <img :src="item.imagePath">
      </mt-swipe-item>
    </mt-swipe>
    <div class="main-content">
      <div class="article-content">
        <!-- 首页文章列表 -->
        <homeArticle></homeArticle>
      </div>
      <div class="friend-web-site">
        <friendWebSite></friendWebSite>
      </div>
    </div>
  </div>
</template>
<script>
import Api from '../../api/wanandroid'
import HomeArticle from './HomeArticle'
import FriendWebSite from './FriendWebSite'
export default {
  data () {
    return {
      title: '玩安卓',
      list: []
    }
  },
  components: {
    homeArticle: HomeArticle,
    friendWebSite: FriendWebSite
  },
  created () {
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
.mint-swipe-item {
  width: 100%;
  height: 100%;
}
.mint-swipe-item img {
  width: 100%;
}
.mint-swipe {
  height: 500px;
}

.main-content {
  overflow: hidden;
  min-width: 900px;
}
.article-content {
  width: 100%;
  float: left;
  margin-right: -350px;
}
.friend-web-site {
  float: right;
  width: 300px;
}
</style>
