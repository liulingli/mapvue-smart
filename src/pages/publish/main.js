import Vue from 'vue'
import App from './publish'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '发布行程'
  }
}

