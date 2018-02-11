<template>
<div class="page">
  <Header>
    <Title>List</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>
    <list>
      <div slot="title">标题部分</div>
      <div slot="append">
        列表介绍列表介绍列表介绍列表介绍列表介绍列表介绍 列表介绍列表介绍列表介绍列表介绍列表介绍列表介绍列表介绍 列表介绍列表介绍列表介绍列表介绍列表介绍
      </div>

      <list-item>
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容</div>
            <div class="item-after">后缀</div>
          </div>
        </div>
      </list-item>

      <list-item>
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">标题内容</div>
            <div class="item-after">
              <div class="badge">13</div>
            </div>
          </div>
        </div>
      </list-item>

      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">Title</div>
            <div class="item-after">
              <div class="badge">32</div>
            </div>
          </div>
        </div>
      </list-item>

      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">长标题长标题长标题长标题长标题长标题长标题长标题</div>
            <div class="item-after">
              <div class="badge">32</div>
            </div>
          </div>
          <div class="item-subtitle">
            长副标题或简介长副标题或简介长副标题或简介长副标题或简介长副标题或简介长副标题或简介长副标题或简介
          </div>
        </div>
      </list-item>
      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">长标题长标题</div>
            <div class="item-after">
              <Switcher></Switcher>
            </div>
          </div>
        </div>
      </list-item>
      <list-item :checkbox="true">
        <input type="checkbox" name="name" value="A">
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">长标题长标题</div>
            <div class="item-after">

            </div>
          </div>
        </div>
      </list-item>
      <list-item :radio="true">
        <input type="radio" name="gender" value="man">
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">男人</div>
            <div class="item-after">

            </div>
          </div>
        </div>
      </list-item>
      <list-item :radio="true">
        <input type="radio" name="gender" value="weman">
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">女人</div>
            <div class="item-after">

            </div>
          </div>
        </div>
      </list-item>
    </list>
  </page-content>
</div>
</template>
<script>
import {
  List,
  ListItem
} from '@/components/list'
import {
  Header,
  hButton,
  Title
} from '@/components/header'
import Content from '@/components/content'
import {Switcher} from '@/components/switcher'

export default {
  components: {
    Header,
    Title,
    'page-content': Content,
    'header-button': hButton,
    'list': List,
    'list-item': ListItem,
    Switcher
  },
  name: 'List',
  data: () => ({

  })
}
</script>
<style lang="less" scoped>
.page-content {
    font-size: 12px;
    padding: 10px;
}
</style>
