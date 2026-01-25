<template>
  <div class="background-image">
    <div class="centered-element">
      <h1>PR Guild</h1>
      <p class="hero-paragraph">
        A guild where you can learn Github Pull Request through bounty.
      </p>
      <!-- <div class="d-flex justify-center hero-cta"> -->
      <v-btn class="bg-purple-darken-2 text-center"> Count Me In </v-btn>
      <!-- </div> -->
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Galiver Sans";
  src: url("/fonts/GaliverSans-Bold.woff2") format("woff2");
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

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(rgba(0, 0, 0, 0.3)), url("/src/assets/homepage-bg.jpg");
}

.centered-element {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
</style>
