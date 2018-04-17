<template>
  <div :class="{swiper: true, touching: touching, transition: transition}"
    @touchstart="_touchstart($event)"
    @touchmove="_touchmove($event)"
    @touchend="_touchend($event)"
    @transitionend="_transitionend"
  >
      <div class="swiper-inner"
        :style="{transform: 'translate3d('+(-(currentAcitveIndex-1)*100+calcDiff/width*100)+'%,0,0)'}"
      >
          <div class="slide"><img src="../../assets/1.jpg" /></div>
          <div class="slide"><img src="../../assets/2.jpg" /></div>
          <div class="slide"><img src="../../assets/3.jpg" /></div>
          <div class="slide"><img src="../../assets/4.jpg" /></div>
          <div class="slide"><img src="../../assets/5.jpg" /></div>
          <div class="slide"><img src="../../assets/6.jpg" /></div>
      </div>
      <div class="bullets">
        <div :class="{bullet: true, active:currentAcitveIndex === i}"
            v-for="i in bullets" :key="i"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: {
      type: Number,
      default: 1
    },
    autoPlay: {
      type: Number,
      default: 0
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bullets () {
      const r = []
      for (let i = 1; i <= this.amount; i++) {
        r.push(i)
      }
      console.log(r.length)
      return r
    }
  },
  data() {
    return {
      width: 0,
      calcDiff: 0, // 相对移动值
      currentAcitveIndex: this.activeIndex, // 当前页码
      touching: false, //  正在点击中,
      transition: false, // 动画
      amount: 0 // 总数量
    };
  },
  watch: {},
  methods: {
    _touchstart(e) {
      e.preventDefault();
      clearInterval(this.interval);
      // get start point
      this.startX = e.targetTouches[0].pageX;
      this.startTime = +new Date();
    },
    _touchmove(e) {
      this.diffX = e.targetTouches[0].pageX - this.startX;
      /** 原理
       *  1.计算出实际移动值diffX，然后根据它计算出相对移动值，用于translateX 移动图片
       *
       */
      this.calcDiff =
        Math.pow(Math.abs(this.diffX), 0.8) * (this.diffX > 0 ? +1 : -1);

      this.touching = true;
    },
    _touchend(e) {
      this.touching = false;
      this.transition = true; // 这时要开始动画了

      let endTime = +new Date() - this.startTime;
      //   console.log("diffX:" + this.diffX);
      //   console.log("endTime:" + endTime);

      // 如果实际距离过半，或距离大于20但事件小于200ms，就触发
      //   console.log("111:" + (Math.abs(this.diffX) > this.width / 2));
      //   console.log("222:" + (endTime < 200 && Math.abs(this.diffX) > 20));
      if (
        Math.abs(this.diffX) > this.width / 2 ||
        (endTime < 200 && Math.abs(this.diffX) > 20)
      ) {
        // 判断一下向左还是右
        // 同时还要判断到二边的头和尾没有
        if (this.diffX < 0 && this.currentAcitveIndex <= this.amount - 1) {
          this.next();
        }
        if (this.diffX > 0 && this.currentAcitveIndex > 1) {
          this.prev();
        }
      }
      this.diffX = this.calcDiff = 0; // 计算释放位移
    },
    _transitionend() {
      this.transition = false; // 这时要开始动画了
    },
    next() {
      this.transition = true;
      this.currentAcitveIndex++;
    },
    prev() {
      this.transition = true;
      this.currentAcitveIndex--;
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.width = this.$el.getBoundingClientRect().width;
      this.amount = this.$el.querySelectorAll(".slide").length;
    });
  }
};
</script>

<style lang="less" scoped>
@import "./swiper.less";
.transition {
  .swiper-inner {
    transition: transform .3s;
  }
}
</style>
