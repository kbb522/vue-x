<template>
<div class="page">
  <Header>
    <Title>Button-Group</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>

    <button-group>
      <m-button :active="true">按钮组</m-button>
      <m-button>按钮组</m-button>
      <m-button>按钮组</m-button>
    </button-group>

    <button-group size="small">
      <m-button :active="true">按钮组</m-button>
      <m-button>按钮组</m-button>
      <m-button>按钮组</m-button>
    </button-group>

    <button-group size="lager">
      <m-button :active="true">按钮组</m-button>
      <m-button>按钮组</m-button>
      <m-button>按钮组</m-button>
    </button-group>

    <button-group :round="true">
      <m-button :active="true">按钮组</m-button>
      <m-button>按钮组</m-button>
      <m-button>按钮组</m-button>
    </button-group>

    <button-group :round="true" size="small">
      <m-button :active="true">按钮组</m-button>
      <m-button>按钮组</m-button>
      <m-button>按钮组</m-button>
    </button-group>

    <button-group :round="true" size="lager">
      <m-button :active="true">按钮组</m-button>
      <m-button>按钮组</m-button>
      <m-button>按钮组</m-button>
    </button-group>

    <button-group :bordered="true" @click="fn">
      <m-button :active="true">按钮组</m-button>
      <m-button>按钮组</m-button>
      <m-button>按钮组</m-button>
    </button-group>

    <button-group  size="small" :bordered="true">
      <m-button :active="true">按钮组</m-button>
      <m-button>按钮组</m-button>
      <m-button>按钮组</m-button>
    </button-group>

    <button-group size="lager" :bordered="true">
      <m-button :active="true">按钮组</m-button>
      <m-button>按钮组</m-button>
      <m-button>按钮组</m-button>
    </button-group>
  </page-content>
</div>
</template>
<script>


import {
  Header,
  hButton,
  Title
} from '@/components/header'

import {
  ButtonGroup,
  Button
} from '@/components/button'

import Content from '@/components/content'

export default {
  methond: {
    fn: () => {
      alert();
    }
  },
  components: {
    'button-group': ButtonGroup,
    Header,
    Title,
    'page-content': Content,
    'header-button': hButton,
    'm-button': Button
  },
  name: 'ButtonGroup',
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
