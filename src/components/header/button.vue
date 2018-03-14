<template>
<a :class="'button ' + (left ? 'left' : 'right')">
  <i class="iconfont icon-fanhui" v-if="icon"></i>
  <slot></slot>

</a>
</template>

<script>
export default {
  props: {
    icon: {
      type: Boolean,
      default: true
    },
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
