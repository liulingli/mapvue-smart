<template>
  <div class="page-main">
     <div class="top-banner">
     </div>
    <div class="tabs">
      <div class="tabs-menu">
        <div v-for="(menu, key) in menus" :key="key" class="tabs-menu-item" v-bind:class="curIndex==key?'selected':''" @click="changeIndex(key)"><span>{{menu}}</span></div>
      </div>
      <swiper :current="curIndex" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" @change="change">
        <block>
          <swiper-item>
            <listCard v-for="(item, index) in dataSource1" :data="(item)" :key="index" v-on:listClick="listClick"></listCard>
          </swiper-item>
          <swiper-item>
            <listCard v-for="(item, index) in dataSource2" :data="(item)" :key="index" v-on:listClick="listClick"></listCard>
          </swiper-item>
        </block>
      </swiper>
    </div>
  </div>
</template>

<script>
import listCard from '@/components/listCard'
import tabs from '@/components/tabs'

export default {
  data () {
    return {
      curIndex: 0,
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      userInfo: {},
      dataSource1: [
        {type: 1, phone: '18883183248', startPoint: '草房地铁站11', endPoint: '首尔天成', boardingTime: '今天13：00', people: 3, remark: '希望走高速，有大件行李'},
        {type: 1, phone: '18883183142', startPoint: '草房地铁站11', endPoint: '首尔天成', boardingTime: '今天13：00', people: 3, remark: '希望走高速，有大件行李'}
      ],
      dataSource2: [
        {type: 2, phone: '18883183248', startPoint: '草房地铁站22', endPoint: '首尔天成', boardingTime: '今天13：00', people: 3, remark: '希望走高速，有大件行李'},
        {type: 2, phone: '18883183142', startPoint: '草房地铁站22', endPoint: '首尔天成', boardingTime: '今天13：00', people: 3, remark: '希望走高速，有大件行李'}
      ],
      menus: [
        '我是乘客',
        '我是司机'
      ]
    }
  },

  components: {
    listCard,
    tabs
  },

  methods: {
    changeIndex (index) {
      this.curIndex = index
    },
    change (event) {
      let current = event.mp.detail.current
      this.curIndex = current
    },
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
    },
    changeIndicatorDots: function (e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function (e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange: function (e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function (e) {
      this.setData({
        duration: e.detail.value
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
  .tabs {
    padding: 6px 0;
    color:#3c3c3c;
    font-size:16px;
  }
  .tabs-menu {
    padding: 0 8px;
    color:#3c3c3c;
    font-size:16px;
    border-bottom:1px solid #f3f3f3;
    text-align: center;
  }
  .tabs-menu-item{
    display: inline-block;
    text-align: center;
    padding:0 20px;
  }
  .tabs-menu-item span{
    padding:15px 5px;
    display: inline-block;
    font-size:16px;
    font-weight:600;
    color:gray;
    position: relative;
  }
  .tabs-menu-item span:after{
    content:'';
    display:inline-block;
    position:absolute;
    left:15%;
    width:70%;
    bottom:0;
    border-bottom:3px solid transparent;
  }
  .tabs-menu-item.selected span{
    color:#f8614a;
  }
  .tabs-menu-item.selected span:after{
    border-bottom:3px solid #f8614a;
  }

</style>
