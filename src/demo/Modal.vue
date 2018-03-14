<template>
<div class="page">
  <Header>
    <Title>模态窗口</Title>
    <header-button v-back-link>返回</header-button>
  </Header>

  <page-content>
    <p>
      <m-button @click.stop.native="openAlertModal">提示框</m-button>
    </p>
    <p>
      <m-button>确认取消框</m-button>
    </p>
    <p>
      <m-button>提示输入框</m-button>
    </p>
    <p>
      <m-button @click.native="openCustomModal">自定义框</m-button>
    </p>
  </page-content>

  <modal ref="modal" :show="this.customModal" @open="modalOpen">
    <div slot="title">窗口标题</div>
    <div slot="content">内容提示</div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button modal-button-cancel">取消</span>
      <span class="modal-button">微信</span>
      <span class="modal-button modal-button-bold">支付宝</span>
    </div>
  </modal>

  <alert ref="alert" :on-ok="alertfn"></alert>
</div>
</template>
<script>
import {
  Button
} from '@/components/button'

import {
  Header,
  hButton,
  Title
} from '@/components/header'

import Content from '@/components/content'

import {
  Modal,
  Alert
} from '@/components/modal'

export default {
  components: {
    Modal,
    Alert,
    Header,
    Title,
    'page-content': Content,
    'header-button': hButton,
    'm-button': Button
  },
  name: 'Button',
  data: () => ({
    customModal: false
  }),
  methods: {

    alertfn: function() {
      alert('alertFN')
    },
    modalOpen: function() {

    },

    openCustomModal: function(event) {
      //this.customModal = true
      this.$refs.modal.open()
    },

    openAlertModal: function(event) {
      this.$refs.alert.open()
    }
  }
}
</script>
<style lang="less" scoped>
.page-content {
    font-size: 12px;
    padding: 10px;
    p {
        padding: 5px;
    }
}
</style>
