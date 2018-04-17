<template>
<div class="page">
  <Header>
    <Title>SwiperPic</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>
      <swiper></swiper>
  </page-content>
</div>
</template>
<script>
import { Button } from "@/components/button";

import { Header, hButton, Title } from "@/components/header";

import Content from "@/components/content";

// ===========================================

import Swiper from "@/components/swiper"

export default {
  components: {
    Header,
    Title,
    "page-content": Content,
    "header-button": hButton,
    "m-button": Button,
    Swiper
  },
  name: 'SwiperPic',
  data: () => ({

  }),
  methods: {

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
