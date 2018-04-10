<template>
  <div class="page">
    <Header>
      <Title>slider</Title>
      <header-button v-back-link>返回</header-button>
    </Header>

    <page-content>
      <Slider :isvalue="true" :per="20"></Slider>

    </page-content>

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
  import { Slider } from '@/components/slider'


  export default {
    components: {
      Header,
      Title,
      Slider,
      'page-content': Content,
      'header-button': hButton,
      'm-button': Button
    },
    name: 'Sliders',
    data: () => ({

    }),
    methods:
  {

  }
  }
</script>
<style lang="less" scoped>
.page-content{
  padding:10px;
  p {
    padding: 5px;
  }

}
</style>
