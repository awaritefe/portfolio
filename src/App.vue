<template>
  <!-- Header -->
  <app-header />

  <!-- Reseme modal -->
  <app-reseme />

  <!-- Hero -->
  <app-hero />

  <!-- About - Make into a timeline carsousel -->

  <!-- Media / Portfolio -->
  <app-portfolio />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppReseme from '@/components/AppReseme.vue'
import AppHero from '@/components/AppHero.vue'
import AppPortfolio from '@/components/AppPortfolio.vue'

export default {
  Name: 'App',
  components: {
    AppHeader,
    AppReseme,
    AppHero,
    AppPortfolio
  }
}
</script>
