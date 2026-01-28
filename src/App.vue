<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import router from "./router";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header class="header-fixed" />
  <router-view />
  <Footer />
</template>

<style scoped>
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
}
</style>
