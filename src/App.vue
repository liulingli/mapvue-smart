<template>
  <div class="page-main"></div>
</template>

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
  @import "../static/style/iconfont.less";

  page{
    width:100%;
    height:100%;
    box-sizing: border-box;
    border-bottom:1px solid #f3f3f3;
    overflow-y:hidden;
  }
  .page-main{
    width:100%;
    height:100%;
    overflow-y:auto;
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

</style>
