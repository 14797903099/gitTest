<template>
  <div>
      <slot name="header"></slot>
      <p>{{content}}</p>
      <slot name="main"></slot>
      <p>哈哈</p>
      <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  props: {
    content: {
        type: String,
        default: '我是内容',
        required: true
    }
  }
}
</script>
