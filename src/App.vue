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

*{
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
  src: url('//at.alicdn.com/t/font_651753_o518ctgm4qb0529.eot');
  src: url('//at.alicdn.com/t/font_651753_o518ctgm4qb0529.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_651753_o518ctgm4qb0529.woff') format('woff'),
  url('//at.alicdn.com/t/font_651753_o518ctgm4qb0529.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_651753_o518ctgm4qb0529.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:0.4rem;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.icon-qunfengfabushangxian:before { content: "\e763"; }

.icon-lishijilu-copy:before { content: "\e620"; }

.icon-weibiaoti1:before { content: "\e600"; }

.icon-yijianfankui01:before { content: "\e62e"; }

.icon-faxianfill:before { content: "\e68d"; }

.icon-ai-mark:before { content: "\e667"; }

.icon-yaoqing:before { content: "\e682"; }

.icon-faxian1:before { content: "\e603"; }

.icon-fl-renyuan:before { content: "\e625"; }

.icon-weibiaoti-_huabanfuben:before { content: "\e61a"; }

.icon-ICONbiaozhun_fuzhi-:before { content: "\e60b"; }

</style>
