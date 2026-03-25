<template>
  <div class="container wishlist-page">
    <div v-if="!wishlist" class="wishlist-page__loading">
      <p>Загрузка...</p>
    </div>

    <template v-else>
      <div class="wishlist-page__header">
        <div class="wishlist-page__info">
          <h1 class="wishlist-page__title">{{ wishlist.title }}</h1>
          <p v-if="wishlist.date" class="wishlist-page__date">
            {{ formatDate(wishlist.date) }}
          </p>
          <p v-if="wishlist.description" class="wishlist-page__description">
            {{ wishlist.description }}
          </p>
        </div>

        <div class="wishlist-page__actions">
          <AppButton class="button" variant="outline-primary" @click="isAddModalOpen = true">
            <img src="@/assets/icons/plus.svg" alt="" width="20" height="20">
            <span>Добавить подарок</span>
          </AppButton>
          <AppButton class="button" variant="outline-primary" @click="copyLink">
            <img src="@/assets/icons/share.svg" alt="" width="20" height="20">
            <span>Копировать ссылку</span>
          </AppButton>
        </div>
      </div>

      <GiftList
        :gifts="wishlist.items"
        :show-delete="true"
        :show-reserve="false"
        @delete="deleteGift"
        @reserve="reserveGift"
      />

      <AddGiftModal
        v-if="isAddModalOpen"
        :wishlist-id="wishlistId"
        @close="isAddModalOpen = false"
        @add="createGift"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import AppButton from '@/components/ui/AppButton.vue';
import GiftList from '@/components/wishlist/GiftList.vue';
import AddGiftModal from '@/components/wishlist/AddGiftModal.vue';
import { useWishlist } from '@/composables/useWishlist';
import { formatDate } from '@/utils/formatting';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { generateId } from '@/utils/ids';
import type { IGiftItem } from '@/types';

const route = useRoute();
const wishlistId = route.params.id as string;

const { getWishlist, addGift, removeGift, loadAllWishlists } = useWishlist();
const wishlist = computed(() => getWishlist(wishlistId));
const isAddModalOpen = ref(false);

onMounted(() => {
  if (!getWishlist(wishlistId)) {
    loadAllWishlists();
  }
});

const createGift = (data: { name: string; price?: number; link?: string; image?: string }) => {
  const newGift: IGiftItem = {
    id: generateId(),
    name: data.name,
    price: data.price,
    link: data.link,
    image: data.image,
    isReserved: false
  };

  addGift(wishlistId, newGift);
  isAddModalOpen.value = false;
};

const deleteGift = (giftId: string) => {
  removeGift(wishlistId, giftId);
};

const reserveGift = (giftId: string) => {
  // Резервирование будет реализовано позже
  console.log('Reserve gift:', giftId);
};

const copyLink = () => {
  const shareUrl = `${window.location.origin}/share/${wishlistId}`;
  copyToClipboard(shareUrl);
};
</script>

<style scoped>
.wishlist-page {
  padding-top: 40px;
  padding-bottom: 60px;
}

.wishlist-page__loading {
  text-align: center;
  padding: 60px 20px;
  font-size: 18px;
  color: var(--color-text-gray-light);
}

.wishlist-page__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.button {
  display: flex;
  align-items: center;
  gap: 10px;
}

.wishlist-page__info {
  flex: 1;
  min-width: 280px;
}

.wishlist-page__title {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-text-gray);
  margin: 0 0 12px 0;
}

.wishlist-page__date {
  font-size: 18px;
  color: var(--color-text-gray-light);
  margin: 0 0 12px 0;
}

.wishlist-page__description {
  font-size: 16px;
  color: var(--color-text-gray-light);
  margin: 0;
  line-height: 1.6;
}

.wishlist-page__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .wishlist-page {
    padding-top: 20px;
  }

  .wishlist-page__header {
    flex-direction: column;
  }

  .wishlist-page__title {
    font-size: 28px;
  }

  .wishlist-page__actions {
    width: 100%;
  }

  .wishlist-page__actions button {
    flex: 1;
  }
}
</style>