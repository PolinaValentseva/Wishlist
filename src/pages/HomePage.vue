<template>
  <div class="container">
    <h1>Главная страница</h1>
    <p class="subtitle">Лендинг - привлечение пользователей</p>
    <router-link to="/create">
        <AppButton variant="primary">Создать вишлист</AppButton>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import AppButton from '../components/AppButton.vue';

</script>

<style scoped>
</style>