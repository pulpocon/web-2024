<template>
  <footer class="web-footer">
    <div class="web-footer__content container-fluid-1440">
      <div class="event-organizer">
        <h3 class="event-organizer__title">
          Organizan
        </h3>
        <div class="event-organizer__logos">
          <a class="event-organizer__link event-organizer__link--craftersvigo" href="https://twitter.com/CraftersVigo">
            <logo-crafters-vigo color="#fff"></logo-crafters-vigo>
          </a>
          <a class="event-organizer__link event-organizer__link--aindustriosa"
             href="https://intranet.aindustriosa.org/">
            <logo-aindustriosa color="#fff"></logo-aindustriosa>
          </a>
          <a class="event-organizer__link event-organizer__link--vigotech" href="https://vigotech.org/">
            <logo-vigo-tech color="#fff"></logo-vigo-tech>
          </a>
        </div>

      </div>
    </div>
    <div class="web-footer__links container-fluid-1440">
      <nuxt-link to="/codigo-de-conducta">
        Código de conducta
      </nuxt-link>

      <a href="mailto:hello@pulpocon.es">
        hello@pulpocon.es
      </a>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import LogoCraftersVigo from '~/components/Logos/LogoCraftersVigo.vue'
import LogoVigoTech from '~/components/Logos/LogoVigoTech.vue'
import LogoAindustriosa from '~/components/Logos/LogoAindustriosa.vue'</script>
<style src="./WebFooter.scss"></style>
