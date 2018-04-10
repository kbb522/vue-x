<template>
  <div class="scroll"
      :class="{
          touching: this.touching,
          'pull-down': (state === 0),
          'pull-up': (state === 1),
          refreshing: (state === 2),
      }"
      @touchstart="touchStart($event)"
      @touchmove="touchMove($event)"
      @touchend="touchEnd($event)"
  >
      <div class="scroll-inner" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
            <div class="pull-to-refresh-layer">
                <slot name="refresh">
                    <div class="preloader"></div>
                    <span class="label-refresh">正在加载中...</span>

                    <div class="pull-to-refresh-arrow"></div>
                    <span class="label-down">下拉刷新</span>
                    <span class="label-up">释放刷新</span>
                </slot>
            </div>
            <slot></slot>
            <div class="infinite-layer">
                <slot name="infinite">
                sadfasdf
                </slot>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      top: 0, // 离顶部的值
      state: 0, // 0:down, 1: up, 2: refreshing
      startY: 0, // 当前滚动开始值
      touching: false,
      infiniteLoading: false
    };
  },
  props: {
    offset: {
      // 下拉刷新临界点
      type: Number,
      default: 44
    }
  },
  computed: {},
  methods: {
    touchStart(e) {
      this.startY = e.targetTouches[0].pageY; // targetTouches取当前值
      this.startScroll = this.$el.scrollTop || 0;
      //console.log(this.startScroll);

      this.touching = true;
    },
    touchMove(e) {
      //   if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
      //     return;
      //   }
      let diff = e.targetTouches[0].pageY - this.startY - this.startScroll;
      if (diff > 0 || this.state === 2) e.preventDefault();
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0);
      console.log(this.top);

      if (this.state === 2) {
        // in refreshing
        return;
      }
      if (this.top >= this.offset) {
        // 如果达到凝界点
        this.state = 1;
      } else {
        this.state = 0;
      }
    },
    touchEnd(e) {
      // if (!this.enableRefresh) return
      this.touching = false;
      if (this.state === 2) {
        // in refreshing
        this.state = 2;
        this.top = this.offset;
        return;
      }
      if (this.top >= this.offset) {
        // do refresh
        this.refresh();
      } else {
        // cancel refresh
        this.state = 0;
        this.top = 0;
      }
    },
    refresh() {
      this.state = 2;
      this.top = this.offset;
      //this.onRefresh(this.refreshDone);
      setTimeout(()=>{
          
          this.top = 0;
          setTimeout(()=>{this.state = 0;},300)
      },2000)
    }
  }
};
</script>

<style lang="less" scoped>
@import "./scroll.less";
</style>
