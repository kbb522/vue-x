<template>
<div class="page">
  <Header>
    <Title>自动关闭Toast窗口</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>
    <!--
    <p>
      <m-button @click.stop.native="openToast">测试Toast</m-button>
    </p>
    -->
    <p>
      <m-button @click.stop.native="openToast('tsuccess')">显示 Toast 成功</m-button>
    </p>
    <p>
      <m-button @click.stop.native="openToast('tcannel')">显示 Toast 取消</m-button>
    </p>
    <p>
      <m-button @click.stop.native="openToast('twarn')">显示 Toast 禁止</m-button>
    </p>
    <p>
      <m-button @click.stop.native="openToast('ttext')">显示 Toast 纯文本</m-button>
    </p>
    <p>
      <m-button @click.stop.native="openToast('tloading')">显示 loading</m-button>
    </p>
<!--
    <toast ref="toast" type="xiujia" text="测试文字 "></toast>
-->
    <Toast ref="tsuccess" :show="isshow" content="操作成功" cls="t-success"></Toast>
    <Toast ref="tcannel" :show="isshow" content="取消操作" cls="t-cannel"></Toast>
    <Toast ref="twarn" :show="isshow" content="禁止操作" cls="t-warn"></Toast>
    <Toast ref="ttext" :show="isshow" content="纯文本" cls="t-text"></Toast>
    <Toast ref="tloading" :show="isshow" content="数据加载中" cls="t-loading"></Toast>
  </page-content>
</div>
</template>
<script>
import { Button } from "@/components/button";

import { Header, hButton, Title } from "@/components/header";

import Content from "@/components/content";
import {
  Toast
  } from '@/components/toast'
/*
import toast from "@/components/toast";
*/
export default {
  components: {
    Toast,
    Header,
    Title,
    "page-content": Content,
    "header-button": hButton,
    "m-button": Button
  },
  name: "Button",
  data: () => ({
    customModal: false,
    isshow: false
  }),
  methods: {
    alertfn: function() {
      alert("alertFN");
    },
  /*
    openToast() {
      this.$refs.toast.open();
    }
    */
    openToast: function (s) {
      this.$refs[s].open()
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
