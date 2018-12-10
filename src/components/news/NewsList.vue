<template>
  <div id="news-list">
    <ul class="mui-table-view" v-for="(news,index) in newslist" :key="index">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:">
          <img class="mui-media-object mui-pull-left" :src="news.img">
          <div class="mui-media-body">
            {{news.title}}
            <p class='mui-ellipsis'>{{news.content}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newslist: []
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    getNewsList () {
      this.axios
        .get('/api/vue/news/newslist')
        .then(reponse => {
          var result = reponse.data
          if (result.status === 0) {
            this.newslist = result.data
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style>
  #news-list ul li img{
    width: 40px;
    height: 40px;
  }
</style>
