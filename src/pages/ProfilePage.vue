<template>
  <div class="container">
    <h1>Профиль</h1>
    <p class="subtitle">Управление вишлистами</p>
    <RouterLink to="/create">
        <AppButton variant="primary">Создать вишлист</AppButton>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import AppButton from '../components/AppButton.vue';
</script>

<style scoped>
</style>