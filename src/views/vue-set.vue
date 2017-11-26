<template>
  <div>
    <div>
      <h2>测试Vue中的set</h2>
      <span>{{tarGetOb.text}}</span>
      <span>{{tarGetOb.name}}</span>
      <el-button @click="handleAdd">给对象新增属性</el-button>
    </div>
    <div>
      <h2>测试封装Vue长按事件</h2>
      <el-button @longtap="longTab">长按事件</el-button>
      <div v-if="tabShow">测试成功</div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tarGetOb: {
        id: 1,
        text: 1
      },
      tabShow: false
    }
  },
  methods: {
    longTab () {
      this.tabShow = true
      console.log(44)
      console.log(111111111)
    },
    handleAdd () {
      this.tarGetOb.name = "张三"
      // 给对象添加新的属性时；vue检查不到数据变化；用set来通知数据改变了
      this.$set(this.tarGetOb, name, 1)
      console.log(this.tarGetOb)
    }
  }
}
</script>

<style>

</style>

