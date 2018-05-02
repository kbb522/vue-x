<template>
<div class="page">
  <Header>
    <Title>表单验证</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>
    <form @submit.prevent="validateBefore" ref="form1">
    <list class="form-list">
      <div slot="title">表单</div>
      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-input-row">
            <div class="item-title form-label">姓名</div>
            <div class="form-input">
              <input  type="text" placeholder="姓名" v-model="name" name='name' v-validate="'truthy|alpha|required'">
              <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
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
              <input type="text" placeholder="电子邮箱" v-model="email" name='email' v-validate="'required|email'">
              <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
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
              <input type="password" placeholder="用户密码" v-model="password" v-validate="'required|min:6'" name="password">
              <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </div>
          </div>
        </div>
      </list-item>

      <list-item>
        <div class="item-media"><img src="@/assets/pic1.png" width="30"></div>
        <div class="item-content">
          <div class="item-input-row">
            <div class="item-title form-label">确认密码</div>
            <div class="form-input">
              <input type="password" placeholder="确认密码" v-model="confirmpassword" v-validate="{required:true,is:password}" name="confirmpassword">
              <span v-show="errors.has('confirmpassword')">{{ errors.first('confirmpassword') }}</span>
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
              <select v-model="sexy" name="sexy" v-validate="'truthy|required'">
                <option>男</option>
                <option>女</option>
              </select>
              <span v-show="errors.has('sexy')">{{ errors.first('sexy') }}</span>
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
              <input type="date" value="1983-05-22" name="barthday" v-model="birthdate" v-validate="'truthy|required'">
              <span v-show="errors.has('barthday')">{{ errors.first('barthday') }}</span>
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
              <Switcher v-model="switcher" name="switcher" v-validate="'truthy|required'"></Switcher>
              <span v-show="errors.has('switcher')">{{ errors.first('switcher') }}</span>
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
              <textarea row="3" name="textarea" v-model="textarea" v-validate="'truthy'"></textarea>
              <span v-show="errors.has('textarea')">{{ errors.first('textarea') }}</span>
            </div>
          </div>
        </div>
      </list-item>
      <div>
        <!-- <m-button @click.native="goForm">提交</m-button> -->
        <button class="submitBtn button" type="submit">提交</button>
      </div>
    </list>

    </form>
  </page-content>

</div>
</template>
<script>
import { Button } from "@/components/button";

import { Header, hButton, Title } from "@/components/header";

import Content from "@/components/content";

import { List, ListItem } from "@/components/list";

import {} from "@/components/form";

import { Switcher } from "@/components/switcher";

export default {
  components: {
    Header,
    Title,
    "page-content": Content,
    "header-button": hButton,
    "m-button": Button,
    List,
    ListItem,
    Switcher
  },
  name: "Form",
  data: () => ({
    name: "",
    sexy: "",
    textarea: "",
    birthdate: "",
    email: "",
    password: "",
    confirmpassword: "",
    switcher: false
  }),
  methods: {
    switcher_change() {
      alert(this.switcher);
    },

    validateBefore() {
this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          console.log({
            name: this.name,
            sexy: this.sexy,
            email: this.email,
            password: this.password,
            confirmpassword: this.confirmpassword,
            birthdate: this.birthdate,
            sexy: this.sexy,
            switcher: this.switcher,
            textarea: this.textarea
          })
          return;
        }

        alert('Correct them errors!');
      });

    },

    goForm(event) {
      this.$refs.form1.submit();
    }
  }
};
</script>
<style lang="less" scoped>
.page-content {
  font-size: 12px;
  padding: 10px;
  p {
    padding: 5px;
  }
}

.submitBtn {
  width: 100%;
}
</style>
