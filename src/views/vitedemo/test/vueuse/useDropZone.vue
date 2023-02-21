<template>
  <h2>案例</h2>
  <div><button @click="switchBtn">展示/隐藏</button></div>
  <img v-if="showImg" width="200" height="200"
      src="https://img2.baidu.com/it/u=2167395474,3773933499&fm=253&fmt=auto&app=138&f=PNG?w=1018&h=500" alt="">
  <p>请为我点赞 共{{ fabulous }}个赞 <button @click="give">点赞</button></p>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
//切换图片展示
let showImg = ref(true)
const switchBtn = () => {
    showImg.value = !showImg.value
}
//点赞
let fabulous = ref(0)
const give = () => {
    fabulous.value++
}
</script>
<style lang='less' scoped>
</style>