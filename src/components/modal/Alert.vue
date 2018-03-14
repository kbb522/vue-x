<template>
<modal :show='show' ref="modal">
  <div slot="title">{{title}}</div>
  <div slot="content">{{content}}</div>
  <div slot="buttons" class="modal-buttons">
    <span class="modal-button" @click="_onClick">{{okText}}</span>
  </div>
</modal>
</template>
<script>
import
Modal
from './Modal'

export default {
  components: {
    Modal
  },



  props: {
    show: { // init status
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示框'
    },
    content: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: '确定'
    },
    onOk: {
      type: Function
    }
  },


  methods: {
    open() {
      this.$refs.modal.open()
      this.$emit('open', this)
    },
    close() {
      this.$refs.modal.close()
      this.$emit('close', this)
    },
    _onClick() {
      if (this.onOk) {
        this.onOk()
      }
      this.close()
    }
  }
}
</script>


<style lang="less">
@import './Alert.less';
</style>
