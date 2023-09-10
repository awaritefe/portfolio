<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hash: '',
      isActive: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  inject: ['addTab', 'activeTabHash'],
  created() {
    this.hash = `#${this.title.toLowerCase().replace(/ /g, '-')}`

    this.addTab({
      title: this.title,
      hash: this.hash
    })
  },
  watch: {
    activeTabHash() {
      this.isActive = this.activeTabHash === this.hash
    }
  }
}
</script>
