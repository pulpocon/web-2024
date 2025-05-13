<template>
  <nuxt-link v-if="talk" :to="`/talk/${id}`">
    {{ (talk.speaker || []).map((speaker) => speaker.name).join(' & ') }}:
    <strong>{{ talk.title }}</strong>
  </nuxt-link>
</template>
<script lang="ts" setup>
import talks from '../../data/talks'

type Speaker = {
  image: string
  name: string
  link?: string
}

type Talk = {
  title: string
  speaker: Speaker[]
  description: string[]
  schedule: string
  twitter: string
}

const props = defineProps({
  id: { type: String, required: true }
})

const talk: ComputedRef<Talk | undefined> = computed(() => talks[props.id])
</script>
