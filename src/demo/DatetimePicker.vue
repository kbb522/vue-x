<template>
  <div class="page">
    <Header>
      <Title>Popup</Title>
      <header-button v-back-link>返回</header-button>
    </Header>

    <page-content>
      <div style="background:#000;"><input v-model="datetime" type="text" readonly @click="halfScreen" /></div>
    </page-content>

    <DatetimePicker :time="false" :dtime="datetime" ref="popupHalf" :show="this.isshow" iclass="dt-picker-show-half"></DatetimePicker>

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
  import { DatetimePicker } from '@/components/DatetimePicker'


  export default {
    components: {
      Header,
      Title,
      DatetimePicker,
      'page-content': Content,
      'header-button': hButton,
      'm-button': Button
    },
    data: () => ({
      isshow: false,
      datetime: '2018-04-28'
    }),
    name: 'Datetime-Picker',
    methods: {
      halfScreen: function () {
        this.isshow = true
        this.$refs.popupHalf.open()
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
