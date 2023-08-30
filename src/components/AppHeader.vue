<template>
  <!-- Header -->
  <header>
    <nav class="md:container md:mx-auto py-6">
      <ul class="flex justify-evenly items-end">
        <li>
          <a class="text-slate-400 hover:text-slate-200" href="#" @click.prevent="toggleModal"
            >Resume</a
          >
        </li>
        <li><a class="text-slate-400 hover:text-slate-200" href="#">About</a></li>
        <li><span class="font-header text-white text-2xl">Daniel Awaritefe</span></li>
        <li><a class="text-slate-400 hover:text-slate-200" href="#">Portfolio</a></li>
        <li><a class="text-slate-400 hover:text-slate-200" href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore)
  },
  methods: {
    toggleModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
      console.log(this.modalStore.isOpen)
    }
  }
}
</script>
