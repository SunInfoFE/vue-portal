<template>
  <div class="win10-block-tmp tmp1" :style="{backgroundColor: model.backgroundColor}">
    <img src="../../../assets/logo.png">
    <p>helloworld</p>
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
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.win10-block-tmp.tmp1 img{
  width: 50%;
  height: 50%;
  margin: 10px
}
.win10-block-tmp.tmp1 p{
  margin: 0;
}
</style>
