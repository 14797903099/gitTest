<template>
  <div>
      <div class="title">
        <span></span>
        {{title}}
      </div>
  </div>   
</template>
<script>
export default {
  name: 'ZYB-TITLE',
  props: {
    title: {
      type:String,
      define:'',
      require: true
    }
  }
}
</script>
<style scoped>
.title{
  margin: 20px 0;
  font-size: 16px;
}

.title span{
  display: inline-block;  
  vertical-align: middle;
  width:10px;
  height:14px;
  background: #179FF4;
  text-align: left;
  font-size: 23px;
}
</style>
