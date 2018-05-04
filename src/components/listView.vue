<template>
  <div class="list-view-wrap" @click="$emit('emitmyEvent',menu.url)">
    <div class="list-view">
      <div class="flex-item">
        <view class="iconfont" :class="menu.iconClass" v-bind:style="{color:menu.color}"></view>
        <span>{{menu.text}}</span>
      </div>
      <div class="flex-basic"><i class="iconfont">&#xe60b;</i></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['menu', 'emitmyEvent'],

    methods: {
    }
  }
</script>

<style>
  .list-view-wrap{
    width:100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .list-view {
    width:100%;
    display: flex;
    border-bottom: 1px solid #f3f3f3;
    padding:10px 0;
  }
  .flex-item{
    flex:1;
  }
  .flex-item .iconfont, .flex-item span{
    display: inline-block;
    font-size:16px;
    vertical-align: middle;
  }
  .flex-item span{
    margin-left:15px;
    display: inline-block;
  }
  .flex-basic{
  }
  .flex-basic .iconfont{
    font-size:16px;
    color:#cccccc;
    vertical-align: middle;
    margin-top:8px;
  }
</style>
