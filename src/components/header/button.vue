<template>
<a :class="'button ' + (left ? 'left' : 'right')">
  <slot></slot>
</a>
</template>

<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: true
    },
    edge: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
@import './button.less';
</style>
