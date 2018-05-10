<template>
  <div class="win10-block-tmp tmp3" ref="tmp3">
    <div class="tmp-wrap fade" :style="{'top':`${tmpWrapTop}px`,'height':`${tmpWrapHeight}px`}">
      <div class="tmp-wrap-item" v-for="(item, index) in model" :key="index">
        <div v-if="index === 0 " class="tmp-wrap-card" :style="{backgroundColor: (item.style.backgroundColor) || '#00000000'}">
          {{item}}
        </div>
        <div v-if="index === 1 " class="tmp-wrap-card" :style="{backgroundColor: (item.style.backgroundColor) || '#00000000'}">
          {{item}}
        </div>
        <div v-if="index === 2 " class="tmp-wrap-card" :style="{backgroundColor: (item.style.backgroundColor) || '#00000000'}">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tmp3',
  data() {
    return {
      tmpWrapTop: 0,
      tmpWrapHeight: null
    }
  },
  props: {
    model: {
      type: Array
    }
  },
  methods: {
    getTmpWrapHeight () {
      return this.model.length * 110
    }
  },
  mounted() {
    this.tmpWrapHeight = this.getTmpWrapHeight();
    setTimeout(() => {
      this.tmpWrapTop = -110
    }, 2000);
  }
}
</script>

<style scoped>
.win10-block-tmp.tmp3 img {
  position: absolute;
  width: 50%;
  height: 50%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.win10-block-tmp.tmp3 p {
  position: absolute;
  left: 10px;
  bottom: 5px;
  margin: 0;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}
.tmp-wrap-card {
  widows: 100%;
  height: 110px;
}


</style>
