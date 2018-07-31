<template>
  <div>
    <ul class="list_article">
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
      curPage: 0,
      articleList: []
    };
  },
  created() {
    this.getHomeArticle();
  },
  methods: {
    getHomeArticle() {
      this.axios
        .get(this.api.wandroidHome)
        .then(reponse => {
          var result = reponse.data;
          if (result.errorCode == 0) {
            this.curPage = result.data.curPage;
            this.articleList = result.data.datas;
          }
        })
        .catch(function(erroe) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
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


