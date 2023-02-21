<template>
  <div ref="dropZoneRef">
    Drop files here
    <h1>{{ title }}</h1>
  </div>
</template>
<script setup lang="ts">
import { useDropZone,useDark,useTitle } from '@vueuse/core'

const dropZoneRef = ref<HTMLDivElement>()

function onDrop(files: File[] | null) {
  // called when files are dropped on zone
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

const isDark = useDark()
const title = useTitle('Set title')

watch(isDark, () => {
  title.value = isDark.value ? '🌙 Good evening!' : '☀️ Good morning!'
})

</script>


