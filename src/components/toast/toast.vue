<template>
  <div>
    <overlay :opacity="0" :show="mutableShow"></overlay>
    <transition name="fade">
      <div class="toast" v-if="mutableShow">
        <div :class="'t-box '+ dcls">
          <i class="t-icon"></i>
          <p>{{ dcontent }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {
    Overlay
    } from '@/components/overlay'
  export default {
    components: {
      Overlay
    },

    props: {
      show: { // init status
        type: Boolean,
        default: false
      },
      overlayClose: {
        type: Boolean,
        default: false
      },
      content: {
        type: String,
        default: ''
      },
      cls: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        mutableShow: this.show,
        dcontent: this.content,
        dcls: this.cls
      }
    },
  methods: {
    open() {
      this.mutableShow = true
      this.closeTime()
    },
    close() {
      this.mutableShow = false
    },
    closeTime() {
      let _this = this
      setTimeout(() => {
        _this.close()
      },2000)
    },
    overlayClick() {
      this.mutableShow = false
    }
  }
  }
</script>


<style lang="less">
  @import './Toast.less';
</style>
