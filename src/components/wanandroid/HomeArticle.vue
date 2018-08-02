<template>
  <div class="list_article">
    <ul>
      <li v-for="art in articleList">
        <div class="info_art">
          <p>
            <a :href="art.link" target="_blank">{{art.title}}</a>
          </p>
          <span v-if="art.fresh" class="istop">新</span>
          <span class="tags" v-for="tag in art.tags">{{tag.name}}</span>
          <span>作者：
            <a class="aauthor" :href="'http://www.wanandroid.com/article/list/0?author='+art.author" target="_blank">{{art.author}}</a>
          </span>
          <span>分类：
            <a class="levelone" href="/article/list/0?cid=249">{{art.superChapterName}}</a>
            /
            <a class="leveltwo" href="/article/list/0?cid=361">{{art.chapterName}}</a>
          </span>
          <span class="aniceDate">时间：{{art.niceDate}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isLoading: false,
      curPage: 0,
      articleList: []
    };
  },
  created() {
    this.getHomeArticle(0);
  },
  mounted() {
    let _this = this;
    // 添加滚动事件，检测滚动到页面底部
    window.addEventListener("scroll", function() {
      var scrollTop = document.documentElement.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight;
      var clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight) {
        if (_this.isLoading) return;
        _this.getHomeArticle(_this.curPage);
      }
    });
  },
  methods: {
    getHomeArticle(pageIndex) {
      this.isLoading = true;
      pageIndex = pageIndex || 0;
      this.axios
        .get(this.api.wandroidHome + pageIndex + "/json")
        .then(reponse => {
          var result = reponse.data;
          if (result.errorCode == 0) {
            if (result.data.datas != null) {
              this.curPage = result.data.curPage;
              this.articleList = this.articleList.concat(result.data.datas);
            }
          }
          this.isLoading = false;
        })
        .catch(function(erroe) {
          console.log(error);
          this.isLoading = false;
        });
    }
  }
};
</script>
<style scoped>
.list_article {
  background-color: #fff;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.list_article ul {
  list-style: none;
}
.list_article li {
  overflow: hidden;
  border-bottom: 1px solid #e2e2e2;
}
.info_art {
  float: left;
  margin: 22px auto;
}
.info_art p a {
  cursor: pointer;
  color: #2e3135;
  font-weight: bold;
  text-decoration: none;
}
a.aauthor {
  color: #484848;
}
a.levelone,
a.leveltwo {
  color: #484848;
}
.info_art span {
  color: #999;
  font-size: 12px;
  margin-right: 6px;
}
span.istop {
  color: #e24234;
  border: 1px solid #e24234;
  padding-left: 6px;
  padding-right: 6px;
}
span.tags {
  color: #009a61;
  border: 1px solid #009a61;
  padding-left: 6px;
  padding-right: 6px;
}
</style>


