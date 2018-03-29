<template>
<Modal :show='show' ref="modal">
  <div slot="title">{{title}}</div>
  <div slot="content">
    {{content}}
    <div>
      <input needClick v-focus autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" class="modal-input" type="text" v-model="mutableInput" />
    </div>
  </div>
  <div slot="buttons" class="modal-buttons">
    <span class="modal-button modal-button-cancel" v-on:click="_onCancel()">{{cancelText}}</span>
    <span class="modal-button" :class="{ 'modal-button-disabled' : !mutableInput}" v-on:click="_onOk()">{{okText}}</span>
  </div>
</Modal>
</template>

<script>
import Modal from "./Modal";

export default {
  props: {
    title: {
      type: String,
      default: "提示框"
    },
    content: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    },
    input: {
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
    },
    onCancel: {
      type: Function
    }
  },
  data() {
    return {
      mutableInput: this.input
    };
  },
  components: {
    Modal
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
    _onOk() {
      if (!this.mutableInput) return false;
      if (this.onOk) {
        this.onOk(this.mutableInput);
      }
      this.close();
    },
    _onCancel() {
      if (this.onCancel) {
        this.onCancel();
      }
      this.close();
    }
  }
};
</script>

<style lang="less">
@import "./Prompt.less";
</style>
