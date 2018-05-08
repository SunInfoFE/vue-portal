<template>
  <div class="win10-block">
    <grid-layout :layout="layout" :col-num="colnum" :row-height="50" :is-draggable="draggable" :is-resizable="resizable" :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">
      <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :maxW="6" :maxH="3" :key="item.i" @resized="resized" @moved="moved">
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
/* eslint-disable */
import { Tmp1, Tmp2, Tmp3, Tmp4, Tmp5, Tmp6, Tmp7 } from './Tmp'
import { GridLayout, GridItem } from 'vue-grid-layout'
export default {
  name: 'Win10Block',
  data() {
    return {
      colnum: 1,
      timer: false,
      totalY: 0,
      prevlayout: [],
      layoutwidth: 0,
      newlayout: []
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
      type: Array,
      default: [
        { 'x': 0, 'y': 0, 'w': 2, 'h': 2, i: '1', type: 1, 'model': { style: { backgroundColor: '#ff0000' } } },
        { 'x': 2, 'y': 2, 'w': 2, 'h': 2, i: '2', type: 2, 'model': { backgroundColor: '#ff0000' } },
        { 'x': 4, 'y': 4, 'w': 2, 'h': 2, i: '3', type: 3, 'model': { backgroundColor: '#ff0000' } },
        { 'x': 6, 'y': 6, 'w': 2, 'h': 2, i: '4', type: 4, 'model': { backgroundColor: '#ff0000' } },
        { 'x': 8, 'y': 8, 'w': 2, 'h': 2, i: '5', type: 5, 'model': { backgroundColor: '#ff0000' } },
        { 'x': 10, 'y': 10, 'w': 2, 'h': 2, i: '6', type: 6, 'model': { backgroundColor: '#ff0000' } },
        { 'x': 12, 'y': 12, 'w': 2, 'h': 2, i: '7', type: 7, 'model': { backgroundColor: '#ff0000' } },
        { 'x': 14, 'y': 14, 'w': 2, 'h': 2, i: '8', type: 1, 'model': { backgroundColor: '#ff0000' } },
        { 'x': 16, 'y': 16, 'w': 2, 'h': 2, i: '9', type: 1, 'model': { backgroundColor: '#ff0000' } }
      ]
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
  watch: {
    colnum(val) {
      // 写到watch内只监测整型变换，减少监测浮点类型所用开销。
      if (this.layoutwidth > val) {
        let arr = []
        let newlayoutlast = this.newlayout[this.newlayout.length - 1]
        this.layout.map((item, index) => {
          if (item.i === newlayoutlast.i) {
            let obj = Object.assign({}, item)
            obj.x = 0
            obj.y = newlayoutlast.h
            arr.push(obj)
          } else {
            arr.push(item)
          }
        })
        if (this.prevlayout.length === 0) {
          this.prevlayout = this.layout
        }
        this.$emit('setlayout', arr);
      } else if (this.layoutwidth < val) {
        if (this.prevlayout.length === 0) {
          this.prevlayout = this.layout
        } else {
          let arr = []
          let i = 0;
          this.layout.map((item, index) => {
            if (item !== this.prevlayout[index]) {
              let obj = Object.assign({}, item)
              obj = this.prevlayout[index]
              arr.push(obj)
            } else {
              arr.push(item)
            }
          })
          this.$emit('setlayout', arr);
        }
      }
    }
  },
  methods: {
    init() {
      this.colnum = parseInt(window.innerWidth / 60)
      // 1. layout宽度由哪一行确定
      let layoutY = []
      this.layout.map(item => {
        layoutY.push(item.y)
      })
      let json = layoutY.reduce((m, n) => (m[n]++ || (m[n] = 1), m), {})
      let number = ''
      let num = 0
      for (let j in json) {
        if (json[j] > num) {
          num = json[j]
          number = j
        }
      }
      // 2. 取到确定宽度的行，对当前数组是那一行的总宽度进行计算
      this.layoutwidth = 0
      this.newlayout = []
      this.layout.map(item => {
        if (item.y === parseInt(number)) {
          this.layoutwidth += item.w
          this.newlayout.push(item);
        }
      })
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
  },
  beforeUpdate() {
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
