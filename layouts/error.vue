<template>
  <div
    class="
      flex
      2xl:mr-0
      xl:mr-0
      lg:mr-0
      flex-col
      mt-20
      items-center
      justify-center
    "
  >
    <img class="2xl:mr-2 xl:mr-2 lg:mr-2 md:mr-10" src="error.jpg" alt="" />
    <div class="2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 ml-0">
      {{ error.message }}
    </div>
    <div class="mt-3 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 ml-0">
      این صفحه موجود نمی باشد
    </div>
    <nuxt-link
      class="
        text-xl text-white
        bg-black
        2xl:ml-0
        xl:ml-0
        lg:ml-0
        md:ml-0
        ml-0
        w-52
        h-20
        mt-4
        text-center
        rounded-lg
      "
      to="/"
    >
      <div class="mt-7">خانه</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style>
</style>