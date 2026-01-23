<script setup></script>

<template>
  <div>
    <div class="background-image">
      <h1>PR Guild</h1>
      <p class="hero-paragraph">
        A guild where you can learn Github Post Request through bounty.
      </p>
      <div class="hero-cta">
        <a href="#">Count me In</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Galiver Sans";
  src: url("/public/fonts/GaliverSans-Bold.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

h1 {
  font-family: "Galiver Sans";
  text-align: center;
  font-size: 200px;
  text-shadow: 20%;
  color: white;
}
p {
  font-family: "Galiver Sans";
  margin-bottom: 32px;
  font-size: 50px;
  text-align: center;
  color: white;
}
.hero-cta {
  width: 50%; /* A width is required */
  margin: 0 auto;
  text-align: center;
}
a {
  color: aliceblue;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Use direct path if in /public folder */
  background:
    linear-gradient(rgba(0, 0, 0, 0.5)), url("/src/assets/homepage-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* Place behind content */
}
</style>
