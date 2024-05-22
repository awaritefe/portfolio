<template>
  <header>
    <nav class="md:container md:mx-auto py-6" ref="headerContainer">
      <ul class="flex justify-evenly items-end">
        <li
          v-for="(item, index) in headerItems"
          :key="index"
          :ref="`listItem_${index}`"
          @mousemove="applyOverlayMask($event, index)"
          @mouseleave="resetOverlayMask(index)"
        >
          <a
            :class="{
              'text-slate-400 hover:text-slate-200': index !== 2,
              'font-header text-white text-2xl': index === 2
            }"
            :href="item.href"
            @click.prevent="handleClick(index)"
            >{{ item.label }}</a
          >
          <div class="overlay" :style="overlayStyles[index]" :ref="`overlay_${index}`"></div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'

export default {
  name: 'AppHeader',
  data() {
    return {
      overlayStyles: [],
      headerItems: [
        { label: 'Resume', href: '#', backgroundColor: 'hsla(165, 82.26%, 51.37%, 0.75)' },
        { label: 'About', href: '#', backgroundColor: 'hsla(210, 82.26%, 51.37%, 0.75)' },
        { label: 'Daniel Awaritefe', backgroundColor: 'hsla(255, 82.26%, 51.37%, 0.75)' },
        { label: 'Portfolio', href: '#', backgroundColor: 'hsla(300, 82.26%, 51.37%, 0.75)' },
        { label: 'Contact', href: '#', backgroundColor: 'hsla(345, 82.26%, 51.37%, 0.75)' }
      ]
    }
  },
  computed: {
    ...mapStores(useModalStore)
  },
  methods: {
    toggleModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
      console.log(this.modalStore.isOpen)
    },
    applyOverlayMask(event, index) {
      const overlayEl = this.$refs[`overlay_${index}`][0]
      const listItemEl = this.$refs[`listItem_${index}`][0]
      const overlayRect = overlayEl.getBoundingClientRect()
      const listItemRect = listItemEl.getBoundingClientRect()
      const x = event.clientX - overlayRect.left
      const y = event.clientY - overlayRect.top

      this.overlayStyles[index] = {
        opacity: 1,
        backgroundColor: this.headerItems[index].backgroundColor,
        '--x': `${x}px`,
        '--y': `${y}px`,
        width: `${listItemRect.width}px`, // Set width to match the list item
        height: `${listItemRect.height}px` // Set height to match the list item
      }
    },

    resetOverlayMask(index) {
      this.overlayStyles[index] = { opacity: 0 }
    },
    handleClick(index) {
      if (index === 0) {
        this.toggleModal()
      }
    }
  }
}
</script>

<style scoped lang="scss">
/* Add your styles here */
li {
  position: relative;
  width: 100%;
  align-self: stretch;
  text-align: center;
  padding: 1rem 0;
  a {
    display: grid;
    height: 100%;
    align-content: center;
  }
}

.overlay {
  position: absolute;
  inset: 1;
  pointer-events: none;
  user-select: none;
  opacity: var(--opacity, 0);
  -webkit-mask: radial-gradient(25rem 25rem at var(--x) var(--y), #000 1%, transparent 50%);
  mask: radial-gradient(25rem 25rem at var(--x) var(--y), #000 1%, transparent 50%);
  transition:
    opacity 0.4s ease,
    -webkit-mask 0.4s ease,
    mask 0.4s ease;
  will-change:
    opacity,
    -webkit-mask,
    mask;
}

.overlay .item {
  background-color: hsla(var(--hsl), 0.15);
  border-color: hsla(var(--hsl), 1);
  box-shadow: 0 0 0 1px inset hsl(var(--hsl));
}

li:hover .overlay {
  opacity: 1;
  height: 10px !important;
}

li:hover a {
  background-color: inherit;
}
</style>
