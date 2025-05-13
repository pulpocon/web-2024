<template>
  <article class="organizer">
    <header>
      <img :alt="organizer.name" :src="organizer.image" class="organizer__image">
      <h2 class="organizer__name">
        {{ organizer.name }}
      </h2>
    </header>
    <h3 class="organizer__position">{{ organizer.position }}</h3>

    <ul class="organizer__social">
      <li v-if="organizer.social?.twitter" class="organizer__social-link">
        <a :href="organizer.social?.twitter" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
      </li>

      <li v-if="organizer.social?.linkedin" class="organizer__social-link">
        <a :href="organizer.social?.linkedin" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
    </ul>

  </article>
</template>

<script lang="ts" setup>

type Organizer = {
  name: string
  position: string
  bio: string
  image: URL
  social?: {
    linkedin?: string
    twitter?: string
  }
}

defineProps({
  organizer: { type: Object as () => Organizer, required: true }
})

</script>
<style src="./OrganizerPerson.scss"></style>
