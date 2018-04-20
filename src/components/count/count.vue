<template>
    <div class="count-box">
      <div class="count-l">
        <slot></slot>
      </div>
      <div class="count-r">
        <span class="count-minus" @click="minus">-</span>
        <input class="count-input" type="text" v-model="val" readonly />
        <span class="count-add" @click="add">+</span>
      </div>
    </div>
</template>

<style lang="less">
  @import 'Count.less';
</style>
<script>
  export default {
    props: {
      num: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        val: this.num
      }
    },
    methods: {
      add () {
        this.val += 1
      },
      minus () {
        this.val -= 1
        if (this.val <= 0){
          this.val = 1
        }
      }
    }
  }
</script>
