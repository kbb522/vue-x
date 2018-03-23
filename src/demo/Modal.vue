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
      <m-button @click.stop.native="openConfirmModal">确认取消框</m-button>
    </p>
    <p>
      <m-button @click.stop.native="openPromptModal">提示输入框</m-button>
    </p>
    <p>
      <m-button @click.native="openCustomModal">自定义框</m-button>
    </p>
  </page-content>

  <modal ref="modal" :show="this.customModal" @open="modalOpen">
    <div slot="title">窗口标题</div>
    <div slot="content">内容提示</div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button modal-button-cancel" @click="closeCustomModal();">取消</span>
      <span class="modal-button" @click="selWx()">微信</span>
      <span class="modal-button modal-button-bold" @click="selZfb()">支付宝</span>
    </div>
  </modal>

  <alert ref="alertwx" title="提示" content="您选择了微信"></alert>
  <alert ref="alertzfb" title="提示" content="您选择了支付宝"></alert>

  <alert ref="alert" :on-ok="alertfn"></alert>
  <confirm ref="confirm" :on-ok="confirmfn"></confirm>
  <prompt ref="prompt" :on-ok="promptfn"></prompt>
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
  Alert,
  Confirm,
  Prompt
} from '@/components/modal'

export default {
  components: {
    Modal,
    Alert,
    Confirm,
    Prompt,
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
    closeCustomModal: function(){
      this.$refs.modal.close()
    },
    openCustomModal: function(event) {
      //this.customModal = true
      this.$refs.modal.open()
    },
  selWx: function(){
    this.$refs.modal.close()
    this.$refs.alertwx.open()
  },
  selZfb: function(){
    this.$refs.modal.close()
    this.$refs.alertzfb.open()
  },

    openAlertModal: function(event) {
      this.$refs.alert.open()
    },
    confirmfn: function() {
      alert('confirmFN')
    },
    openConfirmModal: function(event) {
      this.$refs.confirm.open()
    },
    promptfn: function(value){
      alert(value)
    },
    openPromptModal: function(event){
      this.$refs.prompt.open()
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
