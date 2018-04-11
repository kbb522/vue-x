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

      @scroll="(onInfinite || !infiniteLoading) ? onScroll($event) : undefined"
  >
      <transition name="fadeFixedTitle">
          <div v-if="showFixedTitle" class="fadeFixedTitle">固定标题，当滚动后会固定</div>
      </transition>
      
      <div class="scroll-inner" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }" v-if="!!onRefresh">
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
            <div class="infinite-layer" v-if="enableInfinite">
                <slot name="infinite">
                    <div class="infinite-preloader"></div>
                    <div>正在加载中...</div>
                </slot>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  mounted: () => {
    //alert(this.onRefresh);
  },
  components: {},
  data() {
    return {
      touching: false,
      top: 0, // 离顶部的值
      state: 0, // 0:down, 1: up, 2: refreshing
      startY: 0, // 当前滚动开始值

      infiniteLoading: false,

      showFixedTitle: false //
    };
  },
  props: {
    offset: {
      // 下拉刷新临界点
      type: Number,
      default: 44
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },

    enableInfinite: {
      type: Boolean,
      default: true
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
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
      if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
        return;
      }
      let diff = e.targetTouches[0].pageY - this.startY - this.startScroll;
      if (diff > 0 || this.state === 2) e.preventDefault();
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0);
      //console.log(this.top);

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
      if (!this.enableRefresh) return;
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
      if (this.onRefresh) {
        this.onRefresh(this.refreshDone);
      } else {
        this.refreshDone();
      }
    },
    refreshDone() {
      setTimeout(() => {
        this.top = 0;
        setTimeout(() => {
          this.state = 0;
        });
      }, 300);
    },

    onScroll(e) {
      if (!this.enableInfinite || this.infiniteLoading) {
        return;
      }
      let outerHeight = this.$el.clientHeight;
      let innerHeight = this.$el.querySelector(".scroll-inner").clientHeight;
      let scrollTop = this.$el.scrollTop;
      let ptrHeight = this.onRefresh
        ? this.$el.querySelector(".pull-to-refresh-layer").clientHeight
        : 0;
      let infiniteHeight = this.$el.querySelector(".infinite-layer")
        .clientHeight;
      // (outerHeight + scrollTop + ptrHeight) = 当前可以总top值
      // innerHeight为元素总高度，一减就是bottom值
      let bottom = innerHeight - (outerHeight + scrollTop + ptrHeight);

      // list-title
      let listTitle = this.$el.querySelector(".list-title");
      let listTopOffsetTop =
        listTitle.offsetTop - ptrHeight + listTitle.clientHeight;

      if (scrollTop - listTopOffsetTop + 10 >= 0) {
        this.showFixedTitle = true;
      } else {
        this.showFixedTitle = false;
      }
      // infiniteHeight 为下拉刷新元素高度，如果进入此高度内，就激活下拉刷新
      if (bottom < infiniteHeight) this.infinite();
    },

    infinite() {
      this.infiniteLoading = true;
      this.onInfinite(this.infiniteDone);
    },

    infiniteDone() {
      this.infiniteLoading = false;
    }
  }
};
</script>

<style lang="less">
@import "./scroll.less";
</style>
