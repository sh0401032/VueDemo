<template>
  <div class="friend_web_site">
    <div class="block">
      <h2 class="title">
        <span>常用网站</span>
      </h2>
      <ul class="link_list">
        <li v-for="(web,index) in webs">
          <a :style="{color:getColor(web.order)}" :href="web.link" target="_blank">{{web.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Api from '../../api/wanandroid'
export default {
  data () {
    return {
      webs: []
    }
  },
  created () {
    this.getWebs()
  },
  methods: {
    getWebs () {
      var url = Api.friendWeb
      this.axios
        .get(url)
        .then(reponse => {
          var result = reponse.data
          if (result.errorCode === 0) {
            if (result.data != null) {
              this.webs = result.data
            }
          }
        })
        .catch(function () {})
    },
    getColor (order) {
      switch (order) {
        case 1:
          return 'rgb(68, 157, 68)'
        case 2:
          return 'rgb(230, 76, 59)'
        case 3:
          return 'rgb(153, 102, 0)'
        default:
          return '#3367D6'
      }
    }
  }
}
</script>
<style scoped>
.friend_web_site {
  background: #ffff;
}
.title {
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid #8db5d0;
  font-size: 16px;
  font-weight: normal;
  color: #333;
  text-indent: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.link_list {
  padding: 10px;
  overflow: hidden;
}
.link_list li {
  display: inline-block;
  margin: 5px 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
