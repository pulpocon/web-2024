<template>
  <NuxtLayout name="default">
    ERROR
  </NuxtLayout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import App from './app.vue'

export default defineComponent({
  name: 'Error',
  components: {
    App
  },
  setup() {
    useHead({
      bodyAttrs: {
        class: 'page-error'
      }
    })
  }
})
</script>

