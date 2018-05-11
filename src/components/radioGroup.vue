<template>
  <div class="radio-group">
     <div class="radio-item" v-for="(item, index) in data" :key="index" @click="click(item,index)">
       <div class="radio-content">
         <div class="radio-title">{{item.title}}</div>
         <div class="radio-address">{{item.address}}</div>
       </div>
       <div class="flex-radio">
         <i class="iconfont radio-icon" v-if="index == curIndex">&#xe7e9;</i>
       </div>
     </div>
  </div>
</template>

<script>
  export default {
    name: 'radioGroup',
    props: ['data', 'onChange', 'first'],
    data () {
      return {
        curIndex: 0
      }
    },
    watch: {
      'data': function (newData, oldData) {
        this.curIndex = 0
        if (this.first === 'true') {
          this.$emit('onChange', newData[0])
        }
      }
    },
    methods: {
      click (item, index) {
        this.curIndex = index
        this.$emit('onChange', item)
      }
    }
  }
</script>

<style scoped>
  .radio-group{
    width:100%;
    font-size:18px;
  }
  .radio-item{
    padding: 8px;
    border-bottom:1px solid #ddd;
    display: flex;
    justify-items: center;
    justify-content: center;
  }
  .radio-title,.radio-address{
    /*white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;*/
    line-height:1.4;
  }
  .radio-address{
    color:gray;
    font-size:16px;
  }

  .radio-content{
    flex: 1;
  }

  .flex-radio{
    width:40px;
    text-align: center;
    align-items:center;
    justify-content: center;
    display: flex;
  }

  .radio-icon{
    font-size:18px;
    color:#f8614a;
  }

</style>
