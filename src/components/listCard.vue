<template>
   <div class="list-card-wrap">
      <div class="list-card">
         <div class="list-card-body">
           <ul class="list">
             <li><i class="point green"></i>{{data.startPoint}}</li>
             <li><i class="point red"></i>{{data.endPoint}}</li>
             <li><i class="point"></i>{{data.boardingTime}}{{people}}人</li>
             <li><i class="point"></i>出行要求：{{data.remark}}</li>
           </ul>
           <div v-if="data.type == 1" class="tags-content">
             <tags text="附近乘客" color="#f8614a"></tags>
           </div>
           <div v-if="data.type == 2" class="tags-content">
             <tags text="附近车主" color="#04ca0a"></tags>
           </div>
         </div>
         <div class="list-card-footer">
           <div @click="$emit('listClick',data.phone)" class="button">联系他</div>
         </div>
      </div>
   </div>
</template>

<script>
  import tags from '@/components/tags'

  export default {
    props: ['data', 'listClick'],
    data () {
      return {
      }
    },
    components: {
      tags
    },
    mounted () {
    }
  }
</script>

<style scoped>
  .list-card-wrap{
    padding: 10px 10px;
    font-size:16px;
  }
  .list-card{
    padding: 15px 10px;
    box-shadow: 0 0 5px 2px rgba(153, 153, 153, .2);
    border-radius:4px;
  }
  .list-card-body{
    position:relative;
    border-bottom:1px solid #f3f3f3;
    padding-bottom: 10px;
  }
  .list li{
    line-height:2;
  }
  .point{
    display: inline-block;
    width:6px;
    height:6px;
    border-radius:100%;
    vertical-align: middle;
    margin-right:6px;
    background: #ffffff;
  }
  .point.red{
    background: #f37374;
  }
  .point.green{
    background: #58d44f;
  }
 .tags-content{
   position: absolute;
   top:0;
   right:0;
 }
  .list-card-footer{
    padding: 15px 0 0;
    text-align: right;
  }
  .list-card-footer .button{
    display: inline-block;
    padding: 4px 20px;
    color: #f8614a;
    border:1px solid #f8614a;
  }
</style>
