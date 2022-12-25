<template>
  <div>
    <bannerLayout />
    <Header />

    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import bannerLayout from "./bannerLayout.vue";
export default {
  components: { Header, Footer, bannerLayout },
};
</script>

<style>
</style>