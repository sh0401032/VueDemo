<template>
  <div class="list_welfare">
    <Loadmore class="load_more" :bottom-method="loadMore" :auto-fill="false" :top-method="refresh" ref="loadmore">
      <ul>
        <img v-for="(img,index) in images" :key="index" :src="img.url">
      </ul>
    </Loadmore>
  </div>
</template>
<script>
import Api from '../../api/gank'
import {Loadmore} from 'mint-ui'
export default {
  components: {
    Loadmore
  },
  data () {
    return {
      title: '干货',
      pageSize: 20,
      pageIndex: 1,
      isLoading: false,
      images: []
    }
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
    refresh () {
      this.pageIndex = 1
      this.images = []
      this.getImages()
      this.$refs.loadmore.onTopLoaded()
    },
    loadMore () {
      this.getImages()
      this.$refs.loadmore.onBottomLoaded()
    },
    getImages () {
      this.isLoading = true
      var url = Api.gankWelfare + '/' + this.pageSize + '/' + this.pageIndex
      this.axios
        .get(url)
        .then(res => {
          if (!res.data.error) {
            if (res.data.results != null) {
              this.pageIndex++
              this.images = this.images.concat(res.data.results)
            }
          }
          this.isLoading = false
        })
        .catch(error => {
          console.log(error)
          this.isLoading = false
        })
    }
  }
}
</script>
<style scoped>
.list_welfare {
  overflow: scroll;
}
.list_welfare ul {
  list-style: none;
  margin: 0px;
  overflow: hidden;/*可以被子元素撑起高度*/
  padding: 0px;
}
.list_welfare img {
  width: 50%;
  /* height: 400px; */
  padding: 3px;
  float: left;
  box-sizing: border-box; /*指定width包含padding和border*/
}
</style>
