<template>
<div class="page">
  <Header>
    <Title>vue-x</Title>
    <!-- <header-button :icon="false">关于</header-button> -->
  </Header>
  <page-content>
    <p class="readme">
      vue-x是一款基于VUE框架的UI组件库。开发目的一是为了学习了解VUE框架本身，二是方便以后打移动单页面项目。

    </p>
    <p class="readme">在开发时候借鉴了一些主流框架的思想结构，借鉴大牛的最佳实践，提高生产效率，同时提高自己的架构能力。再次基础上 不断完善其组件库，积累更多的常用移动交互组件，使其逐渐壮大，减少交付BUG；同时不断完善LESS样式架构，希望在对应不同的项目中 只需要修改LESS基本变量定义，就可以快速的满足界面样式需求。
    </p>
    <p class="readme">互联网创业的关键在于执行，希望好的想法+坚持执行=产品的成功！<br>--徐毅 2017.12.13</p>
    <ul class="mainList">
      <li v-for="item,index in menulist" :key="index">
        <router-link :to="item.name">{{ index+1 }}、{{ item.name }}</router-link>
      </li>
      <!--
      <li>
        <router-link :to="{ name: 'Flex'}">Flex-layout</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Button'}">Button</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ButtonGroup'}">ButtonGroup</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Grid'}">Grid</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'List'}">List</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Form'}">Form</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'FormValidate'}">FormValidate</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Modal'}">Modal</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Popup'}">Popup</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Navbar'}">Navbar</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Steps'}">Steps</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Toast'}">Toast</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Slider'}">Slider</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Scroll'}">Scroll</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'SwiperPic'}">SwiperPic</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Toptip'}">Toptip</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Tabar'}">Tabar</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'SlideDel'}">SlideDel</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Count'}">Count</router-link>
      </li>
      -->
      <li>
        <a href="#" @click.prevent="onOpen">打开</a>
      </li>
        <a href="#" @click.prevent="openState">查看state</a>
      <li>
      </li>
      <li v-for="item in list" :key="item.id">
        {{ item.name }}
      </li>

    </ul>
  </page-content>
  <alert ref="alert"></alert>
</div>
</template>

<script>
import Page from '@/components/page'
import Content from '@/components/content'
import {
  mapActions,
  mapGetters,
  mapState
} from 'vuex'

import {
  Header,
  hButton,
  Title
} from '@/components/header'

import {
  Alert
} from '@/components/modal'

export default {
  name: 'Home',
  data: function () {
    return {
      menulist: [
        {"name":"Flex"},
        {"name":"Button"},
        {"name":"ButtonGroup"},
        {"name":"Grid"},
        {"name":"List"},
        {"name":"formValidate"},
        {"name":"Form"},
        {"name":"Modal"},
        {"name":"Popup"},
        {"name":"Navbar"},
        {"name":"Steps"},
        {"name":"Toast"},
        {"name":"Slider"},
        {"name":"Scroll"},
        {"name":"SwiperPic"},
        {"name":"Toptip"},
        {"name":"Tabar"},
        {"name":"SlideDel"},
        {"name":"Count"},
        {"name":"Actionsheet"},
        {"name":"Select"},
        {"name":"datetimePicker"}

      ]
    }
  },
  watch: {
    count1: function() {
      console.log(`watch: ${this.count1}`)
    },

    // list: function() {
    //   //console.log(`watch: ${this.list}`)
    // }
  },

  mounted: function() {

  },
  computed: {
    count1() {
      return this.$store.state.count
    },
    ...mapGetters({
      list: 'getList'
    })
  },
  created() {
    //this.$store.dispatch('listUpdate')
  },
  methods: {
    openState: function() {
      console.log(this.$store)
    },
    onOpen: function(event) {
      //alert(event)
      let { dispatch } = this.$store;
      dispatch('listUpdate')
    }
  },
  components: {
    Header,
    Title,
    'page-content': Content,
    'header-button': hButton,
    Alert
  }
}
</script>

<style lang="less">
@import '../assets/font/iconfont.css';

.readme {
    font-size: 12px;
    padding: 8px;
    color: #666;
}
.mainList {
    li {
        padding: 8px;
        border-bottom: 1px solid #efefef;

        a:active {
            color: darken(#666, 20%);
            background: transparent;
        }
    }
}
</style>
