'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // proxyTable: {
    //   '/api': {
    //     // target: 'http://106.14.175.159:3000/', //设置你调用的接口域名和端口号 
    //     target: 'http://localhost:3000/',
    //     changeOrigin: true, //跨域
    //     pathRewrite: {
    //       '^/api': '/' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://10.1.5.11:8080/xxx/duty?time=2017-07-07 14:57:22'，直接写‘/api/xxx/duty?time=2017-07-07 14:57:22’即可
    //     }
    //   },
    //   // 本地调试时，target直接为远程服务器地址，打包上传至服务器时，地址为服务器地址，同时服务器对远程服务器进行了代理
    //   '/wanandroid': {
    //     target: 'http://106.14.175.159:3000/', //设置你调用的接口域名和端口号 
    //     //target: 'http://www.wanandroid.com/',
    //     changeOrigin: true, //跨域
    //     pathRewrite: {
    //       '^/wanandroid': '/' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://10.1.5.11:8080/xxx/duty?time=2017-07-07 14:57:22'，直接写‘/api/xxx/duty?time=2017-07-07 14:57:22’即可
    //     }
    //   },
    //   '/gank': {
    //     target: 'http://106.14.175.159:3000/', //设置你调用的接口域名和端口号 
    //     //target: 'http://gank.io/api',
    //     changeOrigin: true, //跨域
    //     pathRewrite: {
    //       '^/gank': '/'
    //     }
    //   },

    //   // Various Dev Server settings
    //   host: 'localhost', // can be overwritten by process.env.HOST
    //   port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    //   autoOpenBrowser: false,
    //   errorOverlay: true,
    //   notifyOnErrors: true,
    //   poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    //   // Use Eslint Loader?
    //   // If true, your code will be linted during bundling and
    //   // linting errors and warnings will be shown in the console.
    //   useEslint: true,
    //   // If true, eslint errors and warnings will also be shown in the error overlay
    //   // in the browser.
    //   showEslintErrorsInOverlay: false,

    //   /**
    //    * Source Maps
    //    */

    //   // https://webpack.js.org/configuration/devtool/#development
    //   devtool: 'cheap-module-eval-source-map',

    //   // If you have problems debugging vue-files in devtools,
    //   // set this to false - it *may* help
    //   // https://vue-loader.vuejs.org/en/options.html#cachebusting
    //   cacheBusting: true,

    //   cssSourceMap: true
    // }
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './', // 使用相对路径

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
