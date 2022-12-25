<template>
  <div>
    <div
      class="
        flex
        justify-end
        2xl:mr-14
        xl:mr-14
        sm:mr-56
        md:mr-44
        4xl:mr-48
        5xl:mr-36
        mt-8
        text-2xl
      "
    >
      محصولات روز
    </div>

    <div class="bg-pink-300 p-10 w-full rounded-xl mt-4">
      <div
        id="carouselExampleControls"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative left-12 float-left w-full">
            <productFive />
          </div>
          <div class="carousel-item left-12 relative float-left w-full">
            <productTwo />
          </div>
          <div class="carousel-item left-12 relative float-left w-full">
            <productThree />
          </div>
          <div class="carousel-item relative left-12 float-left w-full">
            <productFour />
          </div>
        </div>
        <button
          class="
            carousel-control-prev
            absolute
            top-24
            bottom-0
            flex
            items-center
            justify-center
            p-0
            text-center
            border-0
            hover:outline-none hover:no-underline
            focus:outline-none focus:no-underline
            left-0
          "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="
            carousel-control-next
            absolute
            top-24
            bottom-0
            flex
            items-center
            justify-center
            p-0
            text-center
            border-0
            hover:outline-none hover:no-underline
            focus:outline-none focus:no-underline
            right-0
          "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
</style>