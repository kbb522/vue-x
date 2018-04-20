
<template>
  <button class="vux-swipeout-button"
          :class="{'vux-swipeout-button-del': type === 'del', 'vux-swipeout-button-warn': type === 'warn', 'vux-swipeout-button-default': type === 'default'}" :style="{width: `${width}px`, backgroundColor: backgroundColor}" @click="onButtonClick" type="button">
    <slot>{{text}}</slot>
  </button>
</template>

<script>
  export default {
    name: 'swipeout-button',
    props: {
      text: String,
      backgroundColor: String,
      type: String,
      width: {
        type: Number,
        default: 80
      }
    },
    methods: {
      onButtonClick () {
      if (this.$parent.$options._componentTag === 'SlideDelItem') {
        this.$parent.onItemClick(this.text)
      }
  }
  }
  }
</script>
