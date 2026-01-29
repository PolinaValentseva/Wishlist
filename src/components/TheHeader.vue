<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">🎁 Wishlist</router-link>
      <nav class="nav">
        <router-link to="/">Главная</router-link>
        <router-link to="/profile">Профиль</router-link>
        <router-link to="/create">Создать</router-link>
        <router-link to="/wishlist/:id">Вишлист </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
  background: #400069;
background: linear-gradient(90deg,rgba(64, 0, 105, 1) 0%, rgba(119, 33, 181, 1) 53%, rgba(64, 0, 105, 1) 100%);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background 0.3s;
}

.nav a:hover {
  background: rgba(255,255,255,0.1);
}

.nav a.router-link-active {
  background: rgba(255,255,255,0.2);
}
</style>