<template>
  <div>
  <overlay :show="ish" :click="close" :opacity="0"></overlay>
  <div :class="ish?'select-box':'select-box h0'" :style="'height:'+(list1.length+1)*40+'px'">
    <div class="select-title">请选择 <span @click="sure">确定</span></div>
    <ul class="select-ul">
      <li v-for="item,index in list1" @click="toggleClass">{{ item }}</li>
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
    sure: function () {
      let _this = this
      let _arr = []

      var aa = _this.$el.getElementsByClassName("selected")

      for (var i=0; i<aa.length; i++){
        _arr.push(aa[i].innerHTML)
      }

      _this.ish = false
      console.log(_arr);
      this.$parent.$data.arr = _arr
    },
    toggleClass: function (e,s) {
      //console.log(s);
      //this._self.$attrs.class = "selected"

      if (e.target.className) {
        e.target.className = '';
      }else{
        e.target.className = 'selected'
      }

      //this.ish = false
    }
  }
}
</script>


<style lang="less">
  @import './SelectCheckbox.less';
</style>
