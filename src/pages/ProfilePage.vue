<template>
  <div class="container profile-page">
    <div class="profile-page__header">
      <div>
        <h1 class="profile-page__title">Профиль</h1>
        <p class="profile-page__subtitle">Управление вишлистами</p>
      </div>
      <RouterLink to="/create">
        <AppButton>Создать вишлист</AppButton>
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
        @edit="editWishlist(wishlist.id)"
        @delete="deleteWishlist(wishlist.id)"
        @share="shareWishlist(wishlist.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AppButton from '@/components/ui/AppButton.vue';
import WishlistCard from '@/components/wishlist/WishlistCard.vue';
import { useWishlist } from '@/composables/useWishlist';
import { copyToClipboard } from '@/utils/copyToClipboard';

const router = useRouter();
const { wishlists, loadAllWishlists, removeWishlist } = useWishlist();

onMounted(() => {
  loadAllWishlists();
});

const editWishlist = (id: string) => {
  router.push(`/wishlist/${id}`);
};

const deleteWishlist = (id: string) => {
  removeWishlist(id);
};

const shareWishlist = (id: string) => {
  const shareUrl = `${window.location.origin}/share/${id}`;
  copyToClipboard(shareUrl);
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