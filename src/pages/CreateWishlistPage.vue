<template>
  <section class="container">
    <h1 class="title">Создать вишлист</h1>
    <WishlistForm @submit="handleSubmit" />
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import WishlistForm from '@/components/createWishlist/WishlistForm.vue';
import { saveWishlist, generateId } from '@/utils/storage';

const router = useRouter();

interface FormData {
  title: string;
  date: string;
  description: string;
}

const handleSubmit = (data: FormData) => {
  const wishlistId = generateId();
  
  const newWishlist = {
    id: wishlistId,
    title: data.title,
    date: data.date,
    description: data.description,
    items: [],
    createdAt: new Date().toISOString()
  };
  
  saveWishlist(newWishlist);
  
  router.push(`/wishlist/${wishlistId}`);
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
