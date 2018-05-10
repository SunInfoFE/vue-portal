<template>
  <div class="win10-block-tmp tmp2" :style="{backgroundColor: (model.style.backgroundColor) || '#00000000'}">
    <img src="../../../assets/logo.png">
    <p>helloworld</p>
  </div>
</template>

<script>
export default {
  name: 'Tmp2',
  data() {
    return {
    }
  },
  props: {
    model: {
      type: Object
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.win10-block-tmp.tmp2 img{
  position: absolute;
  width: 50%;
  height: 50%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto
}
.win10-block-tmp.tmp2 p{
  position: absolute;
  left: 10px;
  bottom: 5px;
  margin: 0;
  color: #fff;
  font-size: 12px
}
</style>
