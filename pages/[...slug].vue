<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <main class="markdown">
    <ContentRenderer v-if="page" :value="page" />
  </main>
</template>

<style scoped>

</style>