<template>
  <div id="modal" class="absolute bg-black/70 w-full h-full" :class="hiddenClass">
    <iframe
      class="m-auto"
      src="https://drive.google.com/file/d/1sxLXiU3UrDubPX2V7F2G2fy1MmaExbSG/preview"
      frameBorder="0"
      scrolling="auto"
      width="640"
      height="480"
      allow="autoplay"
    >
    </iframe>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useModelStore from '@/stores/modal'
export default {
  name: 'AppReseme',
  computed: {
    ...mapState(useModelStore, ['hiddenClass'])
  }
}
</script>
