<template>
  <div class="page">
    <Header>
      <Title>Count</Title>
      <header-button v-back-link>返回</header-button>
    </Header>

    <page-content>
      <Count :num="2">
        衣服
      </Count>
      <Count :num="3">
        裤子
      </Count>

    </page-content>



  </div>
</template>
<script>

  import {
    Header,
    hButton,
    Title
    } from '@/components/header'

  import Content from '@/components/content'
  import { Count } from '@/components/count'


  export default {
    components: {
      Header,
      Title,
      Count,
      'page-content': Content,
      'header-button': hButton
    },
    name: 'navbar-name'
  }
</script>
<style lang="less" scoped>
.page-content{
  padding:10px;
  p{
    margin-bottom:10px;
  }
}
</style>
