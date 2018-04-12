<template>
  <div class="page">
    <Header>
      <Title>Navbar</Title>
      <header-button v-back-link>返回</header-button>
    </Header>

    <page-content>
      <Navbar>
        <div slot="tab" class="navbar-tab">
          <a @click="retabnum(1)" href="javascript:;" :class="tabnum==1 ? 'a1' : 'a2'">选项一</a>
          <a @click="retabnum(2)" href="javascript:;" :class="tabnum==2 ? 'a1' : 'a2'">选项二</a>
          <a @click="retabnum(3)" href="javascript:;" :class="tabnum==3 ? 'a1' : 'a2'">选项三</a>
        </div>
        <div slot="bd" class="navbar-bd">
          <div id="tab1" :class="tabnum==1 ? 'b1' : 'b2'">页面一</div>
          <div id="tab2" :class="tabnum==2 ? 'b1' : 'b2'">页面二</div>
          <div id="tab3" :class="tabnum==3 ? 'b1' : 'b2'">页面三</div>
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
