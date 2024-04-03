<template>
  <div class="page-home">
    <hero-section></hero-section>
    <summary-section></summary-section>
    <location-section></location-section>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import HeroSection from '../../components/HeroSection'
import SummarySection from '../../components/SummarySection'
import LocationSection from '../../components/LocationSection'

useHead({
  bodyAttrs: {
    class: 'home'
  },
  title: '#pulpoCon24 - Vigo, 19, 20 y 21 septiembre 2024'
})

</script>
<style src="./index.scss"></style>
