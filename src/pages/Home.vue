<template>
  <div class="home">
    <Win10Block :layout="layout" :draggable="true" :resizable="true" @setlayout="setlayout"></Win10Block>
  </div>
</template>

<script>
import Win10Block from '@/components/Win10Block/index'

export default {
  name: 'Home',
  data() {
    return {
      layout: [
        { 'x': 0, 'y': 0, 'w': 2, 'h': 2, i: '1', type: 1, 'model': { style: { backgroundColor: '#ff0000' } } },
        { 'x': 2, 'y': 2, 'w': 2, 'h': 2, i: '2', type: 2, 'model': { style: { backgroundColor: '#ff0000' } } },
        { 'x': 4, 'y': 4, 'w': 2, 'h': 2, i: '3', type: 3, 'model': { style: { backgroundColor: '#ff0000' } } },
        { 'x': 6, 'y': 6, 'w': 2, 'h': 2, i: '4', type: 4, 'model': { style: { backgroundColor: '#ff0000' } } },
        { 'x': 8, 'y': 8, 'w': 2, 'h': 2, i: '5', type: 5, 'model': { style: { backgroundColor: '#ff0000' } } },
        { 'x': 10, 'y': 10, 'w': 2, 'h': 2, i: '6', type: 6, 'model': { style: { backgroundColor: '#ff0000' } } },
        { 'x': 12, 'y': 12, 'w': 2, 'h': 2, i: '7', type: 7, 'model': { style: { backgroundColor: '#ff0000' } } },
        { 'x': 14, 'y': 14, 'w': 2, 'h': 2, i: '8', type: 1, 'model': { style: { backgroundColor: '#ff0000' } } },
        { 'x': 16, 'y': 16, 'w': 2, 'h': 2, i: '9', type: 1, 'model': { style: { backgroundColor: '#ff0000' } } }
      ]
    }
  },
  methods: {
    setlayout(arr) {
      this.layout = arr
    }
  },
  components: { Win10Block }
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
</style>
