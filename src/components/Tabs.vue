<template>
  <div class="bg-white rounded my-12 md:container md:mx-auto">
    <ul class="flex flex-nowrap justify-between">
      <li
        class="w-full font-black p-3 cursor-pointer text-white"
        :class="{
          'bg-black border-b-2 border-white': tab.hash !== activeTabHash,
          'border-white border-b-8': tab.hash === activeTabHash
        }"
        v-for="tab in tabs"
        :key="tab.title"
        @click="activeTabHash = tab.hash"
      >
        Tab Title
      </li>
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

<style scoped lang="scss">
// li {
//   border-right: solid black 3px;
//   &:last-child {
//     border-right: none;
//   }
// }
</style>
