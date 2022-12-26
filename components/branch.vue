<template>
  <div>
    <div
      class="
        flex
        2xl:px-20
        xl:px-20
        lg:px-20
        sm:px-2
        md:px-2
        4xl:px-2
        5xl:px-2
        xs:px-2
        justify-between
      "
    >
      <div class="text-xl">مشاهدات همه شعبه ها</div>
      <img src="line.png" alt="" />
      <div class="text-xl">شعبه ها</div>
    </div>
    <div
      class="
        grid
        2xl:grid-cols-3
        xl:grid-cols-3
        lg:grid-cols-2
        sm:grid-cols-1
        md:gird-cols-1
        4xl:grid-cols-1
        5xl:grid-cols-1
        xs:grid-cols-1
        2xl:mr-0
        xl:mr-0
        md:ml-52
        sm:ml-32
        4xl:ml-24
      "
    >
      <div
        style="background-image: url('store.png')"
        class="w-56 ml-20 mt-2 bg-no-repeat object-cover h-80"
      >
        <div class="flex flex-col items-center justify-center w-full h-52">
          <div>تهران</div>
          <button
            type="button"
            class="
              inline-block
              px-6
              py-2.5
              bg-pink-400
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-red-400 hover:shadow-lg
              focus:bg-red-400 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-red-400 active:shadow-lg
              transition
              duration-150
              ease-in-out
            "
          >
            بزن بریم
          </button>
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
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
      </div>
      <div
        style="background-image: url('storeone.png')"
        class="w-56 ml-20 mt-2 bg-no-repeat object-cover h-80"
      >
        <div class="flex flex-col items-center justify-center w-full h-52">
          <div>کرج</div>
          <div>درک اساسااهرازفامرنناچنا</div>
          <div>همانروزاساسا یگداس مرول</div>
          <div>هک</div>
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
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
      </div>
      <div
        style="background-image: url('storethree.png')"
        class="w-56 ml-20 mt-2 bg-no-repeat object-cover h-80"
      >
        <div class="flex flex-col items-center justify-center w-full h-52">
          <div>قم</div>
          <div>شناددحوم)یگدداوناخ مان</div>
          <div>ینایک</div>

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
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>