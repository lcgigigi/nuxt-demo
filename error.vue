<template>
  <div>
    <!-- {{error.message}} -->
    <n-result status="418" title="418 我是个杯具" :description="error.message">
      <template #footer>
        <n-button @click="handleError">接受真相就是这么简单</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup lang="ts">
import {NResult,NButton} from 'naive-ui'
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>