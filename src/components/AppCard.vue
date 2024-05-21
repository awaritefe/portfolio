<template>
  <!-- Media / Portfolio -->
  <div class="card-container grid grid-cols-2 md:container md:mx-auto">
    <div class="card aspect-square relative">
      <picture class="card-image absolute top-0 left-0 w-auto">
        <img
          class="aspect-square object-cover"
          src="/src/assets/images/pf1.jpg"
          alt="about the pic"
        />
      </picture>
      <div class="card-info absolute h-full top-0 left-0 p-10">
        <h2 class="text-white">Title of project</h2>
        <p class="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aliquam pariatur
          distinctio, delectus corporis possimus eum amet accusamus temporibus earum vitae provident
          fuga veniam qui, excepturi, nemo maiores adipisci at.
        </p>
        <a href="#" class="text-white">The Project</a>
      </div>
    </div>

    <div class="card aspect-square relative">
      <picture class="card-image absolute top-0 left-0 w-auto">
        <img
          class="aspect-square object-cover"
          src="/src/assets/images/pf2.jpg"
          alt="about the pic"
        />
      </picture>
      <div class="card-info absolute h-full top-0 left-0 p-10">
        <h2 class="text-white">Title of project</h2>
        <p class="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aliquam pariatur
          distinctio, delectus corporis possimus eum amet accusamus temporibus earum vitae provident
          fuga veniam qui, excepturi, nemo maiores adipisci at.
        </p>
        <a href="#" class="text-white">The Project</a>
      </div>
    </div>

    <div class="card aspect-square relative">
      <picture class="card-image absolute top-0 left-0 w-auto">
        <img
          class="aspect-square object-cover"
          src="/src/assets/images/pf3.jpg"
          alt="about the pic"
        />
      </picture>
      <div class="card-info absolute h-full top-0 left-0 p-10">
        <h2 class="text-white">Title of project</h2>
        <p class="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aliquam pariatur
          distinctio, delectus corporis possimus eum amet accusamus temporibus earum vitae provident
          fuga veniam qui, excepturi, nemo maiores adipisci at.
        </p>
        <a href="#" class="text-white">The Project</a>
      </div>
    </div>

    <div class="card aspect-square relative">
      <picture class="card-image absolute top-0 left-0 w-auto">
        <img
          class="aspect-square object-cover"
          src="/src/assets/images/pf4.jpg"
          alt="about the pic"
        />
      </picture>
      <div class="card-info absolute h-full top-0 left-0 p-10">
        <h2 class="text-white">Title of project</h2>
        <p class="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aliquam pariatur
          distinctio, delectus corporis possimus eum amet accusamus temporibus earum vitae provident
          fuga veniam qui, excepturi, nemo maiores adipisci at.
        </p>
        <a href="#" class="text-white">The Project</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPortfolio'
}
</script>

<style scoped lang="scss">
.card {
  backface-visibility: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  transition: 0.8s;

  &:hover {
    .card-image {
      transform: rotateY(-180deg);
    }
    .card-info {
      transform: rotateY(0deg);
    }
  }

  &-image {
    // border: solid 10px whitesmoke;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: 0.8s;
  }

  &-info {
    background: #1d1d1d;
    border: solid 10px whitesmoke;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: 0.8s;
  }
}
</style>
