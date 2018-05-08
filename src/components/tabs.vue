<template>
  <div class="tabs">
    <div class="tabs-menu">
      <div v-for="(menu, key) in menus" :key="key">{{menu}}</div>
    </div>
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item, key) in dataSource" :key="key">
        <swiper-item>
          <slot></slot>
        </swiper-item>
      </block>
    </swiper>
  </div>

</template>

<script>
  export default {
    props: ['dataSource', 'menus', 'children'],
    data () {
      return {
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000
      }
    },
    mounted () {
      let slot = this.$slots.default
      for (let i = 0; i < slot.length; i++) {
        console.log(slot[i].elm)
      }
      console.log('slot', slot)
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
  .tabs {
    padding: 6px 8px;
    color:#3c3c3c;
    font-size:16px;
  }
  swiper{
    height:500px;
  }
</style>

