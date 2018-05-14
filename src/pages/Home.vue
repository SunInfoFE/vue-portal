<template>
  <div class="home">
    <div v-if="showDiyPage" class="diypage fade" :style="{'opacity':diypageopacity}">
      <s-layout :portlets="portlets"></s-layout>
      <div style="width:300px;height:300px;background:#000;" @click="back"></div>
    </div>
    <div v-else>
      <Win10Block :layout="layout" @setlayout="setlayout" @blockClick="blockClick" @editSize="editSize" @deleteItem="deleteItem"></Win10Block>
    </div>
  </div>
</template>

<script>
import Win10Block from '@/components/Win10Block/index'
import SLayout from '@/components/Layout/index';

export default {
  name: 'Home',
  data() {
    return {
      showDiyPage: false,
      diypageopacity: 0,
      layout: [
        { 'x': 0, 'y': 0, 'w': 1, 'h': 1, i: '1', type: 1, 'model': [{ backgroundColor: '#ff0000', image: require('../assets/logo.png'), text: { show: true, color: '#fff' } }, { fullImage: require('../assets/logo.png'), text: { show: true, color: '#ff0000' } }] },
        { 'x': 2, 'y': 2, 'w': 2, 'h': 2, i: '2', type: 2, 'model': [{ backgroundColor: '#ff0000', image: require('../assets/logo.png'), text: { show: true, color: '#fff' } }, { fullImage: require('../assets/logo.png'), text: { show: true, color: '#ff0000' } }] },
        { 'x': 4, 'y': 4, 'w': 4, 'h': 2, i: '3', type: 3, 'model': [{ backgroundColor: '#ff0000', image: require('../assets/logo.png'), text: { show: true, color: '#fff' } }, { fullImage: require('../assets/logo.png'), text: { show: true, color: '#ff0000' } }] }
      ],
      portlets: [{
        height: 360,
        content: [
          {
            col: 8,
            children: [
              {
                height: 120,
                content: [
                  {
                    col: 8,
                    children: [
                      {
                        height: 40,
                        content: [
                          { col: 8, component: 'AccountStatus' },
                          { col: 8, component: 'AccountStatus' },
                          { col: 8, component: 'AccountStatus' }
                        ]
                      },
                      {
                        height: 40,
                        content: [
                          { col: 8, component: 'AccountStatus' },
                          { col: 8, component: 'AccountStatus' },
                          { col: 8, component: 'AccountStatus' }
                        ]
                      },
                      {
                        height: 40,
                        content: [
                          { col: 8, component: 'AccountStatus' },
                          { col: 8, component: 'AccountStatus' },
                          { col: 8, component: 'AccountStatus' }
                        ]
                      }
                    ]
                  },
                  { col: 8, component: 'AccountStatus' },
                  { col: 8, component: 'AccountStatus' }
                ]
              },
              {
                height: 120,
                content: [
                  { col: 8, component: 'AccountStatus' },
                  { col: 8, component: 'AccountStatus' },
                  { col: 8, component: 'AccountStatus' }
                ]
              },
              {
                height: 120,
                content: [
                  { col: 8, component: 'AccountStatus' },
                  { col: 8, component: 'AccountStatus' },
                  { col: 8, component: 'AccountStatus' }
                ]
              }
            ]
          },
          { col: 8, component: 'AccountStatus' },
          { col: 8, component: 'AccountStatus' }
        ]
      }, {
        height: 360,
        content: [
          { col: 16, component: 'AccountStatus' },
          { col: 8, component: 'AccountStatus' }
        ]
      }]
    }
  },
  methods: {
    setlayout(arr) {
      this.layout = arr
    },
    editSize(size, index) {
      switch (size) {
        case 'small':
          let arr1 = [];
          this.layout.map((item) => {
            if (item.i === index) {
              let obj = Object.assign({}, item)
              obj.w = 1
              obj.h = 1
              obj.type = 1
              arr1.push(obj)
            } else {
              arr1.push(item)
            }
          })
          this.setlayout(arr1)
          break;
        case 'mid':
          let arr2 = [];
          this.layout.map((item) => {
            if (item.i === index) {
              let obj = Object.assign({}, item)
              obj.w = 2
              obj.h = 2
              obj.type = 2
              arr2.push(obj)
            } else {
              arr2.push(item)
            }
          })
          this.setlayout(arr2)
          break;
        case 'big':
          let arr3 = [];
          this.layout.map((item) => {
            if (item.i === index) {
              let obj = Object.assign({}, item)
              obj.w = 4
              obj.h = 2
              obj.type = 3
              arr3.push(obj)
            } else {
              arr3.push(item)
            }
          })
          this.setlayout(arr3)
          break;
        default:
          break;
      }
    },
    deleteItem(index) {
      let arr = [];
      this.layout.map((item) => {
        if (item.i !== index) {
          arr.push(item)
        }
      })
      this.setlayout(arr)
    },
    blockClick(item) {
      console.log(item)
      this.showDiyPage = true
      setTimeout(() => {
        this.diypageopacity = 1
      }, 100);
    },
    back() {
      this.showDiyPage = false
      this.diypageopacity = 0
    }
  },
  components: { Win10Block, SLayout }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.diypage.fade {
  transition: all 1s cubic-bezier(0.23, -0.01, 0.18, 1.01);
}
</style>
