<template>
  <div>
    <web-header/>
    <mobile-menu :visible="visible"/>
    <slot name="default">
      <index></index>
    </slot>
    <web-footer/>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { onBeforeUnmount, onMounted } from 'vue'
import MobileMenu from '~/components/MobileMenu'
import WebFooter from '~/components/WebFooter'
import WebHeader from '~/components/WebHeader'
import { useMobileMenuStore } from '~/stores/mobileMenu'
import { useUIStore } from '~/stores/ui'
import Index from '~/pages/index/index.vue'

const { setNotInTop } = useUIStore()
const mobileMenuStore = useMobileMenuStore()
const { visible } = storeToRefs(mobileMenuStore)

const handleScroll = (): void => {
  setNotInTop(window.scrollY > 0)
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
