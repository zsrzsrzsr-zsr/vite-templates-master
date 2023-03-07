<template>
  <div>
    <h1>test2</h1>
    <Test1 ref="gridRef" />
  </div>
</template>
<script setup lang="ts">
import {ref, onMounted} from "vue"
import Test1 from './test1.vue'
const gridRef = ref(null)
onMounted(() => {
  console.log('---',gridRef.value);
})
</script>
<style lang='scss' scoped>
</style>