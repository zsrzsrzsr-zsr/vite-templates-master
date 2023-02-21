<template>
  <div id="app">
    <h3>鼠标位置: {{x}} x {{y}}</h3>
    <!-- <p>Interval fired: {{ counter }}</p> -->
  </div>
</template>
<script setup lang="ts">
import { useMouse, usePreferredDark, useLocalStorage  } from '@vueuse/core'
import { reactive } from 'vue'
// import { useInterval } from '.'

const { x, y } = useMouse()
const mouse = useMouse()
const mouse2 = reactive(useMouse())
// const { counter, pause, resume } = useInterval(200, {controls: true})

console.log('---111---',mouse,'x:',mouse.x.value,'y:',mouse.y.value)
console.log('---222---', mouse2, 'x:',mouse2.x, 'y:',mouse2.y)


const isDark = usePreferredDark()
console.log('---333---', isDark)
console.log('--33---1', isDark.value)


const store = useLocalStorage(
  'my-storsge',
  {
    name:'Apple',
    color:'red'
  }
)
console.log('---444---',store)
console.log('--44---1', store.value,store.value.name, store.value.color)



// counter 一个 Ref 对象，它是响应式的，counter.value等于已经计数的次数
// pause() 暂停
// resume() 恢复 
</script>