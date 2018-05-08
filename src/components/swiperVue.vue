<template>
  <div class="swiper">
    <swiper :indicator-dots="indicatorDots"
            :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item, key) in imgUrls" :key="key">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
  </div>

</template>

<script>
  export default {
    props: ['text', 'color', 'tagsClick'],
    data () {
      return {
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000
      }
    },
    method: {
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
    }

  }
</script>

<style>
  .swiper {
  }
</style>

