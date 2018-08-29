export default {
  /**
   * 每日数据： http://gank.io/api/day/年/月/日
   * eg:http://gank.io/api/day/2015/08/06
   */
  /**
   * 分类数据: http://gank.io/api/data/福利/请求个数/第几页
   * 数据类型： 福利
   * 请求个数： 数字，大于0
   * 第几页：数字，大于0
   * eg: http://gank.io/api/data/福利/10/1
   */
  gankWelfare: '/gank/data/福利'
  /**
   * 分类数据: http://gank.io/api/data/数据类型/请求个数/第几页
   * 数据类型： 福利 | Android | iOS | 休息视频 | 拓展资源 | 前端 | all
   * 请求个数： 数字，大于0
   * 第几页：数字，大于0
   * eg: http://gank.io/api/data/Android/10/1
   */
}
