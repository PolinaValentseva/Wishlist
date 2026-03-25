<template>
  <div>
    <TheHeader />

    <main class="main">
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/layout/TheHeader.vue';
import TheFooter from '@/layout/TheFooter.vue';

</script>

<style>

.main {
  min-height: 100dvh;
}
</style>