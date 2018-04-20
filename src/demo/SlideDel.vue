<template>
  <div class="page">
    <Header>
      <Title>SlideDel</Title>
      <header-button v-back-link>返回</header-button>
    </Header>

    <page-content>
      <SlideDel class="vux-1px-tb">
        <SlideDelItem transition-mode="follow" v-for="i in 3" :key="i">
          <div slot="right-menu">
            <SlideDelBtn type="del">删除</SlideDelBtn>
          </div>
          <div slot="content" :class="{'vux-1px-b': i !== 3, 'vux-1px-t': i === 1}" style="padding:12px;">向左滑试试</div>
        </SlideDelItem>
      </SlideDel>
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
  import { SlideDel, SlideDelItem, SlideDelBtn } from '@/components/slideDel'


  export default {
    components: {
      Header,
      Title,
      SlideDel,
      SlideDelItem,
      SlideDelBtn,
      'page-content': Content,
      'header-button': hButton
    },
    name: 'tabar-name',
    data () {
      return {
        x: 0
      }
    },
    methods: {
      _touchS () {
        this.startX = e.targetTouches[0].pageX;
      },
      _touchM () {
        this.diffX = e.targetTouches[0].pageX - this.startX;
        this.x = this.diffX;
      },
      _touchE () {

      },
    }
  }
</script>

