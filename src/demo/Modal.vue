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
      <m-button @click.stop.native="openConfrimModal">确认取消框</m-button>
    </p>
    <p>
      <m-button @click.stop.native="openPromptModal">提示输入框</m-button>
    </p>
    <p>
      <m-button @click.stop.native="openCustomModal">自定义框</m-button>
    </p>
  </page-content>

  <modal ref="modal" :show="this.customModal" @open="modalOpen">
    <div slot="title">窗口标题</div>
    <div slot="content">内容提示</div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button modal-button-cancel" @click="modalClose">取消</span>
      <span class="modal-button">微信</span>
      <span class="modal-button modal-button-bold">支付宝</span>
    </div>
  </modal>
  <alert ref="alert" :on-ok="alertfn"></alert>
  <confrim ref="confrim" :on-ok="alertfn"></confrim>
  <prompt ref="prompt" :on-ok="alertfn"  content="输入框测试"></prompt>
</div>
</template>
<script>
import { Button } from "@/components/button";

import { Header, hButton, Title } from "@/components/header";

import Content from "@/components/content";

import { Modal, Alert, Confrim, Prompt } from "@/components/modal";

export default {
  components: {
    Modal,
    Alert,
    Confrim,
    Prompt,
    Header,
    Title,
    "page-content": Content,
    "header-button": hButton,
    "m-button": Button
  },
  name: "Button",
  data: () => ({
    customModal: false
  }),
  methods: {
    alertfn: function() {
      alert("alertFN");
    },
    modalOpen: function() {},
    openConfrimModal() {
      this.$refs.confrim.open();
    },

    openCustomModal: function(event) {
      //this.customModal = true
      this.$refs.modal.open();
    },

    openAlertModal: function(event) {
      this.$refs.alert.open();
    },
    modalClose() {
      this.$refs.modal.close();
    },
    openPromptModal() {
      this.$refs.prompt.open();
    }
  }
};
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
