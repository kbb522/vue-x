<template>
<div class="page">
  <Header>
    <Title>Flex-layout</Title>
    <header-button v-back-link>返回</header-button>
  </Header>
  <page-content>
    <div id="summary" class="panel">
      <h2>flex-layout</h2>
      <p>flex-layout基于24个栅格布局，与传统栅格化的使用方式类同，但提供了更直观、丰富的布局方式。</p>
      <div class="demo demo1">
        <div class="flex-column">
          <div class="flex-item-24">flex-item-24</div>
          <div class="flex-item-12">flex-item-12</div>
          <div class="flex-item-12">flex-item-12</div>
          <div class="flex-item-8">flex-item-8</div>
          <div class="flex-item">flex-item 自动填充宽度</div>
          <div class="flex-item-8">flex-item-8</div>
          <div class="flex-item-8">flex-item-8</div>
          <div class="flex-item-8 flex-offset-8">flex-item-8 , flex-offset-8</div>
        </div>
      </div>
    </div>
    <div class="panel">
      <h2>概述</h2>
      <p>与传统的栅格化一样，flex-layout基于[容器] (相当于Bootstrap的row) 和[栅格] (相当于Bootstrap的column) 来布局:</p>
      <ol>
        <li>[容器]有两种：
          <p>flex-column: 容器里的[栅格]以横向排列，与传统栅格化的row一样<br>flex-row: 容器里的[栅格]以竖向排列，就像header、content、footer的排列一样</p>
        </li>
        <li>通常，只有[栅格]可以直接放在[容器]中，而你的内容应该放在[栅格]里。但这不是必须的，直接把内容放在[容器]里也没问题。</li>
        <li>如果一个[容器]里包含的[栅格]超过24格，多出的部分将另起一行。</li>
        <li>IE的话只兼容IE10+，其他主流浏览器都支持，具体可以看：<a href="http://caniuse.com/#search=flex" target="_blank">兼容性</a></li>
        <li>Flexbox有主轴，副轴的概念，flex-layout已经封装好了，你不需要懂得flexbox，也无需针对不同轴使用不同的class。<br> 不过，如果你对Flexbox有所了解的话，用起来会更顺手，推荐阮一峰的
          <a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html">Flex 布局教程</a>
        </li>
        <li>与Bootstrap等栅格化不同的是：flex-layout不需要container，栅格本身不自带padding。</li>
      </ol>
    </div>
    <div class="panel">
      <h2>优势</h2>
      <p>flex-layout解决了css布局的不少问题，这里所说的大多在下面的Example里可以看到:</p>
      <ol>
        <li>应用一个class就可以垂直居中。</li>
        <li>轻松实现多栏同高。</li>
        <li>自动计算间距，实现等宽布局，不需要再计算margin。</li>
        <li>支持自动填充剩余宽度，以往我们需要通过触发BFC来实现。</li>
        <li>支持自动填充剩余高度，比如将footer置于底部。</li>
        <li>随意调整[栅格]顺序，比如让main比sidebar提前渲染出来。</li>
        <li>丰富的对齐方式：上、下、左、右、左上、右上、左下、右下。</li>
      </ol>
    </div>
    <div id="usage" class="panel">
      <h2>用法</h2>
      <div class="box">
        <div class="head">
          <span class="title">flex-middle 垂直居中</span>
          <span class="title">flex-center 水平居中</span>
          <p class="tip">这两个class应用在[容器]上时，所有子flex-item都会垂直或水平居中。也可以单独应用在[栅格]上，使特定栅格居中对齐。</p>
        </div>
        <div class="demo flex-row flex-middle flex-center" style="min-height: 180px">
          <div class="flex-item-8" style="margin-bottom: 10px">无论是多行还是单行，都可以垂直居中</div>
          <div class="flex-item-8">无论是多行还是单行，都可以垂直居中</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">flex-offset-* 向左偏移</span>
          <p class="tip">这个class应用在[栅格]上，指定[栅格]向左偏移多少格。</p>
        </div>
        <div class="demo flex-column">
          <div class="flex-item-8">flex-item-8</div>
        </div>
        <div class="demo flex-column">
          <div class="flex-item-8 flex-offset-8">flex-item-8, flex-offset-8</div>
        </div>
        <div class="demo flex-column">
          <div class="flex-item-8 flex-offset-16">flex-item-8, flex-offset-16</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">flex-order-* 排序 </span>
          <p class="tip">这个class应用在[栅格]上，order越小排在越前面。</p>
        </div>
        <div class="demo flex-column">
          <div class="flex-item-6 flex-order-4">flex-order-4</div>
          <div class="flex-item-6 flex-order-3">flex-order-3</div>
          <div class="flex-item-6 flex-order-2">flex-order-2</div>
          <div class="flex-item-6 flex-order-1">flex-order-1</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">flex-left 左对齐</span>
          <span class="title">flex-right 右对齐</span>
          <p class="tip">这两个class应用在[容器]上时，所有子flex-item都会左右对其。也可以单独应用在[栅格]上。</p>
        </div>
        <div class="demo flex-column flex-left">
          <div class="flex-item-6">左对齐</div>
          <div class="flex-item-6">左对齐</div>
          <div class="flex-item-6">左对齐</div>
        </div>
        <div class="demo flex-column flex-right">
          <div class="flex-item-6">右对齐</div>
          <div class="flex-item-6">右对齐</div>
          <div class="flex-item-6">右对齐</div>
        </div>
        <div class="demo flex-row flex-left">
          <div class="flex-item-6">左对齐</div>
          <div class="flex-item-6 flex-right">右对齐</div>
          <div class="flex-item-6">左对齐</div>
        </div>
        <div class="demo flex-row flex-right">
          <div class="flex-item-6">右对齐</div>
          <div class="flex-item-6 flex-left">左对齐</div>
          <div class="flex-item-6">右对齐</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">flex-top 顶部对齐</span>
          <span class="title">flex-bottom 底部对齐</span>
          <p class="tip">这两个class应用在[容器]上时，所有子flex-item都会上下对其。也可以单独应用在[栅格]上。</p>
        </div>
        <div class="demo flex-column flex-top" style="height: 80px">
          <div class="flex-item-6">顶部对齐</div>
          <div class="flex-item-6">底部对齐</div>
          <div class="flex-item-6">顶部对齐</div>
        </div>
        <div class="demo flex-column flex-bottom" style="height: 80px">
          <div class="flex-item-6">底部对齐</div>
          <div class="flex-item-6">顶部对齐</div>
          <div class="flex-item-6">底部对齐</div>
        </div>
        <div class="demo flex-row flex-top" style="height: 140px">
          <div class="flex-item-6">顶部对齐</div>
          <div class="flex-item-6">顶部对齐</div>
          <div class="flex-item-6 flex-bottom">底部对齐</div>
        </div>
        <div class="demo flex-row flex-bottom flex-right" style="height: 140px">
          <div class="flex-item-6 flex-top">顶部对齐</div>
          <div class="flex-item-6">底部对齐</div>
          <div class="flex-item-6">底部对齐</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">flex-between 等宽对齐</span>
          <p class="tip">这个class应用在[容器]上，自动调整栅格间距，保持两边间距相同。</p>
        </div>
        <div class="demo flex-column flex-between">
          <div class="flex-item-4">等宽对齐</div>
          <div class="flex-item-4">等宽对齐</div>
          <div class="flex-item-4">等宽对齐</div>
          <div class="flex-item-4">等宽对齐</div>
        </div>
        <div class="demo flex-row flex-between flex-center" style="height: 250px">
          <div class="flex-item-6">等宽对齐</div>
          <div class="flex-item-6">等宽对齐</div>
          <div class="flex-item-6">等宽对齐</div>
          <div class="flex-item-6">等宽对齐</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">flex-around 分散排列</span>
          <p class="tip">这个class应用在[容器]上，与等宽对齐相同，但最左、最右、最上、最下的间距比[栅格]之间的间距大一倍。</p>
        </div>
        <div class="demo flex-column flex-around">
          <div class="flex-item-4">分散排列</div>
          <div class="flex-item-4">分散排列</div>
          <div class="flex-item-4">分散排列</div>
          <div class="flex-item-4">分散排列</div>
        </div>
        <div class="demo flex-row flex-around flex-center" style="height: 300px">
          <div class="flex-item-6">分散排列</div>
          <div class="flex-item-6">分散排列</div>
          <div class="flex-item-6">分散排列</div>
          <div class="flex-item-6">分散排列</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">嵌套布局</span>
        </div>
        <div class="demo flex-column flex-center">
          <div class="flex-item-12 flex-row">
            <div class="flex-item">flex-item</div>
            <div class="flex-item">flex-item</div>
          </div>
          <div class="flex-item-8 flex-row">
            <div class="flex-item">flex-item</div>
            <div class="flex-item">flex-item</div>
            <div class="flex-item">flex-item</div>
          </div>
        </div>
      </div>
    </div>
    <div id="responsive" class="panel">
      <h2>响应式</h2>
      <p>flex-layout提供了基础的响应式功能，当分辨率小于某个阈值时，你可以指定：</p>
      <ol>
        <li>[容器]从横向排列变为竖向排列，并且[栅格]宽度为100%</li>
        <li>隐藏指定[栅格]</li>
        <li>显示指定[栅格]</li>
      </ol>
      <div class="box">
        <div class="head">
          <span class="title">flex-md</span>
          <p class="tip">这个class应用在[容器]上，当分辨率低于992px的时候，使[容器]变为竖向排列</p>
        </div>
        <div class="demo flex-column flex-md">
          <div class="flex-item">flex-item</div>
          <div class="flex-item">flex-item</div>
          <div class="flex-item">flex-item</div>
          <div class="flex-item">flex-item</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">flex-sm</span>
          <p class="tip">这个class应用在[容器]上，当分辨率低于768px的时候，使[容器]变为竖向排列</p>
        </div>
        <div class="demo flex-column flex-sm">
          <div class="flex-item">flex-item</div>
          <div class="flex-item">flex-item</div>
          <div class="flex-item">flex-item</div>
          <div class="flex-item">flex-item</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">flex-md-hide</span>
          <p class="tip">这个class应用在[容器]或[栅格]上，当分辨率低于992px的时候，隐藏[栅格]或[容器]</p>
        </div>
        <div class="demo flex-column">
          <div class="flex-item">flex-item</div>
          <div class="flex-item flex-md-hide">低于992px则隐藏该栅格</div>
          <div class="flex-item">flex-item</div>
          <div class="flex-item">flex-item</div>
        </div>
        <div class="demo flex-column flex-md-hide">
          <div class="flex-item">低于992px则隐藏整个容器</div>
          <div class="flex-item">低于992px则隐藏整个容器</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">flex-sm-hide</span>
          <p class="tip">这个class应用在[容器]或[栅格]上，当分辨率低于768px的时候，隐藏[栅格]或[容器]</p>
        </div>
        <div class="demo flex-column">
          <div class="flex-item">flex-item</div>
          <div class="flex-item flex-sm-hide">低于768px则隐藏该栅格</div>
          <div class="flex-item">flex-item</div>
          <div class="flex-item">flex-item</div>
        </div>
        <div class="demo flex-column flex-sm-hide">
          <div class="flex-item">低于768px则隐藏整个容器</div>
          <div class="flex-item">低于768px则隐藏整个容器</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">flex-md-show</span>
          <p class="tip">这个class应用在[容器]或[栅格]上，当分辨率低于992px的时候，显示[栅格]或[容器]</p>
        </div>
        <div class="demo flex-column">
          <div class="flex-item-24">把浏览器窗口调小试试</div>
          <div class="flex-item flex-md-show">低于992px的时候出现</div>
          <div class="flex-item flex-md-show">低于992px的时候出现</div>
          <div class="flex-item flex-md-show">低于992px的时候出现</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">flex-sm-show</span>
          <p class="tip">这个class应用在[容器]或[栅格]上，当分辨率低于7682px的时候，显示[栅格]或[容器]</p>
        </div>
        <div class="demo flex-column">
          <div class="flex-item-24">把浏览器窗口调小试试</div>
          <div class="flex-item flex-sm-show">低于768px的时候出现</div>
          <div class="flex-item flex-sm-show">低于768px的时候出现</div>
          <div class="flex-item flex-sm-show">低于768px的时候出现</div>
        </div>
      </div>
    </div>
    <div id="example" class="panel">
      <h2>实例</h2>
      <div class="box">
        <div class="head">
          <span class="title">响应式圣杯布局</span>
          <p class="tip">main优先显示，宽度低于992px时候main和side-right变为水平排列, side-left隐藏</p>
        </div>
        <div class="demo flex-row">
          <div class="flex-item">header</div>
          <div class="flex-column flex-md" style="min-height: 100px">
            <div class="flex-item-14 flex-order-2">main</div>
            <div class="flex-item flex-order-1 flex-md-hide">side-left</div>
            <div class="flex-item flex-order-3">side-right</div>
          </div>
          <div class="flex-item">footer</div>
        </div>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">多栏同高，flex-column默认便是。</span>
        </div>
        <div class="demo flex-column">
          <div class="flex-item-8">sidebar</div>
          <div class="flex-item-16" style="height: 400px">main</div>
        </div>
      </div>
    </div>
  </page-content>
</div>
</template>
<script>
import Flex from '@/components/flex'
import {
  Header, hButton,Title
} from '@/components/header'
import Content from '@/components/content'

export default {
  components: {
    Header,
    Title,
    'page-content': Content,
    'header-button': hButton

  },
  name: 'Flex',
  data: () => ({

  })
}
</script>
<style lang="less" scoped>
.page-content {
    font-size: 12px;
    padding: 10px;
}

.flex-column,
.flex-row {
    background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, #fdfdfd 4.16666667%, #fdfdfd 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, #fdfdfd 12.5%, #fdfdfd 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, #fdfdfd 20.83333333%, #fdfdfd 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, #fdfdfd 29.16666667%, #fdfdfd 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, #fdfdfd 37.5%, #fdfdfd 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, #fdfdfd 45.83333333%, #fdfdfd 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, #fdfdfd 54.16666667%, #fdfdfd 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, #fdfdfd 62.5%, #fdfdfd 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, #fdfdfd 70.83333333%, #fdfdfd 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, #fdfdfd 79.16666667%, #fdfdfd 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, #fdfdfd 87.5%, #fdfdfd 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, #fdfdfd 95.83333333%);

    [class*=flex-item] {
        background-color: rgba(72, 174, 255, 0.27);
        box-shadow: inset 1px 1px rgba(78, 78, 78, 0.1), inset -1px -1px rgba(78, 78, 78, 0.1);
        line-height: 40px;
        text-align: center;
    }
}

.panel {
	margin-bottom:  40px;
}

.panel a[href] {
	margin: 0 5px;
	color: #007BC5;
}

.box {
	margin: 20px 0;
	border-radius: 8px;
	border: solid 1px #d1d1d1;
	box-shadow: 0 1px 3px #e1e1e1;
}

.box .head {
	margin: 0;
	padding: 10px 20px;
	border-bottom: solid 1px #d1d1d1;
	border-top: solid 1px #fff;
	border-radius: 8px 8px 0 0;
	background-color: #f4f4f4;
}

.box .head .title {
	margin-right: 40px;
	color: #007BC5;
}

.box .head .tip {
	margin: 5px 0 0;
	line-height: 2;
	font-size: 12px;
}

.box .demo {
	margin: 20px 0;
	border-top: solid 1px #ddd;
	border-bottom: solid 1px #ddd;
}


</style>
