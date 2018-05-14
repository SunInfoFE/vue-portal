<template>
  <s-row>
    <s-col v-for="(item, index) in portlet.content" :key="index" :span="item.col" :style="{'height': `${portlet.height}px` || '100%'}">
      <template v-if="item.children">
         <s-layout-tree v-for="(p, i) in item.children" :key="i" :portlet="p"></s-layout-tree>
      </template>
      <template v-else>
        <div style=""></div>
        <p style="color:#000;">{{portlet.height}}</p>
      </template>
    </s-col>
  </s-row>
</template>

<script>
export default {
  name: 'SLayoutTree',
  props: {
    portlet: Array
  },
  mounted() {
  }
};
</script>

<style>

</style>
