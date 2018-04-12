<template>
  <div>
    <overlay :show="isshow" :click="overlayClick"></overlay>
    <transition name="modal">
      <div :class="isshow ? 'popup '+isclass : 'popup'">
        <div class="popup-content">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { Overlay } from '@/components/overlay'
  export default {
    components: {
      Overlay
    },
    props: {
      iclass: {
        type: String,
        default: 'popup-show-full'
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        isshow: this.show,
        isclass: this.iclass
      }
    },
    methods: {
      open() {
        this.isshow = true
      },
      close() {
        this.isshow = false
      },
      overlayClick() {
        this.isshow = false
      }
    }
  }
</script>


<style lang="less">
  @import './Popup.less';
</style>
