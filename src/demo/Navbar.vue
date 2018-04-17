<template>
  <div class="page">
    <Header>
      <Title>Navbar</Title>
      <header-button v-back-link>返回</header-button>
    </Header>

    <page-content>
      <Navbar>
        <div name="页面一">
          页面一
        </div>
        <div name="页面二">
          页面二
        </div>
        <div name="页面三">
          页面三
        </div>
      </Navbar>

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
  import { Navbar } from '@/components/navbar'


  export default {
    components: {
      Header,
      Title,
      Navbar,
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
