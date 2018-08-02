<template>
  <div>
    <ul>
      <li v-for="img in images"><img :src="img.url"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "干货",
      pageSize: 10,
      pageIndex: 0,
      images: []
    };
  },
  created() {
    this.getImages();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$emit("init", this.title);
    },
    getImages() {
      var url = this.api.gankWelfare + "/" + this.pageSize +"/" + this.pageIndex;
      this.axios
        .get(url)
        .then(res => {
          if(!res.data.error){
            this.images = res.data.results;
          }
        })
        .catch();
    }
  }
};
</script>
<style>
</style>
