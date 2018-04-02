<template>
<div class="page">
  <Header>
    <Title>自动关闭Toast窗口</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>
    <p>
      <m-button @click.stop.native="openToast">测试Toast</m-button>
    </p>
    <toast ref="toast" type="xiujia" text="测试文字 "></toast>
  </page-content>
</div>
</template>
<script>
import { Button } from "@/components/button";

import { Header, hButton, Title } from "@/components/header";

import Content from "@/components/content";

import toast from "@/components/toast";

export default {
  components: {
    toast,
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
    openToast() {
      this.$refs.toast.open();
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
