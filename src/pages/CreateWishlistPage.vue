<template>
  <div class="container">
    <h1>Создание вишлиста</h1>
    <p class="subtitle">Информация о событии (Название, дата, описание)</p>
    <router-link to="/wishlist/:id">
        <AppButton variant="primary">Создать</AppButton>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import AppButton from '../components/AppButton.vue';
</script>

<style scoped>
</style>