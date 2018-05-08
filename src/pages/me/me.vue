<template>
  <div class="page-main">
    <div class="top-user-info">
      <div class="user-info">
        <div class="user-headimg">
          <img src="https://pic1.zhimg.com/v2-14009368d4557889cd12ed501fa7e711_is.jpg" />
        </div>
        <div class="user-name">小六子不伶俐</div>
      </div>
    </div>
    <div class="menu-list">
      <listView v-for="(item, index) in menus1" :menu="(item)" :key="index" v-on:emitmyEvent="menuClick"></listView>
    </div>
    <div class="menu-list">
      <listView v-for="(item, index) in menus2" :menu="(item)" :key="index" v-on:emitmyEvent="menuClick"></listView>
    </div>
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
        {text: '拼车记录', iconClass: 'icon-lishijilu-copy', color: '#03c8ac', url: '1'},
        {text: '个人信息', iconClass: 'icon-fl-renyuan', color: '#2daae4', url: '2'},
        {text: '邀请好友', iconClass: 'icon-yaoqing', color: '#fb656e', url: '3'}
      ],
      menus2: [
        {text: '意见反馈', iconClass: 'icon-yijianfankui01', color: '#af71f8', url: '4'},
        {text: '用户指南', iconClass: 'icon-faxian1', color: '#01c8e5', url: '5'},
        {text: '我的收藏', iconClass: 'icon-ai-mark', color: '#feb500', url: '6'}
      ]
    }
  },

  created () {
  },
  methods: {
    menuClick: function (url) {
      console.log('menuClick', url)
    }
  }

}
</script>

<style>
  .top-user-info{
    background:#f85f4d;
    padding: 30px 0;
    text-align: center;
  }
  .user-info{
    display: inline-block;
    text-align: center;
  }
  .user-headimg{
    display: inline-block;
    width:50px;
    height:50px;
    border-radius:100%;
    overflow:hidden;
  }
  .user-headimg img{
    width:100%;
    height:100%;
  }
  .user-name{
    font-size:16px;
    color:#ffffff;
    padding-top:6px;
  }
  .menu-list {
    border-top:10px solid #f3f3f3;
  }

</style>
