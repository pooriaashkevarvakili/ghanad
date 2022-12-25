<template>
  <div>
    <div
      class="flex items-center justify-center flex-col mt-24"
      v-if="products.length === 0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-16 h-16"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>

      <span class="text-2xl mt-2"> سبدخرید شما خالی است </span>
      <nuxt-link class="bg-black px-10 py-3 rounded-xl mt-5 text-white" to="/"
        >خانه</nuxt-link
      >
    </div>
    <div
      v-else
      class="
        grid
        2xl:grid-cols-3
        gap-6
        xl:grid-cols-2
        lg:grid-cols-2
        grid-cols-1
      "
    >
      <div v-for="item in products" :key="item.id" class="flex justify-center">
        <div class="block w-96 p-6 max-w-sm rounded-lg shadow-lg bg-white">
          <div class="flex justify-center items-center">
            <img :src="item.img" />
          </div>
          <div class="flex justify-center items-center">
            <p>{{ item.title }}</p>
          </div>
          <div class="flex justify-center items-center">
            <p>{{ item.name }}</p>
          </div>
          <div class="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>

          <div class="flex mt-4 space-x-2 justify-between">
            <div>
              <button
                @click="clear"
                class="
                  inline-block
                  px-6
                  py-2.5
                  bg-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:text-white
                  focus:text-white
                  hover:bg-red-400 hover:shadow-lg
                  focus:bg-red-400
                  focus:shadow-lg
                  focus:outline-none
                  focus:ring-0
                  active:bg-white active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                "
              >
                clear
              </button>
              <button
                @click="remove(item.id)"
                class="
                  inline-block
                  px-6
                  py-2.5
                  bg-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:text-white
                  focus:text-white
                  hover:bg-red-400 hover:shadow-lg
                  focus:bg-red-400
                  focus:shadow-lg
                  focus:outline-none
                  focus:ring-0
                  active:bg-white active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                "
              >
                remove
              </button>
            </div>
            <div class="flex flex-col">
              <div class="text-red-400">{{ item.price }}</div>
            </div>
          </div>
          <div class="flex mt-4 justify-between">
            <div class="flex">
              <button
                @click="increment(item.id)"
                class="
                  inline-block
                  w-12
                  h-12
                  bg-red-400
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-red-400 hover:shadow-lg
                  focus:bg-red-400
                  focus:shadow-lg
                  focus:outline-none
                  focus:ring-0
                  active:bg-red-400 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                "
              >
                +
              </button>
              <div class="mt-3 ml-3">{{ item.quantity }}</div>
              <div>
                <button
                  @click="decrement(item.id)"
                  class="
                    ml-3
                    inline-block
                    w-12
                    h-12
                    bg-red-400
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-red-400 hover:shadow-lg
                    focus:bg-red-400
                    focus:shadow-lg
                    focus:outline-none
                    focus:ring-0
                    active:bg-red-400 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                  "
                >
                  -
                </button>
              </div>
            </div>
            <div class="mt-2 text-red-400">{{ totalAmount }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      products: "cart/allProducts",
    }),
    ...mapGetters({
      totalAmount: "cart/totalAmount",
    }),
  },
  methods: {
    ...mapActions({
      clear: "cart/clear",
    }),
    ...mapActions({
      remove: "cart/remove",
    }),
    ...mapActions({
      increment: "cart/increment",
    }),
    ...mapActions({
      decrement: "cart/decrement",
    }),
  },
};
</script>

<style>
</style>