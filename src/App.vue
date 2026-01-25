<script>
import Header from "./components/Header.vue";
import HeroBanner from "./components/HeroBanner.vue";
import About from "./components/About.vue";
import Actnow from "./components/Actnow.vue";
import Parallax from "./components/Parallax.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    HeroBanner,
    About,
    Actnow,
    Parallax,
    Footer,
  },
};
</script>

<template>
  <Header class="header-fixed" />
  <section>
    <HeroBanner />
  </section>
  <section>
    <Parallax />
  </section>
  <section>
    <About />
  </section>
  <section>
    <Actnow />
  </section>
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

section {
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: block;
}
</style>
