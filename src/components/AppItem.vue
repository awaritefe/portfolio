<template>
  <main class="main flow">
    <h1 class="main__heading">Pricing</h1>
    <div class="main__items items" ref="itemsContainer">
      <div class="main__inner">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="items__card item"
          ref="itemElements"
          @mousemove="applyOverlayMask($event, index)"
        >
          <h2 class="item__heading">{{ item.heading }}</h2>
          <p class="item__price">{{ item.price }}</p>
          <ul role="list" class="item__bullets flow">
            <li v-for="(bullet, bIndex) in item.bullets" :key="bIndex">{{ bullet }}</li>
          </ul>
          <a :href="item.link" class="item__cta cta" :data-index="index">{{ item.cta }}</a>
        </div>
      </div>
      <div class="overlay main__inner" :style="overlayStyle" ref="overlay">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="item"
          :style="{ backgroundColor: item.backgroundColor }"
        ></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppItem',
  data() {
    return {
      items: [
        {
          heading: 'Basic',
          price: '£99.99',
          bullets: ['Access to standard workouts and nutrition plans', 'Email support'],
          link: '#basic',
          cta: 'Get Started',
          backgroundColor: 'hsla(165, 82.26%, 51.37%, 0.15)'
        },
        {
          heading: 'Pro',
          price: '£399.99',
          bullets: [
            'Access to advanced workouts and nutrition plans',
            'Priority Email support',
            'Exclusive access to live Q&A sessions'
          ],
          link: '#pro',
          cta: 'Upgrade to Pro',
          backgroundColor: 'hsla(291.34, 95.9%, 61.76%, 0.15)'
        },
        {
          heading: 'Ultimate',
          price: '£999.99',
          bullets: [
            'Access to all premium workouts and nutrition plans',
            '24/7 Priority support',
            '1-on-1 virtual coaching session every month',
            'Exclusive content and early access to new features'
          ],
          link: '#ultimate',
          cta: 'Go Ultimate',
          backgroundColor: 'hsla(338.69, 100%, 48.04%, 0.15)'
        }
      ],
      overlayStyle: {
        opacity: 0,
        '--x': '0px',
        '--y': '0px'
      }
    }
  },
  mounted() {
    // Call the updateOverlayItems method when the component is mounted
    this.updateOverlayItems()
    // Listen for window resize events and update overlay items accordingly
    window.addEventListener('resize', this.updateOverlayItems)
  },
  unmounted() {
    // Remove the window resize event listener when the component is destroyed
    window.removeEventListener('resize', this.updateOverlayItems)
  },
  methods: {
    applyOverlayMask(event, index) {
      const overlayEl = this.$refs.overlay
      const overlayRect = overlayEl.getBoundingClientRect()
      const x = event.clientX - overlayRect.left
      const y = event.clientY - overlayRect.top

      this.overlayStyle.opacity = 1
      this.overlayStyle['--x'] = `${x}px`
      this.overlayStyle['--y'] = `${y}px`

      // Update overlay item dimensions and position
      this.updateOverlayItems(x, y, index)
    },
    updateOverlayItems() {
      const overlayEl = this.$refs.overlay
      const overlayRect = overlayEl.getBoundingClientRect()

      // Loop through each overlay item
      const overlayItems = this.$refs.overlay.children
      for (let i = 0; i < overlayItems.length; i++) {
        overlayItems[i].style.width = `${overlayRect.width}px`
        overlayItems[i].style.height = `${overlayRect.height}px`
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  &__heading {
    font-weight: 600;
    font-size: 2.25em;
    margin-bottom: 0.75em;
    text-align: center;
    color: #eceff1;
  }
  &__inner {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5em;
  }

  .items {
    position: relative;
  }

  .item {
    --flow-space: 0.5em;
    --hsl: var(--hue), var(--saturation), var(--lightness);
    flex: 1 1 14rem;
    padding: 1.5em 2em;
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    align-items: start;
    gap: 1.25em;
    color: #eceff1;
    background-color: #2b2b2b;
    border: 1px solid #eceff133;
    border-radius: 15px;

    &:nth-child(1) {
      --hue: 165;
      --saturation: 82.26%;
      --lightness: 51.37%;
    }

    &:nth-child(2) {
      --hue: 291.34;
      --saturation: 95.9%;
      --lightness: 61.76%;
    }

    &:nth-child(3) {
      --hue: 338.69;
      --saturation: 100%;
      --lightness: 48.04%;
    }

    &__heading {
      font-size: 1.05em;
      font-weight: 600;
    }

    &__price {
      font-size: 1.75em;
      font-weight: 700;
    }

    &__bullets {
      line-height: 1.4;
      li::before {
        display: inline-block;
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='16' title='check' fill='%23dddddd'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' /%3E%3C/svg%3E");
        transform: translatey(0.25ch);
        margin-right: 1ch;
      }
      &.flow > * + * {
        margin-top: var(--flow-space, 1.25em);
      }
    }
    &__cta {
      &.cta {
        display: block;
        align-self: end;
        margin: 1em 0 0.5em 0;
        text-align: center;
        text-decoration: none;
        color: #fff;
        background-color: #0d0d0d;
        padding: 0.7em;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }

  .overlay {
    position: absolute;
    inset: 0;
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

  .overlay .cta {
    display: block;
    grid-row: -1;
    width: 100%;
    background-color: hsl(var(--hsl));
    box-shadow: 0 0 0 1px hsl(var(--hsl));
  }

  :not(.overlay) > .item {
    transition: 0.4s background ease;
    will-change: background;
  }

  :not(.overlay) > .item:hover {
    --lightness: 95%;
    background: hsla(var(--hsl), 0.1);
  }
}
</style>
