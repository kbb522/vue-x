<template>
    <div class="page">
          <Header>
                <Title>读取加载</Title>
                <header-button v-back-link>返回</header-button>
            </Header>
             <page-content>
                 <p><m-button @click.stop.native="onClick">Loading效果</m-button></p>
             </page-content>
            <Loading :show="show" ref="loading"></Loading>
    </div>
</template>

<script>
import { Header, hButton, Title } from "@/components/header";
import { Button } from "@/components/button";
import Content from "@/components/content";
import { Loading } from "@/components/loading";
export default {
  components: {
    Header,
    Title,
    "page-content": Content,
    "header-button": hButton,
    "m-button": Button,
    Loading
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    onClick() {
      this.$refs.loading.open();
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