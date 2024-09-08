<template>
  <article class="page page--talk">
    <header class="page__header">
      <h1 class="heading-1">
        {{ talk.title }}
      </h1>
      <h3 class="talk__track">{{ talk.schedule }}</h3>
    </header>
    <section v-if="talk.speaker" class="talk__speakers talk__subsection">
      <h2 class="heading-3">{{ talk.speaker.length > 1 ? 'Speakers' : 'Speaker' }}</h2>
      <ul>
        <li v-for="speaker in talk.speaker">
          <a :href="speaker.link" class="talk__speaker" rel="noopener noreferrer" target="_blank">
            <img :alt="speaker.name" :src="getImage(speaker.image)" class="talk__speaker-image">
            {{ speaker.name }}
          </a>
        </li>
      </ul>
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

const getImage = (image: string) => `/i/speakers/${image}`
</script>
<style src="./talk.scss"></style>
