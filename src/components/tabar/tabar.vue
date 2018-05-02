<template>
  <div class="page">
      <div slot="tab" class="tabar-tab">
        <a v-for="item,i in tabTitle" :class="isShowTab==i?'tabarhover':''" :key="i" @click.prevent="tabarswitch(i)" href="#">
          <span class="tabar-icon" :style="'background-image:url('+item.img+')'"></span>
          <span class="tabar-txt">{{ item.name }}</span>
        </a>
      </div>
      <div class="tabar-bd">
        <slot></slot>
      </div>
  </div>
</template>

<style lang="less">
  @import 'Tabar.less';
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
          this.tabTitle.push({
            "name": slot[i].data.attrs.name,
            "img": slot[i].data.attrs.img
          });
          if(slot[i].elm) {
            slot[i].elm.className = "dsn";
            if(this.isShowTab == i) {
              slot[i].elm.className = "block";
            }
          };
        }
      }
    },
    methods: {
      tabarswitch (index) {
        //console.log(index);
        this.isShowTab = index;
        //tabitem
        let child = this.$el.children[1].children;
        for(let k = 0; k < child.length; k++) {
          child[k].className = "dsn";
          if(k == this.isShowTab) {
            child[k].className = "block";
          }
        }
      }
    }
  }
</script>
