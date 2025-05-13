<template>
  <div class="page-home" id="home">
    <hero-section></hero-section>
    <summary-section></summary-section>
    <sponsors-section></sponsors-section>
    <location-section></location-section>
  </div>
</template>

<script lang="ts" setup>
import HeroSection from '../../components/HeroSection'
import SummarySection from '../../components/SummarySection'
import LocationSection from '../../components/LocationSection'
import SponsorsSection from '../../components/SponsorsSection';

useHead({
  bodyAttrs: {
    class: 'home'
  },
  title: '#pulpoCon25 - Vigo, 18-20 september 2025'
})

</script>
<style src="./index.scss"></style>
