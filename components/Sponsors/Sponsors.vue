<template>
  <div class="sps">
    <template v-for="type in SponsorType" :key="type">
      <div v-if="sps[type].length > 0" class="sps__type">
        <h3 class="sps__type-title">{{ type }}</h3>
        <div class="sps__type-list">
          <div v-for="sponsor in sps[type]" :key="sponsor.name"
               :class="['sps__type-list-item', `sps__type-list-item--${type}`]">
            <component :is="sponsor.link ? 'a' : 'span'" :href="sponsor.link" class="sp" target="_blank">
              <img :alt="sponsor.name" :src="sponsor.logo"/>
            </component>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import sps, { SponsorType } from '~/data/sponsors'

defineProps()

defineEmits()

</script>
<style src="./Sponsors.scss"></style>
