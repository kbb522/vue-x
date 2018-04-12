<template>
<div class="page">
  <Header>
    <Title>Scroll</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>
    <scroll :onRefresh="onRefresh" :onInfinite="onInfinite">
        
        <list>
      <div slot="title">固定标题，当滚动后会固定</div>
      <!-- <div slot="append">
        列表介绍列表介绍列表介绍列表介绍列表介绍列表介绍 列表介绍列表介绍列表介绍列表介绍列表介绍列表介绍列表介绍 列表介绍列表介绍列表介绍列表介绍列表介绍
      </div> -->

      <list-item>
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容</div>
            <div class="item-after">后缀</div>
          </div>
        </div>
      </list-item>

      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>
      <list-item :link="true">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容item-link</div>

          </div>
        </div>
      </list-item>

     
    </list>
    </scroll>
  </page-content>
</div>
</template>
<script>
import { Button } from "@/components/button";

import { Header, hButton, Title } from "@/components/header";

import Content from "@/components/content";

import Scroll from "@/components/scroll";

import { List, ListItem } from "@/components/list";

export default {
  beforeCreate(){
  },
  components: {
    List,
    ListItem,
    Scroll,
    Header,
    Title,
    "page-content": Content,
    "header-button": hButton,
    "m-button": Button
  },
  data: () => ({}),
  methods: {
    onRefresh(callback) {
      alert("onRefresh");
      callback();
    },
    onInfinite(callback) {
      alert("onInfinite");
      callback();
    }
  }
};
</script>
<style lang="less" scoped>

</style>
