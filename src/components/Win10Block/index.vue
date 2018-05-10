<template>
  <div class="win10-block">
    <grid-layout :layout="layout" :col-num="colnum" :row-height="50" :is-draggable="draggable" :is-resizable="false" :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">
      <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" @resized="resized" @moved="moved">
        <div :class="['win10-block-container','fade']">
          <Tmp1 v-if="item.type === 1" :model="item.model" />
          <Tmp2 v-if="item.type === 2" :model="item.model" />
          <Tmp3 v-if="item.type === 3" :model="item.model" />
          <div class="win10-block-tmp-mask" :data-index="item.i" @contextmenu="showMenu" />
        </div>
      </grid-item>
    </grid-layout>
    <vue-context-menu :contextMenuData="contextMenuData" @smail="editSize('smail')" @mid="editSize('mid')" @big="editSize('big')" @deleteItem="deleteItem">
    </vue-context-menu>
  </div>
</template>

<script>
/* eslint-disable */
import { Tmp1, Tmp2, Tmp3 } from './Tmp'
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
      draggable: true,
      newlayout: [],
      isActive: false,
      contextMenuData: {
        menuName: 'demo',
        axios: {
          x: null,
          y: null
        },
        menulists: [
          {
            icoName: 'fa fa-home fa-fw', // icon (icon图标 )
            btnName: '调整大小', // The name of the menu option (菜单名称)
            menuName: 'editSize',
            child: [
              {
                fnHandler: 'smail',
                icoName: 'fa fa-home fa-fw',
                btnName: '小',
                menuName: 'smail',
              },
              {
                fnHandler: 'mid',
                icoName: 'fa fa-home fa-fw',
                btnName: '中',
                menuName: 'mid'
              },
              {
                fnHandler: 'big',
                icoName: 'fa fa-home fa-fw',
                btnName: '大',
                menuName: 'big'
              }
            ]
          },
          {
            fnHandler: 'deleteItem',
            icoName: 'fa fa-home fa-fw',
            btnName: '删除'
          }
        ]
      }
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
        { 'x': 2, 'y': 2, 'w': 2, 'h': 2, i: '2', type: 2, 'model': { style: { backgroundColor: '#ff0000' } } },
        { 'x': 4, 'y': 4, 'w': 2, 'h': 2, i: '3', type: 3, 'model': { style: { backgroundColor: '#ff0000' } } }
      ]
    }
  },
  components: { GridLayout, GridItem, Tmp1, Tmp2, Tmp3 },
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
      this.$emit('setlayout', arr);
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
      this.$emit('setlayout', arr);
    },
    showMenu(e) {
      e.preventDefault()
      let i = e.target.dataset.index;
      let x = e.clientX
      let y = e.clientY
      this.contextMenuData.axios = {
        x, y
      }
      // console.log(e.target.dataset.index, x, y)
    },
    editSize() {
      console.log('editSize')
    },
    deleteItem() {
      console.log('deleteItem!')
    },

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
  position: relative;
  width: 100%;
  height: 100%;
}
.win10-block-tmp-mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0%;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: #00000000;
  z-index: 999;
}
.win10-block-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.win10-block-container:active {
  box-shadow: 0px 5px 20px rgb(151, 148, 148);
}
.fade {
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
</style>
