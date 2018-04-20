<template>
  <div class="page">
    <Header>
      <Title>Toptip</Title>
      <header-button v-back-link>返回</header-button>
    </Header>

    <page-content>
      <p>
        <m-button @click.native="showTip('显示成功','success')">显示成功</m-button>
      </p>
      <p>
        <m-button @click.native="showTip('显示失败','error')">显示失败</m-button>
      </p>
      <p>
        <m-button @click.native="showTip('显示警告','warning')">显示警告</m-button>
      </p>
    </page-content>

    <Toptip ref="toptip"></Toptip>



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
  import { Toptip } from '@/components/toptip'


  export default {
    components: {
      Header,
      Title,
      Toptip,
      'page-content': Content,
      'header-button': hButton,
      'm-button': Button
    },
    name: 'Toptip-name',
    methods: {
      showTip: function (s, t) {
        this.$refs.toptip.show(s, t)

      }
    }

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
