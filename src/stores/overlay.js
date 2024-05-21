import { defineStore } from 'pinia'

export const useOverlayStore = defineStore('overlay', {
  state: () => ({
    x: 0,
    y: 0,
    opacitiy: 0
  }),
  actions: {
    before: async () => {
      // Ensure element with ref exists before continuing
      await this.$wait((vm) => vm.$refs.itemsContainer)
    },
    calculatePosition(event) {
      if (this.$refs.itemsContainer) {
        // Optional additional check
        const { pageX, pageY } = event
        const itemEl = this.$refs.itemsContainer
        this.x = pageX - itemEl.offsetLeft
        this.y = pageY - itemEl.offsetTop
        this.opacity = 1
      } else {
        console.log('Element with ref "itemsContainer" not yet ready')
      }
    }
  }
})
