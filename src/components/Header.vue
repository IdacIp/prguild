<script>
import router from '../router';
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <h1>PR Guild</h1>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>
      </nav>
    </div>
  </header>
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
  font-size: 200px;
  text-shadow: 20%;
}

.header {
  background-color: rgba(255, 255, 255, 0);
  padding: 1rem 0;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.logo h1 {
  color: #fff;
  margin: 0;
  font-size: 1.5rem;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-list a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-list a:hover {
  color: #4caf50;
}
</style>
