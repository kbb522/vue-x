<template>
<div>
    <overlay :show="mutableShow" :transparent="false" :click="overlayClick"></overlay>
    <transition name="loading-modal">
      <div :class="'loading-modal '+custom " v-if="mutableShow">
        <span :class="'loading loading-'+typeStyle"></span>
      </div>
    </transition>
</div>  
</template>

<script>
import { Overlay } from "@/components/overlay";
export default {
  props: {
    type: {
      type:String,
      default: 'white'
    },
    show: {
      // init status
      type: Boolean,
      default: false
    }
  },

  components: {
    Overlay
  },
  computed: {
    custom() {
      return this.typeStyle ==='white'? 'white' : 'custom'
    }
  },
  data() {
    return {
      mutableShow: this.show,
      typeStyle: 'white'
    };
  },
  methods: {
    onOk() {},
    overlayClick() {
      this.mutableShow = false;
    },
    open(type) {
      this.typeStyle = type ? type : 'white'
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