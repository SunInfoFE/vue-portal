<template>
  <div>
    <s-layout v-for="(portlet, index) in portlets" :key="index" :portlet="portlet"></s-layout>
  </div>
</template>

<script>
import SLayout from '../components/Layout';

export default {
  name: 'page',
  components: {
    SLayout
  },
  computed: {
    portlets () {
      return this.$store.state.portlets;
    }
  }
};
</script>

<style>
  .s-row {
    color: black;
  }
</style>
