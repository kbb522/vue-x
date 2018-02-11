<template>
<div class="page">
  <Header>
    <Title>Grid</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>
    <div class="grids">
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-renshishenqing"></i>
              <div class="grid_label">人事申请</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-diannaoguzhang"></i>
              <div class="grid_label">电脑故障</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-buqian"></i>
              <div class="grid_label">打卡补签</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-fukuanshenqing"></i>
              <div class="grid_label">付款申请</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-jiaotongbaoxiao"></i>
              <div class="grid_label">交通报销</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-jiekuanshenqing"></i>
              <div class="grid_label">借款申请</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-xiujia"></i>
              <div class="grid_label">休假申请</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-ITshenqing"></i>
              <div class="grid_label">电脑申请</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-jiaban"></i>
              <div class="grid_label">加班申请</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-youxiangmimagenggai"></i>
              <div class="grid_label">邮箱密码更改</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-wupinshenqing"></i>
              <div class="grid_label">物品申请</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-ITquanxian"></i>
              <div class="grid_label">IT权限</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-kaoqinyichang"></i>
              <div class="grid_label">考勤异常</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-daibanshixiang"></i>
              <div class="grid_label">待办事项</div>
          </li>
        </div>
      </a>
      <a href="javascript:;" class="grid">
        <div class="grid_icon">
          <i class="icon iconfont icon-huiyijilu"></i>
              <div class="grid_label">会议记录</div>
          </li>
        </div>
      </a>
    </div>
  </page-content>
</div>
</template>
<script>
import Flex from '@/components/grid'
import {
  Header,
  hButton,
  Title
} from '@/components/header'
import Content from '@/components/content'

export default {
  components: {
    Header,
    Title,
    'page-content': Content,
    'header-button': hButton

  },
  name: 'Grid',
  data: () => ({

  })
}
</script>
<style lang="less" scoped>
@import '../assets/font/iconfont.css';

.page-content {
    font-size: 12px;
    padding: 10px;
}

</style>
