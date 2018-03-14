<template>
<div class="page">
  <Header>
    <Title>表单</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>
    <list class="form-list">
      <div slot="title">表单</div>
      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-input-row">
            <div class="item-title form-label">姓名</div>
            <div class="form-input">
              <input type="text" placeholder="姓名" v-model="name">
            </div>
          </div>
        </div>
      </list-item>

      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-input-row">
            <div class="item-title form-label">电子邮箱</div>
            <div class="form-input">
              <input type="email" placeholder="电子邮箱" v-model="email">
            </div>
          </div>
        </div>
      </list-item>

      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-input-row">
            <div class="item-title form-label">用户密码</div>
            <div class="form-input">
              <input type="password" placeholder="用户密码" v-model="password">
            </div>
          </div>
        </div>
      </list-item>

      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-input-row">
            <div class="item-title form-label">性别</div>
            <div class="form-input">
              <select v-model="sexy">
                <option>男</option>
                <option>女</option>
              </select>
            </div>
          </div>
        </div>
      </list-item>

      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-input-row">
            <div class="item-title form-label">出生日期</div>
            <div class="form-input">
              <input type="date" value="1983-05-22" v-model="birthdate">
            </div>
          </div>
        </div>
      </list-item>

      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-input-row">
            <div class="item-title form-label">同意</div>
            <div class="form-input">
              <Switcher></Switcher>
            </div>
          </div>
        </div>
      </list-item>

      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-input-row">
            <div class="item-title form-label">Textarea</div>
            <div class="form-input">
              <textarea row="3" v-model="textarea"></textarea>
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
  Button
} from '@/components/button'

import {
  Header,
  hButton,
  Title
} from '@/components/header'

import Content from '@/components/content'

import {
  List,
  ListItem
} from '@/components/list'

import {} from '@/components/form'

import {
  Switcher
} from '@/components/switcher'


export default {
  components: {
    Header,
    Title,
    'page-content': Content,
    'header-button': hButton,
    'm-button': Button,
    List,
    ListItem,
    Switcher
  },
  name: 'Form',
  data: () => ({
    name: '',
    sexy: '',
    textarea: '',
    birthdate: '',
    email: '',
    password: ''
  })
}
</script>
<style lang="less" scoped>
.page-content {
    font-size: 12px;
    padding: 10px;
    p {
        padding: 5px;
    }
}
</style>
