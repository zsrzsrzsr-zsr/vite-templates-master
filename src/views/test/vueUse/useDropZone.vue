<template>
    <div>
      <el-button @click="show">切换显隐</el-button>
      <img v-if="showImg" width="200" height="200"
        src="https://img2.baidu.com/it/u=2167395474,3773933499&fm=253&fmt=auto&app=138&f=PNG?w=1018&h=500" alt="">
      <p>请为我点赞 共{{ fabulous }}个赞 <button @click="count">点赞</button></p>
    </div>
  </template>
  <script setup lang='ts'>
  import { ref } from 'vue'
    const fabulous = ref(0)
    const showImg = ref(true)
    const count = () => {
      fabulous.value++
    }
    const show = () => {
      showImg.value = !showImg.value
    }
  </script>