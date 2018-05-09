<template>
  <div class="mapChoose">
    <map @markertap="markertap" :longitude="longitude" :latitude="latitude"></map>
  </div>
</template>

<script>
    export default {
      name: 'mapChoose',
      props: [],
      data () {
        return {
          latitude: 0,
          longitude: 0,
          circles: []
        }
      },
      method: {
        getLocation () {
          wx.getLocation({
            type: 'wgs84',
            success: (res) => {
              let latitude = res.latitude  // 经度
              let longitude = res.longitude // 纬度
              console.log(res)
              this.latitude = latitude
              this.longitude = longitude
              this.circles = [{
                latitude: latitude,
                longitude: longitude,
                color: 'red',
                fillColor: 'red',
                radius: 10
              }]
            }
          })
        },
        markertap () {
        }
      }
    }
</script>

<style scoped>

</style>
