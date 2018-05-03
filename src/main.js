import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/found/main', 'pages/me/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f7614a',
      navigationBarTitleText: '嗒嗒拼车',
      navigationBarTextStyle: '#ffffff'
    },
    tabBar: {
      color: '#cccccc',
      backgroundColor: '#ffffff',
      selectedColor: '#f7614a',
      list: [{
        pagePath: 'pages/index/main',
        text: '首页',
        iconPath: './static/images/index_icon.png',
        selectedIconPath: './static/images/index_icon_selected.png'
      }, {
        pagePath: 'pages/found/main',
        text: '发现',
        iconPath: './static/images/found_icon.png',
        selectedIconPath: './static/images/found_icon_selected.png'
      }, {
        pagePath: 'pages/me/main',
        text: '我的',
        iconPath: './static/images/me_icon.png',
        selectedIconPath: './static/images/me_icon_selected.png'
      }]
    }
  }
}
