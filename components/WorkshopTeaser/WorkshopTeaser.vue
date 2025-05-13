<template>
  <nuxt-link v-if="workshop" :to="`/workshop/${id}`">
    {{ (workshop.speaker || []).map((speaker) => speaker.name).join(' & ') }}:
    <strong>{{ workshop.title }}</strong>
  </nuxt-link>
</template>
<script lang="ts" setup>
import workshops from '../../data/workshops'

type Speaker = {
  image: string
  name: string
  link?: string
}

type Workshop = {
  title: string
  speaker: Speaker[]
  description: string[]
  schedule: string
  track: string
  twitter: string[]
}

const props = defineProps({
  id: { type: String, required: true }
})

const workshop: ComputedRef<Workshop | undefined> = computed(() => workshops[props.id])
</script>
