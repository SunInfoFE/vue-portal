<template>
  <div class="win10-block">
    <grid-layout :layout="layout" :col-num="colnum" :row-height="50" :is-draggable="draggable" :is-resizable="resizable" :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">
      <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" @resized="resized" @moved="moved">
        <Tmp1 v-if="item.type === 1" :model="item.model" />
        <Tmp2 v-if="item.type === 2" :model="item.model" />
        <Tmp3 v-if="item.type === 3" :model="item.model" />
        <Tmp4 v-if="item.type === 4" :model="item.model" />
        <Tmp5 v-if="item.type === 5" :model="item.model" />
        <Tmp6 v-if="item.type === 6" :model="item.model" />
        <Tmp7 v-if="item.type === 7" :model="item.model" />
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { Tmp1, Tmp2, Tmp3, Tmp4, Tmp5, Tmp6, Tmp7 } from './Tmp'
import { GridLayout, GridItem } from 'vue-grid-layout'
export default {
  name: 'Win10Block',
  data() {
    return {
      colnum: 1,
      timer: false
    }
  },
  watch: {
    colnum(val) {
      if (!this.timer) {
        this.colnum = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    }
  },
  props: {
    layout: {
      type: Array
    },
    draggable: {
      type: Boolean,
      default: false
    },
    resizable: {
      type: Boolean,
      default: false
    }
  },
  components: { GridLayout, GridItem, Tmp1, Tmp2, Tmp3, Tmp4, Tmp5, Tmp6, Tmp7 },
  methods: {
    init() {
      this.colnum = parseInt(window.innerWidth / 60)
    },
    moved(i, x, y) {
      let arr = []
      this.layout.map(item => {
        if (item.i === i) {
          let obj = Object.assign({}, item)
          obj.x = x
          obj.y = y
          arr.push(obj)
        } else {
          arr.push(item)
        }
      })
      console.log(arr)
    },
    resized(i, x, y, h, w) {
      let arr = []
      this.layout.map(item => {
        if (item.i === i) {
          let obj = Object.assign({}, item)
          obj.x = x
          obj.y = y
          obj.h = parseInt(h / 58)
          obj.y = y
          arr.push(obj)
        } else {
          arr.push(item)
        }
      })
      console.log(arr)
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.init)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.win10-block {
  font-weight: normal;
}
.win10-block-tmp {
  width: 100%;
  height: 100%;
}
</style>
