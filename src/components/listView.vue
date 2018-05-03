<template>
  <div>
    <div class="list-view">
      <div class="flex-item"><i class="iconfont">{{menu.icon}}</i><span>{{menu.text}}</span></div>
      <div class="flex-basic"><i class="iconfont">&#xe60b;</i></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['menu']
  }
</script>

<style>
  .card {
    padding: 10px;
  }
</style>
