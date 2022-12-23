<template>
  <div>
    <div class="flex justify-between px-10 p-3">
      <div class="flex">
        <nuxt-link
          to="/login"
          class="
            inline-block
            px-6
            py-2.5
            bg-red-300
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded-lg
            shadow-md
            hover:bg-red-300 hover:shadow-lg
            focus:bg-red-300 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-red-300 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          <div class="mt-3">ورود/ثبت نام</div>
        </nuxt-link>
        <div class="ml-3 mt-4">شماره تماس(09301916023)</div>
      </div>
      <div>
        <img class="h-16" src="../static/logoone.png" alt="" />
      </div>
    </div>
    <Header />

    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
export default {
  components: { Header, Footer },
};
</script>

<style>
</style>