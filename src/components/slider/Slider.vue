<template>
  <div class="slider-box">
    <div class="slider"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd">
      <div class="slider-handler" :style="'left:'+n+'%;'"></div>
      <div class="slider-track" :style="'width:'+n+'%;'"></div>
    </div>
    <div v-if="valueShow" class="slider-value">{{ n }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      isvalue: { // init status
        type: Boolean,
        default: false
      },
      per: {
        type: Number,
        default: 0
      }
    },
    data() {
    return {
      valueShow: this.isvalue,
      n: this.per,
      touchOpt: {
        x: 0,
        left: 0,
        width: 0
      }
    }
  },
  methods: {
    touchStart: function (e) {
      let _x = e.targetTouches[0].pageX,
        _this = this,
        _left = e.target.offsetLeft,
        _width = e.target.parentElement.offsetWidth;
      _this.touchOpt.x = _x;
      _this.touchOpt.left = _left;
      _this.touchOpt.width = _width;
    },
    touchMove: function (e) {
      let _x = e.targetTouches[0].pageX,
          _this = this;
      let _per = parseInt((_x - _this.touchOpt.x + _this.touchOpt.left) / _this.touchOpt.width*100);
      console.log('move:'+_per);
      if(_per < 0 ) { _per = 0; }
      if(_per > 100 ) { _per = 100; }
      e.target.style.left = _per + '%';
      e.target.parentElement.nextElementSibling.innerHTML = _per;
      e.target.nextElementSibling.style.width = _per + '%';
    },
    touchEnd: function (e) {
      let _x = e.changedTouches[0].pageX;
      console.log('end:'+_x)
    }
  }
  }
</script>


<style lang="less">
  @import 'Slider.less';
</style>
