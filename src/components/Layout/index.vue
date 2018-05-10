<template>
  <s-row>
    <s-col v-for="(size, index) in portlet.size" :key="index" :span="size">
      <template v-if="portlet.content[index].size">
        <s-layout :portlet="portlet.content[index]"></s-layout>
      </template>
      <template v-else>
        <component :is="portlet.content[index]"></component>
      </template>
    </s-col>
  </s-row>
</template>

<script>
export default {
  name: 'SLayout',
  props: {
    portlet: Object
  }
};
</script>

<style>

</style>
