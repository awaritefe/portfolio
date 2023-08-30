<template>
  <!-- Media / Portfolio -->
  <div class="portfolio grid grid-cols-2 xl:container xl:mx-auto">
    <div class="portfolio-card">
      <picture class="portfolio-image w-auto">
        <img class="aspect-square object-cover" src="../src/assets/images/pf1.jpg" />
      </picture>
      <div class="portfolio-info">
        <h2 class="text-white">Title of project</h2>
        <p class="text-white">Details about the project and what it is</p>
      </div>
    </div>
    <div class="portfolio-card">
      <picture class="portfolio-image w-auto">
        <img class="aspect-square object-cover" src="../src/assets/images/pf2.jpg" />
      </picture>
      <div class="portfolio-info">
        <h2 class="text-white">Title of project</h2>
        <p class="text-white">Details about the project and what it is</p>
      </div>
    </div>
    <div class="portfolio-card">
      <picture class="portfolio-image w-auto">
        <img class="aspect-square object-cover" src="../src/assets/images/pf3.jpg" />
      </picture>
      <div class="portfolio-info">
        <h2 class="text-white">Title of project</h2>
        <p class="text-white">Details about the project and what it is</p>
      </div>
    </div>
    <div class="portfolio-card">
      <picture class="portfolio-image w-auto">
        <img class="aspect-square object-cover" src="../src/assets/images/pf4.jpg" />
      </picture>
      <div class="portfolio-info">
        <h2 class="text-white">Title of project</h2>
        <p class="text-white">Details about the project and what it is</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPortfolio'
}
</script>
