<template>
  <div class="win10-block-tmp tmp1" :style="{backgroundColor: (model.style.backgroundColor) || '#00000000'}">
    <img src="../../../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Tmp1',
  data() {
    return {
    }
  },
  props: {
    model: {
      type: Object
    },
    index: {
      type: String,
      default: ''
    }
  },
  methods: {
    showMenu(e) {
      e.preventDefault()
      this.$emit('showMenu', this.index, e)
    }
  }
}
</script>

<style scoped>
.win10-block-tmp.tmp1 {
  position: relative;
}
.win10-block-tmp.tmp1 img{
  position: absolute;
  width: 50%;
  height: 50%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto
}
</style>
