<template>
<div :class="
  'buttons-group' +
  ' button-' + type +
  ' button-' + size +
  (round ? ' button-round' : '') +
  (bordered ? ' button-bordered' : '')
">

  <slot></slot>
</div>
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
      default: 'medium'
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@import './button-group.less';
</style>
