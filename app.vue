
<template>
  <n-config-provider :theme="computedTheme" class="typearea">
    <n-global-style />
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, darkTheme, NGlobalStyle, lightTheme } from 'naive-ui'
import { throwError } from 'naive-ui/es/_utils'
import { computed } from 'vue'
import useTheme from '~/composables/useTheme'
const { theme } = useTheme()
// 切换主题
const computedTheme = computed(() => {
  return theme.value === 'light' ? lightTheme : darkTheme
})
</script>
<style lang="scss" scoped>
</style>
