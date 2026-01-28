<script>
import HeroBanner from "../components/HeroBanner.vue";
import About from "../components/About.vue";
import Actnow from "../components/Actnow.vue";
import Parallax from "../components/Parallax.vue";

export default {
  components: {
    HeroBanner,
    About,
    Actnow,
    Parallax,
  },
};
</script>

<template>
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
</template>

<style>
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