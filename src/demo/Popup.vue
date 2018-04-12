<template>
  <div class="page">
    <Header>
      <Title>Popup</Title>
      <header-button v-back-link>返回</header-button>
    </Header>

    <page-content>
      <p>
        <m-button @click.native="fullScreen">显示全屏</m-button>
      </p>
      <p>
        <m-button @click.native="halfScreen">显示半屏</m-button>
      </p>
    </page-content>

    <popup ref="popupFull" :show="this.isshow">
      <div slot="content">
        全屏内容提示: <br />
        isclass = popup-show-full 全屏显示，默认全屏<br />
        <input type="button" value="close" @click="fullClose()" />
      </div>
    </popup>
    <popup ref="popupHalf" :show="this.isshow" iclass="popup-show-half">
      <div slot="content">
        半屏内容提示: <br />
        isclass = popup-show-half 半屏显示<br />
        <input type="button" value="close" @click="halfClose()" />
      </div>
    </popup>

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
  import { Popup } from '@/components/popup'


  export default {
    components: {
      Header,
      Title,
      Popup,
      'page-content': Content,
      'header-button': hButton,
      'm-button': Button
    },
    data: () => ({
      isshow: false
    }),
    name: 'Popup-name',
    methods: {
      fullScreen: function () {
        this.isshow = true
        this.$refs.popupFull.open()
      },
      halfScreen: function () {
        this.isshow = true
        this.$refs.popupHalf.open()
      },
      fullClose: function () {
        this.isshow = false
        this.$refs.popupFull.close()
      },
      halfClose: function () {
        this.isshow = false
        this.$refs.popupHalf.close()
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
