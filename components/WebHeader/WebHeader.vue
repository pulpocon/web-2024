<template>
  <header :class="['web-header', {'not-in-top': notInTop || mobileMenuVisible }]">
    <div class="web-header__content container-fluid-1440">
      <div class="mobile-menu-toggle hidden-lg" @click="mobileMenuToggle">
        <i class="fa fa-bars"/>
      </div>
      <div class="web-header__spacer hidden-lg"></div>

      <div class="web-header__logo-wrapper">
        <nuxt-link to="/#home">
          <logo class="web-header__logo"></logo>
        </nuxt-link>
      </div>
      <div class="web-header__nav hidden-xs hidden-lxs hidden-sm hidden-md">
        <nav role="navigation">
          <ul class="main-navigation">
            <li v-for="(item, key) in menu" :key="key">
              <a
                  v-if="item.link.indexOf('http') > -1"
                  :href="item.link"
                  :title="item.title"
                  class="main-navigation__item" target="_blank"
              >
                {{ item.title }}
              </a>
              <nuxt-link
                  v-else
                  :title="item.title"
                  :to="item.link"
                  class="main-navigation__item"
              >
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="spacer"/>
      <div class="web-header__social">
        <a v-for="item in social" :key="item.name" :href="item.link" :title="item.name" target="_blank">
          <i :class="item.faIcon"/>
        </a>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import menu from '@/data/menu'
import social from '@/data/social'
import { storeToRefs } from 'pinia'
import Logo from '../../components/Logos/LogoPulpoCon1Ink.vue'
import { useMobileMenuStore } from '../../stores/mobileMenu'
import { useUIStore } from '../../stores/ui'

const mobileMenu = useMobileMenuStore()
const uiStore = useUIStore()
const { notInTop } = storeToRefs(uiStore)
const mobileMenuStore = useMobileMenuStore()
const { visible: mobileMenuVisible } = storeToRefs(mobileMenuStore)

const mobileMenuToggle = (): void => {
  mobileMenu.toggle()
}

</script>
<style src="./WebHeader.scss"></style>
