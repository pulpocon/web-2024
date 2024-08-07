<template>
  <section class="sps-section" id="sponsors">
    <div class="container-fluid-1440">
      <header class="sps-section__header">
        <h2 class="sps-section__title" data-aos="fade-up">Patrocinadores</h2>
        <p class="sps-section__description" data-aos="fade-up" data-aos-delay="200">
          #pulpoCon24 es posible gracias a la colaboración de las siguientes empresas:
        </p>
      </header>

      <div class="sps-section__sps">
        <sponsors></sponsors>
      </div>
      <div class="sps-section__sps" style="text-align: center">
        <header class="sps-section__header">
          <h3 class="sps-section__title" style="font-size:2rem">Patrocina la #pulpoCon24</h3>
        </header>
        <a class="btn" href="https://bit.ly/pulpoCon24SponsorES" target="_blank">
          Dossier Patrocinadores
        </a>
        <a class="btn" href="https://bit.ly/pulpoCon24SponsorEN" target="_blank">
          Sponsors Deck
        </a>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import Sponsors from '~/components/Sponsors'

defineProps()

defineEmits()

</script>
<style src="./SponsorsSection.scss"></style>
