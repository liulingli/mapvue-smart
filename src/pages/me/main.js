import Vue from 'vue'
import App from './me'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '我的'
  }
}
