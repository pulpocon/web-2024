<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'default'
})
</script>
