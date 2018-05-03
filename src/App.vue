<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache me by setStorageSync')
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

@font-face {
  font-family: 'iconfont';  /* project id 651753 */
  src: url('//at.alicdn.com/t/font_651753_v9x2u5zkbhvndn29.eot');
  src: url('//at.alicdn.com/t/font_651753_v9x2u5zkbhvndn29.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_651753_v9x2u5zkbhvndn29.woff') format('woff'),
  url('//at.alicdn.com/t/font_651753_v9x2u5zkbhvndn29.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_651753_v9x2u5zkbhvndn29.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:0.4rem;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
