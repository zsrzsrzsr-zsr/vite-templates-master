<template>
  <div class="container">
    <h2>计数器</h2>
    ~ {{ timer }} ~ {{ className }}
    <h1 :[className]="timer">动态属性</h1>
    <h2>{{ state.default }}</h2>
    <el-button @click="changeNum">{{ state.num }} ~ {{ num }}~次点击</el-button>
    <h2>{{ num }}次点击</h2>
    <h2>{{ object.foo.value + 1 }} ~ {{ foo + 1 }}</h2>
    <h2>{{ num2 }}</h2>
    <h2>{{ now }}</h2>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive,computed, onMounted, onBeforeUnmount } from "vue"
// ref() 能创造一种对任意值的 “引用”，并能够在不丢失响应性的前提下传递这些引用。这个功能很重要，因为它经常用于将逻辑提取到 组合函数 中
let timer = ref(0)
// reactive() 函数创建一个响应式对象或数组
// reactive() 返回的是一个原始对象的 Proxy
const state = reactive({default: true,num: 0})
let className = ref<string>(`动态属性${timer.value}A`)

//onMounted钩子可以用来在组件完成初始渲染并创建DOM节点后（组件挂载完成后）运行代码
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
// ref解包
const object = {foo:ref(0)}
const {foo} = object
// 
onBeforeUnmount(() => {
  clearInterval(timer.value) // 离开页面清除定时器
  timer.value = 0
})
const getTime = () => {
  timer.value++
  className.value = '动态属性'+timer.value+'A'
}
let {num} = state
// 将响应式对象的属性赋值或解构至本地变量时，或是将该属性传入一个函数时，会失去响应性
const changeNum = () => {
  state.num +=2  // 没有该操作的话，state.num 会一直保持初始值 0
  num++
}
let num2 = computed(() => {
  return timer.value
})
// 下面的计算属性永远不会更新，因为 Date.now() 并不是一个响应式依赖 
let now = computed(()=>Date.now())
</script>
<style lang='scss' scoped>
.container{
  width:100%;
  height:100%;
  padding:20px;
}
</style>