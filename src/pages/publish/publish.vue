<template>
  <div class="page-main">
    <div class="form-content">
      <div class="box-shadow">
        <div class="form-item">
          <label class="form-label">联系人</label>
          <input class="form-wrapper" placeholder="您的称呼（最多5个字）" />
        </div>
        <div class="form-item">
          <label class="form-label">手机号</label>
          <input class="form-wrapper" placeholder="请输入11位手机号码" />
        </div>
        <div class="form-item">
          <label class="form-label">身份选择</label>
          <radio-group class="radio-group" bindchange="radioChange">
            <label class="radio">
              <radio value="1" checked=""/>我是乘客
            </label>
            <label class="radio">
              <radio value="2" checked=""/>我是司机
            </label>
          </radio-group>
        </div>
        <div class="form-item">
          <label class="form-label">起点</label>
          <input class="form-wrapper" placeholder="" />
        </div>
        <div class="form-item">
          <label class="form-label">终点</label>
          <input class="form-wrapper" placeholder="" />
        </div>
        <div class="form-item">
          <label class="form-label">座位数</label>
          <input class="form-wrapper" placeholder="" />
        </div>
        <div class="form-item">
          <label class="form-label">出发时间</label>
          <input class="form-wrapper" placeholder="" />
        </div>
        <div class="form-item">
          <label class="form-label">途径地</label>
          <input class="form-wrapper" placeholder="多个途径地用逗号隔开，非必填" />
        </div>
        <div class="form-item">
          <label class="form-label">价格</label>
          <input class="form-wrapper" placeholder="" />
        </div>
        <div class="form-item">
          <label class="form-label">车辆信息</label>
          <input class="form-wrapper" placeholder="" />
        </div>
        <div class="form-item">
          <label class="form-label">补充说明</label>
          <input class="form-wrapper" placeholder="" />
        </div>
        <button class="primary-btn">发布</button>
      </div>
    </div>
    <map @markertap="markertap" :longitude="longitude" :latitude="latitude"></map>
  </div>
</template>

<script>
  // Use Vuex
  import store from './store'

  export default {
    data () {
      return {
        latitude: 0,
        longitude: 0
      }
    },
    created () {
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          let latitude = res.latitude  // 经度
          let longitude = res.longitude // 纬度
          console.log(res)
          this.latitude = latitude
          this.longitude = longitude
        }
      })
    },
    methods: {
      increment () {
        store.commit('increment')
      },
      decrement () {
        store.commit('decrement')
      },
      markertap () {
      }
    }
  }

</script>
<style>
  *{
    box-sizing: border-box;
  }
  .form-content{
    width:100%;
    padding: 10px;
    box-sizing: border-box;
  }
  .form-content .box-shadow{
    box-shadow: 0 0 5px 2px rgba(153, 153, 153, .2);
    border-radius:10px;
    padding:20px;
    box-sizing: border-box;
  }
  .form-item{
    display: flex;
    padding: 10px 0;
    border-bottom:1px solid #f3f3f3;
  }
  .form-label{
    padding-right:10px;
    min-width:80px;
  }
  .form-wrapper{
    flex: 1;
  }

  .form-label, .form-wrapper, .radio-group label{
    font-size:16px;
  }

  .primary-btn{
    margin-top:30px;
    padding:2px;
    background:#f8614a;
    color:#ffffff;
    font-size:18px;
    border-radius:30px;
  }

</style>
