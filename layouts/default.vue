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
        <div class="ml-3 mt-4">
          <div class="flex">
            <div>شماره تماس(09301916023)</div>
            <div
              class="
                ml-2
                flex
                items-center
                justify-center
                bg-pink-400
                w-10
                rounded-lg
                h-10
              "
            >
              <nuxt-link to="/cart" class="text-white mr-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-3 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <span
                  class="
                    text-white
                    bg-red-700
                    absolute
                    rounded-full
                    text-xs
                    -mt-6
                    ml-2
                    py-0
                    px-1.5
                  "
                  >1</span
                >
              </nuxt-link>
            </div>
          </div>
        </div>
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