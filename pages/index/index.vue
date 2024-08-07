<template>
  <div class="page-home" id="home">
    <hero-section></hero-section>
    <summary-section></summary-section>
    <sponsors-section></sponsors-section>
    <location-section></location-section>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import HeroSection from '../../components/HeroSection'
import SummarySection from '../../components/SummarySection'
import LocationSection from '../../components/LocationSection'
import SponsorsSection from '../../components/SponsorsSection';

useHead({
  bodyAttrs: {
    class: 'home'
  },
  title: '#pulpoCon24 - Vigo, 19, 20 y 21 septiembre 2024'
})

</script>
<style src="./index.scss"></style>
