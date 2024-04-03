<template>
  <section class="page page--organization">
    <header class="page__header">
      <h1 class="heading-1">
        <span>
          Organización
        </span>
      </h1>
    </header>
    <div class="page__block container-fluid-900">
      <p>
        La #pulpoCon es un evento nacido en Vigo en 2019 bajo el paragüas de PHPVigo que transciende del lenguage de
        programación y cuyo obvetivo es fomentar las buenas practicas y el <em>clean code</em> independientemente del
        lenguage de programación.
      </p>

      <p>Actualmente esta organizada por <strong class="text-gradient-light">CraftersVigo</strong> y se convierte en un
        evento que mezcla tecnología y gastronomía.</p>

      <p>Nuestro objetivo es claro, seguir fomentando la colaboración, las buenas práctivas y dar a conocer las bondades
        del sector técnológico gallego a través de los ponentes locales, y de Galicia a través de la gastronomia y
        networking que nos hace tan especiales.</p>

    </div>


    <aside class="page--organization__organizers">
      <h2 class="heading-2 mb-5 center">
        Organizadores
      </h2>

      <div class="container-fluid-900">
        <p>La <strong>PulpoCon</strong> se lleva a cabo gracias a muchas personas pero en especial a estas 4 osadas que
          dedican su tiempo de forma altruista para tratar de que el evento sea y salga lo mejor posible.</p>
      </div>

      <div class="page--organization__organizers-content">
        <organizer-person
            v-for="(organizer, index) in organizers"
            :key="organizer.name"
            :data-aos-delay="index * 200"
            :organizer="organizer"
            data-aos="fade-up"
        ></organizer-person>
      </div>
    </aside>
  </section>
</template>

<script lang="ts" setup>
import organizers from '~/data/organizers'
import OrganizerPerson from '../../components/OrganizerPerson'</script>
<style src="./organization.scss"></style>
