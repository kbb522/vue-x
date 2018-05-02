<template>
  <div>
  <overlay :show="ish" :click="close" :opacity="0"></overlay>
  <div :class="ish?'select-box':'select-box h0'" :style="'height:'+(list1.length+1)*40+'px'">
    <div class="select-title">请选择 <span @click="close">确定</span></div>
    <ul class="select-ul">
      <li v-for="item in list1" @click="_change(item)">{{ item }}<span class="weui-icon-checked"></span></li>
    </ul>
  </div>
  </div>
</template>


<script>
  import { Overlay } from '@/components/overlay'
export default {
  components: {
    Overlay
  },
  props: {
    list1: {
      type: Array,
      default: []
    }
  },
  data: function () {
    return {
      ish: false
    }
  },
  methods: {
    open: function () {
      this.ish = true
    },
    close: function () {
      this.ish = false
    },
    _change: function (s) {
      //console.log(s);
      this.$parent.$data.v = s
      this.ish = false
    }
  }
}
</script>


<style lang="less">
  @import './Select.less';
</style>
