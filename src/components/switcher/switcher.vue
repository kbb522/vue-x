<template>
  <label class="label-switch">
    <input type="checkbox" v-model="mutableChecked">
    
    <div class="checkbox"></div>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mutableChecked: this.checked
    }
  },
  watch: {
    mutableChecked() {
      this.$emit('change', this.mutableChecked)
      return this.mutableChecked
    }
  },
  methods: {
    toggle () {
      this.mutableChecked ? this.uncheck() : this.check()
    },
    check () {
      this.mutableChecked = true
      this.$emit('check', this)
      this.$emit('change', this)
    },
    uncheck () {
      this.mutableChecked = false
      this.$emit('uncheck', this)
      this.$emit('change', this)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./switcher.less";
</style>
