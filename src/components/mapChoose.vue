<template>
  <div class="mapChoose">
    <div class="search">
      <div class="search-input" v-if="showSearch">
        <input type="text" placeholder="输入地址" @change="change"/>
        <i class="iconfont search-icon search-icon-left">&#xe65a;</i>
      </div>
      <div class="search-input noSearch" v-if="!showSearch">
        <span class="span-title"><i class="iconfont location-icon">&#xe668;</i>选择位置</span>
        <i class="iconfont search-icon search-icon-right" @click="changeSearch(true)">&#xe65a;</i>
      </div>
      <div class="search-button" v-if="!showSearch" @click="saveMap"><button>保存</button></div>
      <div class="cancel-button" v-if="showSearch" @click="changeSearch(false)"><button>取消</button></div>
    </div>
    <div class="location-list" v-if="showSearch">
       <radioGroup :data="locations" first="false" v-on:onChange="radioChange"></radioGroup>
    </div>
    <div class="map-content" v-if="!showSearch">
      <map id="myMap" :controls="controls" @tap="tap" @regionchange="regionChange" @begin="regionChange" @end="regionChange" :longitude="longitude" :latitude="latitude"></map>
    </div>
    <div class="choose-content" v-if="!showSearch">
      <radioGroup :data="poiOptions" first="true" v-on:onChange="chooseMap"></radioGroup>
    </div>
  </div>
</template>

<script>
  import { QQMapWX } from '../libs/qqmap-wx-jssdk.js'
  import radioGroup from '@/components/radioGroup'

  export default {
    name: 'mapChoose',
    props: ['mapChange'],
    components: {
      radioGroup
    },
    data () {
      return {
        curAddress: null,
        showSearch: false,
        latitude: 0,
        longitude: 0,
        circles: [],
        qqmapsdk: null,
        locations: [],
        poiOptions: [],
        controls: [{
          id: 1,
          iconPath: '../../static/images/location_icon.png',
          clickable: false
        }]
      }
    },
    created () {
      this.getLocation()
      let windowHeight = wx.getSystemInfoSync().windowHeight
      let windowWidth = wx.getSystemInfoSync().windowWidth
      this.controls[0].position = {
        left: windowWidth * 0.5 - 12,
        top: windowHeight * 0.4 * 0.5 - 24,
        width: 24,
        height: 24
      }

      /*
       * KEY:UX2BZ-K4ZKG-EYOQ3-I2NAZ-UAM45-UGBAZ
       */
      this.mapCtx = wx.createMapContext('myMap')

      this.qqmapsdk = new QQMapWX({
        key: 'UX2BZ-K4ZKG-EYOQ3-I2NAZ-UAM45-UGBAZ'
      })
    },
    methods: {
      changeSearch (type) {
        this.showSearch = type
      },
      getLocation () {
        wx.getLocation({
          type: 'wgs84',
          success: (res) => {
            console.log(res)
            let latitude = res.latitude  // 经度
            let longitude = res.longitude // 纬度
            this.latitude = latitude
            this.longitude = longitude
            this.getPositions(latitude, longitude)
          }
        })
      },
      getCenterLocation () {
        this.mapCtx.getCenterLocation({
          success: (res) => {
            this.getPositions(res.latitude, res.longitude)
            this.latitude = res.latitude
            this.longitude = res.longitude
          }
        })
      },
      getPositions (latitude, longitude) {
        this.qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          get_poi: 1, // 是否返回周边POI列表 1.返回；0不返回(默认)
          success: (res) => {
            console.log('getPositions', latitude, longitude, res.result.pois)
            this.poiOptions = res.result.pois
          }
        })
      },
      regionChange () {
        this.getCenterLocation()
      },
      tap () {
        console.log('tap')
      },
      moveToLocation () {
        this.mapCtx.moveToLocation()
      },
      change (event) {
        this.qqmapsdk.getSuggestion({
          keyword: event.mp.detail.value,
          policy: 0,
          success: (res) => {
            console.log(res)
            this.locations = res.data
          }
        })
      },
      radioChange (data) {
        console.log('radioChange', data)
        this.latitude = data.location.lat
        this.longitude = data.location.lng
        this.showSearch = false
        this.getPositions(data.location.lat, data.location.lng)
      },
      chooseMap (data) {
        // console.log('chooseMap', data)
        this.latitude = data.location.lat
        this.longitude = data.location.lng

        this.curAddress = data
      },
      saveMap () {
         // 保存地图
        this.$emit('mapChange', this.curAddress)
      }
    }
  }
</script>

<style scoped>
  .mapChoose {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    background:#ffffff;
    display: flex;
    flex-direction: column;
  }
  .location-list{
    flex:1;
    overflow-y:auto;
    padding: 10px;
  }
  .map-content{
    width: 100%;
    height: 40%;
    position:relative;
  }
  .map-content map {
    width: 100%;
    height: 100%;
  }
   .location-icon{
    color:#f8614a;
    font-size:18px;
     margin-right:6px;
  }

  input{
    display: inline-block;
    font-size:16px;
    padding: 4px;
    width:100%;
    padding-left:2px;
    vertical-align: middle;
  }
  button{
    display:inline-block;
    padding: 0 24px;
    font-size:16px;
    background:#f8614a;
    color:#ffffff;
    line-height:2.3;
    vertical-align: middle;
  }
  .search{
    display: flex;
    padding: 10px 10px;
    justify-content: center;
  }
  .search-input{
    flex:1;
    position:relative;
    padding-left:30px;
    border-bottom:1px solid #ddd;
    margin-right:10px;
    align-items:center;
    justify-content: center;
  }
  .span-title{
    font-size:16px;
  }
  .noSearch{
    border-bottom:none;
    padding-left:0;
  }
  .search-button{
    padding-left:10px;
  }
  .cancel-button button{
    background-color:gray;
  }
  .search-icon{
    position:absolute;
    top:6px;
    font-size:20px;
    color: gray;
  }
  .search-icon-right{
    right:4px;
  }
  .search-icon-left{
    left:4px;
  }
  .choose-content{
    overflow-y:auto;
    flex:1;
  }
</style>
