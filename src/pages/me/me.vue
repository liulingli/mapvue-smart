<template>
  <div >
    <listView v-for="(item, index) in menus1" :menu="(item)" :key="index"></listView>
  </div>
</template>

<script>
import listView from '@/components/listView'

export default {
  components: {
    listView
  },

  data () {
    return {
      menus1: [
        {text: '拼车记录', icon: `&#xe620;`},
        {text: '个人信息', icon: `&#xe620;`},
        {text: '邀请好友', icon: `&#xe620;`}
      ],
      menus2: []
    }
  },

  created () {
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
