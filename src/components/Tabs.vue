<template>
  <div>
    <ul>
      <li v-for="tab in tabs" :key="tab.title" @click="activeTabHash = tab.hash">Tab Title</li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  data() {
    return {
      activeTabHash: '',
      tabs: []
    }
  },
  provide() {
    return {
      addTab: (tab) => {
        const count = this.tabs.push(tab)

        if (count === 1) {
          this.activeTabHash = tab.hash
        }
      },
      activeTabHash: computed(() => this.activeTabHash)
    }
  }
}
</script>
