<template>
  <article class="page page--workshop">
    <header class="page__header">
      <h1 class="heading-1">
        {{ workshop.title }}
      </h1>
      <h3 class="workshop__track">Track {{ workshop.track }} - {{ workshop.schedule }}</h3>
    </header>
    <section v-if="workshop.speaker?.length > 0" class="workshop__speakers workshop__subsection">
      <h2 class="heading-3">{{ workshop.speaker.length > 1 ? 'Speakers' : 'Speaker' }}</h2>
      <ul>
        <li v-for="speaker in workshop.speaker">
          <a :href="speaker.link" class="workshop__speaker" rel="noopener noreferrer" target="_blank">
            <img :alt="speaker.name" :src="getImage(speaker.image)" class="workshop__speaker-image">
            {{ speaker.name }}
          </a>
        </li>
      </ul>
    </section>

    <div class="workshop__description  workshop__subsection">
      <h2 class="heading-3">Descripción</h2>
      <p v-for="description in workshop.description">
        {{ description }}
      </p>
    </div>

    <footer class="workshop__footer">
      <nuxt-link class="btn" to="/program">Volver al programa</nuxt-link>
    </footer>

  </article>
</template>
<script lang="ts" setup>
import workshops from '../../data/workshops'
import { useRoute } from '#app'

const route = useRoute()

const workshop: ComputedRef = computed(() => workshops[route.params.id] || {})

const getImage = (image: string) => `/i/speakers/${image}`
</script>
<style src="./workshop.scss"></style>
