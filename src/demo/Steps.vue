<template>

  <steps>
    <Header>
      <Title>Step</Title>
      <header-button v-back-link>返回</header-button>
    </Header>
    <div :class="'steps-box steps-box-'+inum">
      <div class="steps steps1">
        <span>1</span><br />
        步骤一
      </div>
      <div class="steps steps2">
        <span>2</span><br />
        步骤二
      </div>
      <div class="steps steps3">
        <span>3</span><br />
        步骤三
      </div>
    </div>
    <input type="button" value="下一步" @click="count()" />
  </steps>

</template>
<script>
  import {
    Header,
    hButton,
    Title
    } from '@/components/header'
  import Steps from '@/components/steps'
  export default {
    components: {
      Steps,
      Header,
      Title,
      'header-button': hButton,
    },
    props: {
      num: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        inum: this.num
      }
    },
    methods: {
      count: function () {
        this.inum += 1
        if (this.inum > 3) {
          this.inum = 0
        }
      }
    }
  }
</script>
<style lang="less" scoped>
.steps-box{
  display:-webkit-box;position:relative;margin-top:80px;
  .steps{width:100%;-webkit-box-flex:1;text-align:center;position:relative;z-index:2;
    span{width:30px;height:30px;line-height:30px;text-align:center;border-radius:100%;display:inline-block;background-color:#eee;}
  }
  .steps1{text-align:left;}
  .steps3{text-align:right;}
  &:before,&:after{content:'';height:2px;position:absolute;left:0;right:0;top:13px;}
  &:before{background-color:#eee;}
  &:after{right:100%;background-color:#f00;}
  &.steps-box-1,&.steps-box-2,&.steps-box-3{
    .steps1 span{color:#fff;background-color:green;}
  }
  &.steps-box-2,&.steps-box-3{
    .steps2 span{color:#fff;background-color:green;}
    &:after{right:50%;}
  }
  &.steps-box-3{
    .steps3 span{color:#fff;background-color:green;}
    &:after{right:0;}
  }

}
</style>
