<template>
<div>
    <overlay :show="mutableShow" :transparent="true" :click="overlayClick"></overlay>
    <transition name="loading-modal">
      <div class="loading-modal" v-if="mutableShow">
        <span class="loading loading-white"></span>
      </div>
    </transition>
</div>  
</template>

<script>
import { Overlay } from "@/components/overlay";
export default {
  props: {
    show: {
      // init status
      type: Boolean,
      default: false
    }
  },
  components: {
    Overlay
  },
  data() {
    return {
      mutableShow: this.show
    };
  },
  methods: {
    onOk() {},
    overlayClick() {
      this.mutableShow = false;
    },
    open() {
      this.mutableShow = true
      this.$emit('open')
    },
    close() {
      this.mutableShow = false
      this.$emit('close')
    }
  }
};
</script>

<style lang="less">
@import "./loading.less";
</style>