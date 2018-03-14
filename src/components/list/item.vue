<template>
<li>
  <label :class="'item-inner ' + (link ? 'item-link' : '') +
    (!!checkbox ? 'label-checkbox ' : '') +
    (!!radio ? 'label-radio' : '')" v-if="!!checkbox || !!radio">
        <slot></slot>
        <i class="icon icon-form-checkbox" v-if="checkbox"></i>
        <i class="icon icon-form-radio" v-if="radio"></i>
        <i class="link-arrow iconfont icon-jiantouyou" v-if="link"></i>
  </label>
  <div :class="'item-inner ' + (link ? 'item-link' : '')" v-if="!checkbox && !radio">
    <slot></slot>
    <i class="link-arrow iconfont icon-jiantouyou" v-if="link"></i>
  </div>
</li>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      default: false
    },
    checkbox: {
      type: Boolean,
      default: false
    },
    radio: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>
