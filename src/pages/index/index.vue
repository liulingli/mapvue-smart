<template>
  <div class="index-container">
     <div class="top-banner"></div>
     <div class="index-container">
       <listCard v-for="(item, index) in dataSource" :data="(item)" :key="index" v-on:listClick="listClick"></listCard>
     </div>
  </div>
</template>

<script>
import listCard from '@/components/listCard'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      dataSource: [
        {type: 1, phone: '18883183248', startPoint: '草房地铁站', endPoint: '首尔天成', boardingTime: '今天13：00', people: 3, remark: '希望走高速，有大件行李'},
        {type: 1, phone: '18883183142', startPoint: '草房地铁站', endPoint: '首尔天成', boardingTime: '今天13：00', people: 3, remark: '希望走高速，有大件行李'}
      ]
    }
  },

  components: {
    listCard
  },

  methods: {
    bindViewTap () {
      const url = '../me/main'
      wx.navigateTo({url})
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    listClick (phone) {
      console.log('listClick', phone)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>

</style>
