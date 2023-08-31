<template>
  <div id="modal" class="bg-black/70 fixed h-screen pt-12 w-full top-0" :class="hiddenClass">
    <div class="modal-content m-auto w-fit">
      <!-- Modal close button -->
      <div class="modal-close cursor-pointer ml-auto w-fit z-50">
        <i class="fas fa-times text-white" @click.prevent="isOpen = false"></i>
      </div>
      <!-- Iframe/Embed -->
      <iframe
        class="m-auto h-[80vh] w-[90vw] md:w-160"
        src="https://drive.google.com/file/d/1sxLXiU3UrDubPX2V7F2G2fy1MmaExbSG/preview"
        frameBorder="0"
        scrolling="auto"
        width="640"
        height="480"
        allow="autoplay"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import useModelStore from '@/stores/modal'
export default {
  name: 'AppReseme',
  computed: {
    ...mapState(useModelStore, ['hiddenClass']),
    ...mapWritableState(useModelStore, ['isOpen'])
  }
}
</script>
