<template>
  <div>
    <TheHeader />

    <main>
      <RouterView />
    </main>
  
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

</script>

<style>
</style>