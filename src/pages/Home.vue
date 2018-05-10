<template>
  <div class="home">
    <Win10Block :layout="layout" @setlayout="setlayout" @editSize="editSize" @deleteItem="deleteItem"></Win10Block>
  </div>
</template>

<script>
import Win10Block from '@/components/Win10Block/index'
export default {
  name: 'Home',
  data() {
    return {
      layout: [
        { 'x': 0, 'y': 0, 'w': 1, 'h': 1, i: '1', type: 1, path: '/', 'model': [{ style: { backgroundColor: '#ff0000' }, image: require('../assets/logo.png') }, { fullImage: '' }] },
        { 'x': 2, 'y': 2, 'w': 2, 'h': 2, i: '2', type: 2, 'model': [{ style: { backgroundColor: '#ff0000' } }, { fullImage: '' }] },
        { 'x': 4, 'y': 4, 'w': 4, 'h': 2, i: '3', type: 3, path: '/', 'model': [{ style: { backgroundColor: '#ff0000' } }, { style: { backgroundColor: '#ffff00' } }, { style: { backgroundColor: 'blue' } }] }
      ]
    }
  },
  methods: {
    setlayout(arr) {
      this.layout = arr
    },
    editSize(size) {
      console.log(size)
    },
    deleteItem(index) {
      console.log(index)
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
