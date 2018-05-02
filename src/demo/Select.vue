<template>
<div class="page">
  <Header>
    <Title>Select</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>
    <div class="select-cell">
      <label class="select-cell-l">职业</label>
      <div class="select-cell-r" @click="show"><input type="text" readonly v-model="v" /></div>
    </div>
    <div class="select-cell">
      <label class="select-cell-l">爱好</label>
      <div class="select-cell-r" @click="show2"><input type="text" readonly v-model="arr" /></div>
    </div>
  </page-content>
  <Select ref="zy" :list1="list1"></Select>
  <SelectCheckbox ref="ah" :list1="list2"></SelectCheckbox>
</div>
</template>
<script>
import { Button } from "@/components/button";

import { Header, hButton, Title } from "@/components/header";

import Content from "@/components/content";

import { Select,SelectCheckbox } from "@/components/Select";

export default {
  components: {
    Header,
    Title,
    Select,
    SelectCheckbox,
    "page-content": Content,
    "header-button": hButton,
    "m-button": Button
  },
  data () {
    return {
      list1: ["法官", "医生", "猎人", "学生", "记者", "其他"],
      list2: ['画画', '打球', '唱歌', '游泳'],
      v: '',
      arr: ''
    }
  },
  name: "Select-name",
  methods: {
    show: function () {
      this.$refs.zy.open()
    },
    show2: function () {
      this.$refs.ah.open()
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
</style>
