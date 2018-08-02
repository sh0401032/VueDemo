<template>
    <div>
        <ul>
            <li v-for="img in images"><img src=""></li>
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
      var url =
        this.api.gankWelfare +
        "/" +
        encodeURI(encodeURI("福利")) +
        "/" +
        this.pageSize +
        "/" +
        this.pageIndex;
      this.axios
        .get("http://gank.io/api/data/"+decodeURI(encodeURI("福利"))+"/10/1")
        .then(res => {
          console.log(res.data);
        })
        .catch();
    }
  }
};
</script>
<style>
</style>
