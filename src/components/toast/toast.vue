<template>
    <div>
        <transition name="toast">
        <div class="toast" v-if="mutableShow">
            <div class="icon-wrap"><i :class="'icon iconfont icon-' + type"></i></div>
            <div class="text">{{text + ',' + m + '秒后自动关闭'}}</div>
        </div>
        </transition>
        <overlay ref='overlay' :transparent="true" :show="mutableShow" :click="close"></overlay>
    </div>
</template>

<script>
import { Overlay } from "../overlay";
export default {
  components: {
    Overlay
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "success"
    },
    onOpen: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      mutableShow: this.show,
      m: 3
    };
  },
  methods: {
    open() {
      this.mutableShow = true;
      this.onOpen();
      this.$emit("open");
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.close();
      }, this.m * 1000);
    },
    close() {
      this.mutableShow = false;
      this.$emit("close");
    }
  }
};
</script>

<style lang="less">
@import "./toast.less";
</style>