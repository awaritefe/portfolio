<template>
  <!-- Header -->
  <app-header />

  <!-- Reseme modal -->
  <app-reseme />

  <!-- Hero -->
  <app-hero />

  <!-- About - Make into a timeline carsousel -->

  <!-- Media / Portfolio -->
  <app-card />

  <!-- Contact form -->
  <app-form />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppReseme from '@/components/AppReseme.vue'
import AppHero from '@/components/AppHero.vue'
import AppCard from '@/components/AppCard.vue'
import AppForm from '@/components/AppForm.vue'

export default {
  Name: 'App',
  components: {
    AppHeader,
    AppReseme,
    AppHero,
    AppCard,
    AppForm
  }
}
</script>
