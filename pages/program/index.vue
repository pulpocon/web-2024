<template>
  <section class="page page--program">
    <header class="page__header">
      <h1 class="heading-1">
        <span>
          Programa definitivo
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
            <th>&nbsp;</th>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
            <td class="program-day__table-title" colspan="2">
              Badge pickup & Breakfast 🪪☕
            </td>
            <td class="program-day__table-time">
              08:30<br/>09:30
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
            <td class="program-day__table-time">
              09:30<br>11:30
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
            <td class="program-day__table-time">
              11:30<br>12:00
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
            <td class="program-day__table-time">
              12:00<br>14:00
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--lunch">
            <td class="program-day__table-time">
              14:00<br>15:30
            </td>
            <td class="program-day__table-title" colspan="2">
              Lunch 🍽️
            </td>
            <td class="program-day__table-time">
              14:00<br>15:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot  program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="2">
              15:30<br>18:30
            </td>
            <td class="program-day__table-title" rowspan="2">
              <workshop-teaser id="legacy-projects"/>
            </td>
            <td class="program-day__table-title">
              Badge pickup
            </td>
            <td class="program-day__table-time">
              15:30<br>16:00
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-title">
              <nuxt-link to="/openspace">
                Open Space
              </nuxt-link>
            </td>
            <td class="program-day__table-time">
              16:00<br>18:30
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
            <th>&nbsp;</th>
          </tr>

          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
            <td class="program-day__table-title" colspan="5">
              Badge pickup & Breakfast 🪪☕
            </td>
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="3">
              9:30<br>11:30
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
              <workshop-teaser id="maria-quiroz"/>
            </td>
            <td class="program-day__table-title">
              Opening
            </td>
            <td class="program-day__table-time">
              09:30<br/>10:10
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="ella-polo"/>
            </td>
            <td class="program-day__table-time">
              10:10<br/>10:50
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="emilio-carrion"/>
            </td>
            <td class="program-day__table-time">
              10:50<br/>11:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--break">
            <td class="program-day__table-time">
              11:30<br>12:30
            </td>
            <td class="program-day__table-title" colspan="5">
              Coffee Break ☕
            </td>
            <td class="program-day__table-time">
              11:30<br>12:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="3">
              12:30<br>14:30
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
              <workshop-teaser id="maria-larios"/>
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="nadia-santalla"/>
            </td>
            <td class="program-day__table-time">
              12:30<br>13:10
            </td>
          </tr>
          <tr class="program-day__table-slot  program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="iago-cabo"/>
            </td>
            <td class="program-day__table-time">
              13:10<br>13:50
            </td>
          </tr>
          <tr class="program-day__table-slot  program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="mercedes-rodriguez"/>
            </td>
            <td class="program-day__table-time">
              13:50<br>14:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--lunch">
            <td class="program-day__table-time">
              14:30<br>16:30
            </td>
            <td class="program-day__table-title" colspan="5">
              Lunch 🍽️
            </td>
            <td class="program-day__table-time">
              14:30<br>16:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="3">
              16:30<br>18:30
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
              <talk-teaser id="luis-rovirosa"/>
            </td>
            <td class="program-day__table-time">
              16:30<br>17:10
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="santi-herrero"/>
            </td>
            <td class="program-day__table-time">
              17:10<br>17:50
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              <talk-teaser id="janko-miguel"/>
            </td>
            <td class="program-day__table-time">
              17:50<br>18:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              18:30<br>19:30
            </td>
            <td class="program-day__table-title" colspan="5">
              <workshop-teaser id="open-mic"/>
            </td>
            <td class="program-day__table-time">
              18:30<br>19:30
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
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              9:40<br>10:00
            </td>
            <td class="program-day__table-title">
              Opening
            </td>
            <td class="program-day__table-time">
              9:40<br>10:00
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--10m program-day__table-slot--event">
            <td class="program-day__table-time">
              10:00<br>10:40
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="maria-calzada"/>
            </td>
            <td class="program-day__table-time">
              10:00<br>10:40
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              10:40<br>11:20
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="berny-cantos"/>
            </td>
            <td class="program-day__table-time">
              10:40<br>11:20
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot program-day__table-slot--lunch">
            <td class="program-day__table-time">
              11:30<br>12:30
            </td>
            <td class="program-day__table-title">
              Coffee Break ☕
            </td>
            <td class="program-day__table-time">
              11:30<br>12:30
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              12:30<br>13:10
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="dani-santamaria"/>
            </td>
            <td class="program-day__table-time">
              12:30<br>13:10
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              13:20<br>14:00
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="krisztina-hirth"/>
            </td>
            <td class="program-day__table-time">
              13:20<br>14:00
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
            <td class="program-day__table-time">
              14:00<br>16:00
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              16:00<br>16:40
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="annegret-junker"/>
            </td>
            <td class="program-day__table-time">
              16:00<br>16:40
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              16:50<br>17:30
            </td>
            <td class="program-day__table-title">
              <talk-teaser id="dorra-bartaguiz"/>
            </td>
            <td class="program-day__table-time">
              16:50<br>17:30
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
            <td class="program-day__table-time">
              17:40<br>18:00
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--break">
            <td class="program-day__table-time">
              18:00<br>20:30
            </td>
            <td class="program-day__table-title">
              Cóctel post-evento 🍸
            </td>
            <td class="program-day__table-time">
              18:00<br>20:30
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
import WorkshopTeaser from '../../components/WorkshopTeaser'
import TalkTeaser from '../../components/TalkTeaser'
</script>
<style src="./program.scss"></style>
