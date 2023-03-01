<template>
  <div>
    <h2>计数器</h2>
    ~ {{ timer }} ~ {{ className }}
    <h1 :[className]="timer">动态属性</h1>
  </div>
</template>
<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount } from "vue"
const timer = ref(0)
let className = ref<string>(`动态属性${timer.value}A`)
onMounted(() => {
  // setTimeout定时器，只能用一次，一次性定时器。
  // setInterval定时器，可以重复执行给定的函数。
  // javaScript代码是从上到下，逐行执行，那到了定时器这行我们的进程会不会等定时器执行完了再执行定时器后面的代码呢？答案是不会等！
  // 遇到定时器，会将定时器加入到任务队列中(宏任务)，等所有代码执行完了，程序会看一下队列中还有什么没有完成的 ，如果有没完成的，就执行一下。
  // 浏览器会将 setTimeout 或 setInterval 的五层或更多层嵌套调用（调用五次之后）的最小延时限制在 4ms。这是历史遗留问题。
  setInterval(() => {
    getTime()
  },2000)
})
onBeforeUnmount(() => {
  clearInterval(timer.value) // 离开页面清除定时器
  timer.value = 0
})
const getTime = () => {
  timer.value++
  className.value = '动态属性'+timer.value+'A'
}
</script>
<style lang='scss' scoped>
</style>