<template>
  <nuxt-link v-if="workshop" :to="`/workshop/${id}`">
    {{ (workshop.speaker || []).map((speaker) => speaker.name).join(' & ') }}:
    <strong>{{ workshop.title }}</strong>
  </nuxt-link>
</template>
<script lang="ts" setup>
import { Workshop } from '~/data/typings'
import { ComputedRef } from 'vue'
import workshops from '~/data/workshops'

const props = defineProps({
  id: { type: String, required: true }
})

const workshop: ComputedRef<Workshop | undefined> = computed(() => workshops[props.id])
</script>
