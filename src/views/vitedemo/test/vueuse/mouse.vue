<template>
  <div>
    <h1>鼠标位置：{{ x }} x {{ y }}</h1>
  </div>
</template>
<script setup lang='ts'>
import {useMouse} from '@vueuse/core'
const {x,y} = useMouse()

</script>
<style lang='scss' scoped>
</style>