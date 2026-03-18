<template>
  <div class="container profile-page">
    <div class="profile-page__header">
      <div>
        <h1 class="profile-page__title">Профиль</h1>
        <p class="profile-page__subtitle">Управление вишлистами</p>
      </div>
      <RouterLink to="/create">
        <AppButton variant="primary">Создать вишлист</AppButton>
      </RouterLink>
    </div>

    <div v-if="wishlists.length === 0" class="profile-page__empty">
      <p>У вас пока нет вишлистов</p>
      <RouterLink to="/create">
        <AppButton variant="outline">Создать первый вишлист</AppButton>
      </RouterLink>
    </div>

    <div v-else class="profile-page__grid">
      <WishlistCard
        v-for="wishlist in wishlists"
        :key="wishlist.id"
        :wishlist="wishlist"
        @edit="handleEdit(wishlist.id)"
        @delete="handleDelete(wishlist.id)"
        @share="handleShare(wishlist.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AppButton from '@/components/AppButton.vue';
import WishlistCard from '@/components/profile/WishlistCard.vue';
import { getAllWishlists, deleteWishlist, type Wishlist } from '@/utils/storage';

const router = useRouter();
const wishlists = ref<Wishlist[]>([]);

onMounted(() => {
  wishlists.value = getAllWishlists();
});

const handleEdit = (id: string) => {
  // Пока просто переходим на страницу вишлиста
  // В будущем — открытие модального окна редактирования
  router.push(`/wishlist/${id}`);
};

const handleDelete = (id: string) => {
  deleteWishlist(id);
  wishlists.value = getAllWishlists();
};

const handleShare = (id: string) => {
  const shareUrl = `${window.location.origin}/share/${id}`;
  navigator.clipboard.writeText(shareUrl)
    .then(() => alert('Ссылка скопирована в буфер обмена!'))
    .catch(() => alert('Не удалось скопировать ссылку'));
};
</script>

<style scoped>
.profile-page {
  padding-top: 40px;
  padding-bottom: 60px;
}

.profile-page__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.profile-page__title {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-text-gray);
  margin: 0 0 8px 0;
}

.profile-page__subtitle {
  font-size: 18px;
  color: var(--color-text-gray-light);
  margin: 0;
}

.profile-page__empty {
  text-align: center;
  padding: 60px 20px;
}

.profile-page__empty p {
  font-size: 18px;
  color: var(--color-text-gray-light);
  margin: 0 0 24px 0;
}

.profile-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

@media (max-width: 600px) {
  .profile-page {
    padding-top: 20px;
  }

  .profile-page__header {
    flex-direction: column;
  }

  .profile-page__title {
    font-size: 28px;
  }

  .profile-page__grid {
    grid-template-columns: 1fr;
  }
}
</style>