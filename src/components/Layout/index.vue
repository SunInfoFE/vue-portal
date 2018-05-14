<template>
  <div>
    <s-layout-tree v-for="(portlet, index) in portlets" :key="index" :portlet="portlet"></s-layout-tree>
  </div>
</template>

<script>
import SLayoutTree from './Tree'
export default {
  name: 'SLayout',
  props: {
    portlets: Array
  },
  components: {
    SLayoutTree
  },
  mounted() {
  }
};
</script>

<style>

</style>
