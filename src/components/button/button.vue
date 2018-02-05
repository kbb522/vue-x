<template>
<a href="javascript: void(0);" :class="
  'button' +
  ' button-' + type +
  ' button-' + size +
  (round ? ' button-round' : '') +
  (bordered ? ' button-bordered' : '') +
  (active ? ' active' : '') +
  (disabled ? ' disabled' : '')
  ">

  <slot></slot>
</a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    round: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style lang="less">
@import './button.less';
</style>
