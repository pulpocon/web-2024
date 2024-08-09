<template>
  <section class="page page--program">
    <header class="page__header">
      <h1 class="heading-1">
        <span>
          Programa provisional
        </span>
      </h1>
    </header>
    <section class="program-day">
      <header>
        <h2 class="heading-3">
          Jueves, 19 de septiembre 2024
        </h2>
      </header>
      <div class="program-day__table-wrapper">
        <table class="program-day__table">
          <tr class="program-day__table-header">
            <th>&nbsp;</th>
            <th>
              Track CODIUM
            </th>
            <th>
                Jardín / Salón
            </th>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
            <td class="program-day__table-title" colspan="2">
              Badge pickup & Breakfast 🪪☕
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time">
              09:30<br>11:30
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="legacy-projects"/>
            </td>
            <td class="program-day__table-empty">
              &nbsp;
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--break">
            <td class="program-day__table-time">
              11:30<br>12:00
            </td>
            <td class="program-day__table-title" colspan="2">
              Coffee Break ☕
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time">
              12:00<br>14:00
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="legacy-projects"/>
            </td>
            <td class="program-day__table-empty">
              &nbsp;
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--lunch">
            <td class="program-day__table-time">
              14:00<br>16:00
            </td>
            <td class="program-day__table-title" colspan="2">
              Lunch 🍽️
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot  program-day__table-slot--3h program-day__table-slot--event">
            <td class="program-day__table-time">
              16:00<br>19:00
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="legacy-projects"/>
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/openspace">
                Open Space
              </nuxt-link>
            </td>
          </tr>
        </table>
      </div>

      <footer>
        <a v-if="config.ticketsUrl" :href="config.ticketsUrl" class="btn">
          Comprar entradas 🎟️
        </a>
      </footer>
    </section>


    <section class="program-day">
      <header>
        <h2 class="heading-3">
          Viernes, 20 de septiembre 2024
        </h2>
      </header>
      <div class="program-day__table-wrapper">
        <table class="program-day__table">
          <tr class="program-day__table-header">
            <th>&nbsp;</th>
            <th>
              Backend
            </th>
            <th>
              Frontend
            </th>
            <th>
              Devops
            </th>
            <th>
              Management
            </th>
            <th>
              La Pulpito
            </th>
          </tr>

          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              08:00<br/>09:00
            </td>
            <td class="program-day__table-title" colspan="5">
              Badge pickup & Breakfast 🪪☕
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="3">
              9:00<br>11:00
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="irene-piccoli"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="azahara-manuel"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
		          <workshop-teaser id="salva-corts"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="maria-larios"/>
            </td>
            <td class="program-day__table-title">
              TBC
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              TBC
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              <nuxt-link to="/talk/emilio-carrion">
                {{ talks['emilio-carrion'].speaker.name }}
                <strong>{{ talks['emilio-carrion'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--break">
            <td class="program-day__table-time">
              11:00<br>12:00
            </td>
            <td class="program-day__table-title" colspan="5">
              Coffee Break ☕
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="3">
              12:00<br>14:00
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="annegret-junker" />
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="lorena-martinez"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="antonio-ojea"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="maria-quiroz"/>
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/ella-polo">
                {{ talks['ella-polo'].speaker.name }}
                <strong>{{ talks['ella-polo'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <tr class="program-day__table-slot  program-day__table-slot--event">
            <td class="program-day__table-title">
              <nuxt-link to="/talk/luis-rovirosa">
                {{ talks['iago-cabo'].speaker.name }}
                <strong>{{ talks['iago-cabo'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <tr class="program-day__table-slot  program-day__table-slot--event">
            <td class="program-day__table-title">
              <nuxt-link to="/talk/luis-rovirosa">
                {{ talks['luis-rovirosa'].speaker.name }}
                <strong>{{ talks['luis-rovirosa'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--lunch">
            <td class="program-day__table-time">
              14:00<br>16:00
            </td>
            <td class="program-day__table-title" colspan="5">
              Lunch 🍽️
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="3">
              16:00<br>18:00
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="dorra-bartaguiz"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="joan-leon"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="almudena-vivanco"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="ana-carmona"/>
            </td>
            <td class="program-day__table-title">
              TBC
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              TBC
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              TBC
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              18:00<br>19:00
            </td>
            <td class="program-day__table-title" colspan="5">
              <workshop-teaser id="open-mic"/>
            </td>
          </tr>

        </table>
      </div>
      <footer>
        <a v-if="config.ticketsUrl" :href="config.ticketsUrl" class="btn">
          Comprar entradas 🎟️
        </a>
      </footer>
    </section>


    <section class="program-day">
      <header>
        <h2 class="heading-3">
          Sábado, 21 de septiembre 2024
        </h2>
      </header>
      <div class="program-day__table-wrapper">
        <table class="program-day__table">
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
            <td class="program-day__table-title">
              Badge pickup & Breakfast 🪪☕
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              09:40<br>10:00
            </td>
            <td class="program-day__table-title">
              Opening
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--10m program-day__table-slot--event">
            <td class="program-day__table-time">
              10:00<br>10:30
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/maria-calzada">
                {{ talks['maria-calzada'].speaker.name }}
                <strong>{{ talks['maria-calzada'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              10:40<br>11:20
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/berny-cantos">
                {{ talks['berny-cantos'].speaker.name }}
                <strong>{{ talks['berny-cantos'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot program-day__table-slot--lunch">
            <td class="program-day__table-time">
              11:30<br>12:30
            </td>
            <td class="program-day__table-title" colspan="5">
              Coffee Break ☕
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              12:30<br>13:10
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/dani-santamaria">
                {{ talks['dani-santamaria'].speaker.name }}
                <strong>{{ talks['dani-santamaria'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              13:20<br>14:00
            </td>
            <td class="program-day__table-title">
              TBC
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--lunch">
            <td class="program-day__table-time">
              14:00<br>16:00
            </td>
            <td class="program-day__table-title">
              Lunch 🍽️
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              16:00<br>16:40
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/concha-asensio">
                {{ talks['dorra-bartaguiz'].speaker.name }}
                <strong>{{ talks['dorra-bartaguiz'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              16:50<br>17:30
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/annegret-junker">
                {{ talks['annegret-junker'].speaker.name }}
                <strong>{{ talks['annegret-junker'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              17:40<br>18:00
            </td>
            <td class="program-day__table-title">
              Closing
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--break">
            <td class="program-day__table-time">
              18:00<br>21:00
            </td>
            <td class="program-day__table-title">
              Cóctel post-evento 🍸
            </td>
          </tr>
        </table>
      </div>
      <footer>
        <a v-if="config.ticketsUrl" :href="config.ticketsUrl" class="btn">
          Comprar entradas 🎟️
        </a>
      </footer>
    </section>
  </section>
</template>
<script lang="ts" setup>
import config from '../../data/config'
import talks from '../../data/talks'
import WorkshopTeaser from '../../components/WorkshopTeaser'
</script>
<style src="./program.scss"></style>
