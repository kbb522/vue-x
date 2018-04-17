<template>
  <div class="page">
      <div slot="tab" class="navbar-tab">
        <a v-for="v,i in tabTitle" :class="isShowTab==i?'tabhover':''" @click="tabswitch(i)" href="javascript:;">{{ v }}</a>
      </div>
      <div class="navbar-bd">
        <slot></slot>
      </div>
  </div>
</template>

<style lang="less">
  @import './Navbar.less';
</style>
<script>
  export default {
    data () {
      return {
        tabTitle: [],
        isShowTab: 0
      }
    },
    mounted() {
      let slot = this.$slots.default;
      for(let i = 0; i < slot.length; i++) {
        if(slot[i].tag == "div") {
          this.tabTitle.push(slot[i].data.attrs.name);
          if(slot[i].elm) {
            slot[i].elm.className = "tabhide";
            if(this.isShowTab == i) {
              slot[i].elm.className = "tabshow";
            }
          };
        }
      }
    },
    methods: {
      tabswitch (index) {
        //console.log(index);
        this.isShowTab = index;
        //tabitem
        let child = this.$el.children[1].children;
        for(let k = 0; k < child.length; k++) {
          child[k].className = "tabhide";
          if(k == this.isShowTab) {
            child[k].className = "tabshow";
          }
        }
      }
    }
  }
</script>
