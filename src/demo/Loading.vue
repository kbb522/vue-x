<template>
    <div class="page">
          <Header>
                <Title>读取加载</Title>
                <header-button v-back-link>返回</header-button>
            </Header>
             <page-content>
                 <p><m-button @click.stop.native="onClick()">Loading效果</m-button></p>
                 <div class="grids">
                  <a href="javascript:;" class="grid" @click.prevent="onClick('music')">
                    <div class="grid_icon">
                      <i class="icon loading-music"></i>
                      <div class="grid_label">music</div>
                    </div>
                  </a>
                  <a href="javascript:;" class="grid" @click.prevent="onClick('ball-triangle')">
                    <div class="grid_icon">
                      <i class="icon loading-ball-triangle"></i>
                      <div class="grid_label">ball-triangle</div>
                    </div>
                  </a>
                  <a href="javascript:;" class="grid" @click.prevent="onClick('loading-bars')">
                    <div class="grid_icon">
                      <i class="icon loading-loading-bars"></i>
                      <div class="grid_label">loading-bars</div>
                    </div>
                  </a>
                  <a href="javascript:;" class="grid" @click.prevent="onClick('circles')">
                    <div class="grid_icon">
                      <i class="icon loading-circles"></i>
                      <div class="grid_label">circles</div>
                    </div>
                  </a>
                  <a href="javascript:;" class="grid" @click.prevent="onClick('grid')">
                    <div class="grid_icon">
                      <i class="icon loading-grid"></i>
                      <div class="grid_label">grid</div>
                    </div>
                  </a>
                  <a href="javascript:;" class="grid" @click.prevent="onClick('hearts')">
                    <div class="grid_icon">
                      <i class="icon loading-hearts"></i>
                      <div class="grid_label">hearts</div>
                    </div>
                  </a>
                  <a href="javascript:;" class="grid" @click.prevent="onClick('oval')">
                    <div class="grid_icon">
                      <i class="icon loading-oval"></i>
                      <div class="grid_label">oval</div>
                    </div>
                  </a>
                  <a href="javascript:;" class="grid" @click.prevent="onClick('puff')">
                    <div class="grid_icon">
                      <i class="icon loading-puff"></i>
                      <div class="grid_label">puff</div>
                    </div>
                  </a>
                  <a href="javascript:;" class="grid" @click.prevent="onClick('rings')">
                    <div class="grid_icon">
                      <i class="icon loading-rings"></i>
                      <div class="grid_label">rings</div>
                    </div>
                  </a>
                  <a href="javascript:;" class="grid" @click.prevent="onClick('spinning-circles')">
                    <div class="grid_icon">
                      <i class="icon loading-spinning-circles"></i>
                      <div class="grid_label">spinning-circles</div>
                    </div>
                  </a>
                  <a href="javascript:;" class="grid" @click.prevent="onClick('tail-spin')">
                    <div class="grid_icon">
                      <i class="icon loading-tail-spin"></i>
                      <div class="grid_label">tail-spin</div>
                    </div>
                  </a>
                  <a href="javascript:;" class="grid" @click.prevent="onClick('three-dots')">
                    <div class="grid_icon">
                      <i class="icon loading-three-dots"></i>
                      <div class="grid_label">three-dots</div>
                    </div>
                  </a>
                </div>
             </page-content>
            <Loading :show="show" ref="loading"></Loading>
    </div>
</template>

<script>
import { Header, hButton, Title } from "@/components/header";
import { Button } from "@/components/button";
import Content from "@/components/content";
import { Loading } from "@/components/loading";
import {} from "@/components/grid";
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
    onClick(type) {
      this.$refs.loading.open(type);
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
  .grid {
    .icon {
      background: #5bb8cb;
      display: inline-block;
      text-align: center;
      width: 40px;
      height: 58px;
      &:after {
        transition: all .2s; // 点击变化用
        display: block;
        width: 100%;
        height: 100%;
        content: "";
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100%;
        transform: scale(0.7);
      }
    }
    &:active {
      background: #5bb8cb;
      .grid_label {
        color: white;
      }
      .icon {
        &:after {
          
          transform: scale(1);
        }
      }
    }
  }
}
</style>