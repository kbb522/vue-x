<template>
  <Modal :show='show' ref="modal">
    <div slot="title">{{title}}</div>
    <div slot="content">
      {{content}}
    </div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button modal-button-cancel" @click="_onCancel()">{{cancelText}}</span>
      <span class="modal-button" @click="_onOk()">{{okText}}</span>
    </div>
  </Modal>
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
        default: '您确定吗？'
      },
      okText: {
        type: String,
        default: 'OK'
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      },
      onOk: {
        type: Function
      },
      onCancel: {
        type: Function
      }
    },
    methods: {
      open() {
        this.$refs.modal.open()
      },
      close() {
        this.$refs.modal.close()
      },
      _onOk () {
        if (this.onOk){
          this.onOk();
        }
        this.close()
      },
      _onCancel() {
        if (this.onCancel) {
          this.onCancel()
        }
        this.close()
      }
    }
  }
</script>

<style lang="less">
@import './Confirm.less';
</style>
