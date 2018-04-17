<template>
  <div class="page">
    <Header>
      <Title>Navbar</Title>
      <header-button v-back-link>返回</header-button>
    </Header>

    <page-content>
      <Navbar>
        123
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
  import Navbar from '@/components/navbar'


  export default {
    components: {
      Header,
      Title,
      Navbar,
      'page-content': Content,
      'header-button': hButton
    },
    props: {
      nTabnum: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        isshow: false,
        tabnum: this.nTabnum
      }
    },
    name: 'navbar-name',
    methods: {
      retabnum: function (n) {
        console.log(n)
        this.tabnum = n
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
  .a1{color:#f00;}
  .b1{display:block;}
  .b2{display:none;}
  .navbar-tab{display:-webkit-box;background-color:#f4f4f4;
    a{display:block;text-align:center;padding:5px;-webkit-box-flex:1;}
    .a1{transition:all .2s ease;background-color:#ccc;}
  }
}
</style>
