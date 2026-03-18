<template>
  <div class="container share-page">
    <div v-if="!wishlist" class="share-page__loading">
      <p>Загрузка...</p>
    </div>

    <template v-else>
      <div class="share-page__header">
        <div class="share-page__info">
          <h1 class="share-page__title">{{ wishlist.title }}</h1>
          <p v-if="wishlist.date" class="share-page__date">
            {{ formatDate(wishlist.date) }}
          </p>
          <p v-if="wishlist.description" class="share-page__description">
            {{ wishlist.description }}
          </p>
        </div>
      </div>

      <p class="share-page__subtitle">Выберите подарок, который вы хотите подарить:</p>

      <GiftList
        :gifts="wishlist.items"
        :show-delete="false"
        :show-reserve="true"
        @reserve="handleReserveGift"
      />

      <div class="share-page__owner-hint">
        <p class="share-page__owner-hint-text">Это вишлист вашего друга. Поделитесь своим выбором!</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GiftList from '@/components/wishlist/GiftList.vue';
import { getWishlistById, updateGiftInWishlist, type Wishlist } from '@/utils/storage';

const route = useRoute();
const wishlistId = route.params.id as string;

const wishlist = ref<Wishlist | null>(null);

onMounted(() => {
  wishlist.value = getWishlistById(wishlistId);
});

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const handleReserveGift = (giftId: string) => {
  const updated = updateGiftInWishlist(wishlistId, giftId, {
    isReserved: true
  });

  if (updated) {
    wishlist.value = updated;
  }
};
</script>

<style scoped>
.share-page {
  padding-top: 40px;
  padding-bottom: 60px;
}

.share-page__loading {
  text-align: center;
  padding: 60px 20px;
  font-size: 18px;
  color: var(--color-text-gray-light);
}

.share-page__header {
  margin-bottom: 40px;
}

.share-page__title {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-text-gray);
  margin: 0 0 12px 0;
}

.share-page__date {
  font-size: 18px;
  color: var(--color-text-gray-light);
  margin: 0 0 12px 0;
}

.share-page__description {
  font-size: 16px;
  color: var(--color-text-gray-light);
  margin: 0;
  line-height: 1.6;
}

.share-page__subtitle {
  font-size: 20px;
  color: var(--color-text-gray);
  margin-bottom: 24px;
}

.share-page__owner-hint {
  margin-top: 40px;
  padding: 20px;
  background: var(--color-bg-light);
  border-radius: 12px;
  text-align: center;
}

.share-page__owner-hint-text {
  margin: 0;
  font-size: 16px;
  color: var(--color-text-gray);
}

@media (max-width: 600px) {
  .share-page {
    padding-top: 20px;
  }

  .share-page__title {
    font-size: 28px;
  }
}
</style>
