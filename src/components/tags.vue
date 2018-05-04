<template>
  <div class="tags" v-bind:style="{backgroundColor:color}" @click="$emit('tagsClick')">
      {{text}}
  </div>
</template>

<script>
  export default {
    props: ['text', 'color', 'tagsClick']
  }
</script>

<style>
  .tags {
    display: inline-block;
    padding: 6px 8px;
    color:#ffffff;
    font-size:16px;
  }
</style>

