<template>
  <div>
    <overlay :show="mutableShow" :click="overlayClick"></overlay>
    <transition name="sheet">
      <div class="actionsheet-box" v-if="mutableShow">
        <div class="sheet-t">选择操作</div>
        <ul class="sheet-sel">
           <li @click="_alert(item.name)" v-for="item in djson" :style="item.bgcolor?'background-color:'+item.bgcolor+';':(item.color?'color:'+item.color+';':'')">
             {{ item.name }}
           </li>
        </ul>
        <div class="sheet-cannel" @click="_cannel">取消</div>
      </div>
    </transition>
    <alert ref="msg" title="提示" :content="msg"></alert>
  </div>
</template>


<script>
import { Overlay } from '@/components/overlay'
import {
  Modal,
  Alert,
  Confirm,
  Prompt
  } from '@/components/modal'
export default {
  components: {
    Overlay,
    Alert
  },
  props: {
    show: { // init status
      type: Boolean,
      default: false
    },
    overlayClose: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    json: {
      type: Array,
      default:[]
    }
  },

  data() {
    return {
      mutableShow: this.show,
      s: this.name,
      djson: this.json,
      msg: '1'
    }
  },
  methods: {
    _alert (s) {
      this.msg = s + '成功'
      this.$refs.msg.open()
    },
    open () {
      this.mutableShow = true
    },
    close() {
      this.mutableShow = false
    },
    overlayClick() {
      this.mutableShow = false
    },
    _cannel() {
      this.mutableShow = false
    }
  }
}
</script>


<style lang="less">
  @import './Actionsheet.less';
</style>
