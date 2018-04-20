<template>
  <div>
    <overlay :opacity="0" :show="ctrl"></overlay>
    <transition name="fade">
      <div v-show="ctrl" :class="'toptip toptip-' + cls">
        {{ imsg }}
      </div>
    </transition>
  </div>
</template>

<script>
import { Overlay } from '@/components/overlay'
export default {
  components: {
    Overlay
  },
  props: {
    itype: {
      type: String,
      default: 'success'
    },
    ictrl: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: 'No Msg'
    }
  },
  data () {
    return {
      cls: this.itype,
      ctrl: this.ictrl,
      imsg: this.msg
    }
  },
  methods: {
    show (s, t) {
      let _this = this
      _this.ctrl = true
      _this.imsg = s
      _this.cls = t

      setTimeout( ()=>{
        _this.ctrl = false
      },2000 )

    }
  }
}
</script>
<style lang="less">
  @import './toptip.less';
</style>
