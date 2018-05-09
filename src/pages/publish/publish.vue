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
          <radio-group class="radio-group" @change="radioChange">
            <label class="radio">
              <radio color="#00d101" value="1" checked="" /> <span class="text">我是乘客</span>
            </label>
            <label class="radio">
              <radio color="#00d101" value="2"/><span class="text">我是司机</span>
            </label>
          </radio-group>
        </div>
        <div class="form-item">
          <label class="form-label">起点</label>
          <input class="form-wrapper" placeholder="请选择" />
        </div>
        <div class="form-item">
          <label class="form-label">终点</label>
          <input class="form-wrapper" placeholder="请选择" />
        </div>
        <div class="form-item">
          <label class="form-label">座位数</label>
          <picker :value='seatNum' mode="selector" :range="range" @change="change">
            <view class="picker">{{range[seatNum]}}</view>
          </picker>
        </div>
        <div class="form-item">
          <label class="form-label">出发时间</label>
           <detailPicker />
        </div>
        <div class="form-item">
          <label class="form-label">途径地</label>
          <input class="form-wrapper" placeholder="多个途径地用逗号隔开，非必填" />
        </div>
        <div class="form-item">
          <label class="form-label">价格</label>
          <input type="number" class="form-wrapper" placeholder="请输入" />
        </div>
        <div class="form-item">
          <label class="form-label">车辆信息</label>
          <input class="form-wrapper" placeholder="车牌号码，车身颜色" />
        </div>
        <div class="form-item">
          <label class="form-label">补充说明</label>
          <input class="form-wrapper" placeholder="价格面议，要求不抽烟" />
        </div>
        <button class="primary-btn">发布</button>
      </div>
    </div>
  </div>
</template>

<script>
  import detailPicker from '@/components/detailPicker'

  export default {
    data () {
      return {
        latitude: 0,
        longitude: 0,
        value: 0,
        date: new Date(),
        range: ['二座', '四座', '七座'],
        seatNum: 0
      }
    },
    components: {
      detailPicker
    },
    created () {
    },
    methods: {
      radioChange (event) {
        let value = event.mp.detail.value
        this.value = value
      },
      change (event) {
        let value = event.mp.detail.value
        this.seatNum = value
        console.log(value)
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

  .form-label, .form-wrapper, .radio-group label, .picker{
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
  .radio radio:checked + .text{
    color: #14bb0b
  }
  picker , .selector{
    width:100%;
  }

</style>
