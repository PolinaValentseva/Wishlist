<template>
  <section class="container">
    <h1 class="title">Создать вишлист</h1>
    <WishlistForm @submit="submitForm" />
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import WishlistForm from '@/components/wishlist/WishlistForm.vue';
import { useWishlist } from '@/composables/useWishlist';
import type { IWishlistFormData } from '@/types';

const router = useRouter();
const { createWishlist } = useWishlist();

const submitForm = (data: IWishlistFormData) => {
  const newWishlist = createWishlist(data);
  router.push(`/wishlist/${newWishlist.id}`);
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}

.title {
  margin-bottom: 30px;
}

@media (max-width: 600px) {
  .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
}

.title {
  margin-bottom: 25px;
}
}
</style>
