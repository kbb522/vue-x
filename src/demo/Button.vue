<template>
<div class="page">
  <Header>
    <Title>Button</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>
    <p><m-button>确定 default</m-button></p>
    <p><m-button size="large">确定 large</m-button></p>
    <p><m-button size="small">确定 small</m-button></p>
    <p><m-button type="danger">删除 danger default</m-button></p>
    <p><m-button type="danger" size="large">删除 danger large</m-button></p>
    <p><m-button type="danger" size="small">删除 danger small</m-button></p>
    <p><m-button type="light">按钮 light default</m-button></p>
    <p><m-button type="light" size="large">删除 light large</m-button></p>
    <p><m-button type="light" size="small">删除 light small</m-button></p>
    <p><m-button type="light" :round="true">按钮 light default</m-button></p>
    <p><m-button type="light" :round="true" size="large">删除 light large</m-button></p>
    <p><m-button type="light" :round="true" size="small">删除 light small</m-button></p>
    <p><m-button :round="true">按钮 round default</m-button></p>
    <p><m-button :round="true" size="large">按钮 round default</m-button></p>
    <p><m-button :round="true" size="small">按钮 round default</m-button></p>
    <p><m-button :round="true" :disabled="true">按钮 round default</m-button></p>
    <p><m-button :round="true" size="large" :disabled="true">按钮 round default</m-button></p>
    <p><m-button size="small" :disabled="true">按钮 round default</m-button></p>


  </page-content>
</div>
</template>
<script>
import {Button} from '@/components/button'

import {
  Header,
  hButton,
  Title
} from '@/components/header'

import Content from '@/components/content'

export default {
  components: {
    Header,
    Title,
    'page-content': Content,
    'header-button': hButton,
    'm-button': Button
  },
  name: 'Button',
  data: () => ({

  })
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
