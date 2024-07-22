<template>
  <article class="page page--openspace">
    <header class="page__header">
      <h1 class="heading-1">
        {{ openspace.title }}
      </h1>
      <h3 class="openspace__track">Track {{ openspace.track }} - {{ openspace.schedule }}</h3>
    </header>
    <section class="openspace__speakers openspace__subsection">
      <h2 class="heading-3">Moderador</h2>
      <ul>
        <li v-for="speaker in openspace.speaker">
          <a :href="speaker.link" class="openspace__speaker" rel="noopener noreferrer" target="_blank">
            <img :alt="speaker.name" :src="getImage(speaker.image)" class="openspace__speaker-image">
            {{ speaker.name }}
          </a>
        </li>
      </ul>
    </section>

    <div class="openspace__description  openspace__subsection">
      <h2 class="heading-3">Descripción</h2>
      <p v-for="description in openspace.description">
        {{ description }}
      </p>
    </div>

    <footer class="openspace__footer">
      <nuxt-link class="btn" to="/program">Volver al programa</nuxt-link>
    </footer>

  </article>
</template>
<script lang="ts" setup>
import openspace from '~/data/openspace'
import { useRoute } from '#app'

const route = useRoute()

const getImage = (image: string) => `/i/speakers/${image}`
</script>
<style src="./openspace.scss"></style>
