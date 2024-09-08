<template>
  <nuxt-link v-if="talk" :to="`/talk/${id}`">
    {{ (talk.speaker || []).map((speaker) => speaker.name).join(' & ') }}:
    <strong>{{ talk.title }}</strong>
  </nuxt-link>
</template>
<script lang="ts" setup>
import { Talk } from '~/data/typings'
import { ComputedRef } from 'vue'
import talks from '~/data/talks'

const props = defineProps({
  id: { type: String, required: true }
})

const talk: ComputedRef<Talk | undefined> = computed(() => talks[props.id])
</script>
