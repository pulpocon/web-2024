<template>
  <article class="page page--talk">
    <header class="page__header">
      <h1 class="heading-1">
        {{ talk.title }}
      </h1>
      <h3 class="talk__track">{{ talk.schedule }}</h3>
    </header>
    <section v-if="talk.speaker" class="talk__speakers talk__subsection">
      <h2 class="heading-3">Speaker</h2>
      <a :href="talk.speaker.link" class="talk__speaker" rel="noopener noreferrer" target="_blank">
        <img :alt="talk.speaker.name" :src="image" class="talk__speaker-image">
        {{ talk.speaker.name }}
      </a>
    </section>

    <div class="talk__description  talk__subsection">
      <h2 class="heading-3">Descripción</h2>
      <p v-for="description in talk.description">
        {{ description }}
      </p>
    </div>

    <footer class="talk__footer">
      <nuxt-link class="btn" to="/program">Volver al programa</nuxt-link>
    </footer>

  </article>
</template>
<script lang="ts" setup>
import talks from '~/data/talks'
import { computed, ComputedRef } from 'vue'
import { useRoute } from '#app'

const route = useRoute()

const talk: ComputedRef = computed(() => talks[route.params.id] || {})

const image: ComputedRef<string | undefined> = computed(() => {
  if (!talk.value.speaker) return undefined
  return `/i/speakers/${talk.value.speaker.image}`
})
</script>
<style src="./talk.scss"></style>
