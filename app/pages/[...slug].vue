<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(() => queryCollection('content').path(route.path).first())

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>
    <h1>Page not found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
</template>