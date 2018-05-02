<template>
  <div class="page">
    <Header>
      <Title>Popup</Title>
      <header-button v-back-link>返回</header-button>
    </Header>

    <page-content>
      <p>
        <m-button @click.native="fullScreen">显示 ActionSheet</m-button>
      </p>
      <p>
        <m-button @click.native="halfScreen">自定义背景颜色</m-button>
      </p>
    </page-content>

    <actionsheet ref="actionsheet" :show="this.isshow" :json="menu1"></actionsheet>
    <actionsheet ref="actionsheet2" :show="this.isshow" :json="menu2"></actionsheet>

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
  import { Actionsheet } from '@/components/actionsheet'


  export default {
    components: {
      Header,
      Title,
      Actionsheet,
      'page-content': Content,
      'header-button': hButton,
      'm-button': Button
    },
    data: () => ({
      isshow: false,
      menu1: [
        {"name":"发布","color":"#04BE02"},
        {"name":"编辑","color":"#f60"},
        {"name":"删除","color":"#f6383a"}
      ],
      menu2: [
        {"name":"发布","color":"#fff","bgcolor":"#04BE02"},
        {"name":"编辑","color":"#fff","bgcolor":"#f60"},
        {"name":"删除","color":"#fff","bgcolor":"#f6383a"}
      ]
    }),
    name: 'Popup-name',
    methods: {
    halfScreen: function () {
        this.isshow = true
        this.$refs.actionsheet2.open()
      },
      fullScreen: function () {
        this.isshow = true
        this.$refs.actionsheet.open()
      },
      fn: function (){
        console.log(0)
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
