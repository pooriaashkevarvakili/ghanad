<template>
  <div
    class="
      2xl:block
      md:hidden
      xl:block
      lg:block
      4xl:hidden
      5xl:hidden
      xs:hidden
    "
  >
    <div style="direction: rtl" class="relative">
      <img
        src="nan.png"
        class="
          2xl:w-11/12
          xl:w-11/12
          lg:w-11/12
          md:w-full
          2xl:mr-20
          xl:mr-20
          mt-10
          2xl:block
          md:hidden
          xl:block
          lg:block
          4xl:hidden
          5xl:hidden
          xs:hidden
        "
        alt=""
      />
      <div class="carousel-caption top-2 md:block absolute">
        <h5 class="text-xl 2xl:left-36 xl:left-36 md:left-2 relative">
          مادرتیم قناد باشی به دنبال همکار نانوا در
          <span class="text-red-400">شعبه کرج </span>هستیم اگر تجربه و مهارت
        </h5>

        <h5
          class="
            text-xl
            relative
            md:hidden
            4xl:hidden
            5xl:hidden
            2xl:block
            xl:block
            xs:hidden
            2xl:left-36
            xl:left-36
            md:left-2
          "
        >
          کافی دارید با مادرارتباط باشید...
        </h5>
        <button
          class="
            4xl:hidden
            5xl:hidden
            xs:hidden
            2xl:block
            xl:block
            lg:block
            banner
            inline-block
            px-6
            py-2
            bg-pink-300
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            hover:bg-red-400 hover:bg-opacity-5
            focus:outline-none focus:ring-0
            transition
            duration-150
            ease-in-out
            relative
            top-36
          "
        >
          ادامه مطالب
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner {
  right: 1300px;
}
@media only screen and (max-width: 1800px) {
  .banner {
    right: 1250px;
  }
}
@media only screen and (max-width: 1700px) {
  .banner {
    right: 1150px;
    top: 100px;
  }
}
@media only screen and (max-width: 1600px) {
  .banner {
    right: 1100px;
    top: 100px;
  }
}
@media only screen and (max-width: 1500px) {
  .banner {
    right: 1000px;
    top: 100px;
  }
}
@media only screen and (max-width: 1400px) {
  .banner {
    right: 900px;
    top: 70px;
  }
}
@media only screen and (max-width: 1300px) {
  .banner {
    right: 800px;
    top: 70px;
  }
}
@media only screen and (max-width: 1200px) {
  .banner {
    right: 700px;
    top: 50px;
  }
}
@media only screen and (max-width: 1100px) {
  .banner {
    right: 600px;
    top: 30px;
  }
}
@media only screen and (max-width: 1000px) {
  .banner {
    right: 600px;
    top: 30px;
  }
}
@media only screen and (max-width: 900px) {
  .banner {
    right: 550px;
    top: -10px;
  }
}
@media only screen and (max-width: 800px) {
  .banner {
    right: 500px;
    top: -20px;
  }
}
@media only screen and (max-width: 700px) {
  .banner {
    right: 400px;
    top: -40px;
  }
}
@media only screen and (max-width: 600px) {
  .banner {
    right: 300px;
    top: -40px;
  }
}
</style>