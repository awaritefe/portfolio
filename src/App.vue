<template>
  <!-- Header -->
  <app-header />

  <!-- Reseme modal -->
  <app-reseme />

  <!-- Hero -->
  <app-hero />

  <!-- About - Tabs -->
  <div class="bg-white">
    <tabs>
      <tab title="Tab 1">Hello From Tab 1</tab>
      <tab title="Tab 2">Hello From Tab 2</tab>
      <tab title="Tab 3">Hello From Tab 3</tab>
      <tab title="Tab 4">Hello From Tab 4</tab>
    </tabs>
  </div>

  <!-- Card / Portfolio -->
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
import Tab from '@/components/Tab.vue'
import Tabs from '@/components/Tabs.vue'

export default {
  Name: 'App',
  components: {
    AppHeader,
    AppReseme,
    AppHero,
    AppCard,
    AppForm,
    Tab,
    Tabs
  }
}
</script>
