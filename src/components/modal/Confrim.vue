<template>
    <Model :show='show' ref='modal'>
        <div slot="title">{{title}}</div>
        <div slot="content">{{content}}</div>
        <div slot="buttons" class="modal-buttons">
            <span class="modal-button modal-button-cancel" @click="_onCancel()">{{cancelText}}</span>
            <span class="modal-button" @click="_onOk()">{{okText}}</span>
        </div>
    </Model>
</template>

<script>
import Model from "./Modal";

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Confirm"
    },
    content: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    onOk: {
      type: Function
    }
  },
  components: {
    Model
  },
  methods: {
    open() {
      this.$refs.modal.open();
      this.$emit("open", this);
    },
    close() {
      this.$refs.modal.close();
      this.$emit("close", this);
    },
    _onCancel() {
      this.close();
    },
    _onOk() {
      if (this.onOk) this.onOk();
      this.close();
    }
  }
};
</script>

<style lang="less">
@import "./Confrim.less";
</style>
