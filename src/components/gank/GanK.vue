<template>
  <div class="list_welfare">
    <ul>
      <li v-for="(img,index) in images" :key="index"><img :src="img.url"></li>
    </ul>
  </div>
</template>
<script>
import Api from '../../api/gank'
export default {
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
    let _this = this
    window.addEventListener('scroll', function () {
      if (_this.$utils.isScrollBottom()) {
        if (_this.isLoading) return
        _this.getImages()
      }
    })
  },
  methods: {
    init () {
      this.$emit('init', this.title)
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
.list_welfare ul {
  list-style: none;
}
.list_welfare ul li {
  display: inline;
}
.list_welfare li img {
  height: 400px;
  margin-bottom: 5px;
  margin-left: 5px;
  float: left;
}
</style>
