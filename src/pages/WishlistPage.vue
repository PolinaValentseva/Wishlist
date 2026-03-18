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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.47719 0 0 4.47719 0 10C0 15.5231 4.47719 20 10 20C15.5231 20 20 15.5231 20 10C20 4.47719 15.5231 0 10 0ZM10 18.7697C5.17531 18.7697 1.25 14.8247 1.25 9.99996C1.25 5.17527 5.17531 1.24996 10 1.24996C14.8247 1.24996 18.75 5.17529 18.75 9.99996C18.75 14.8246 14.8247 18.7697 10 18.7697ZM14.375 9.375H10.625V5.625C10.625 5.28 10.345 5 10 5C9.655 5 9.375 5.28 9.375 5.625V9.375H5.625C5.28 9.375 5 9.655 5 10C5 10.345 5.28 10.625 5.625 10.625H9.375V14.375C9.375 14.72 9.655 15 10 15C10.345 15 10.625 14.72 10.625 14.375V10.625H14.375C14.72 10.625 15 10.345 15 10C15 9.655 14.72 9.375 14.375 9.375Z" fill="#F973A1"/>
            </svg>
            <span>Добавить подарок</span>
          </AppButton>
          <AppButton class="button" variant="outline-primary" @click="handleCopyLink">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 7.37236V5.66628C10.5002 5.53453 10.5407 5.40579 10.6162 5.29628C10.6917 5.18677 10.799 5.1014 10.9245 5.05092C11.05 5.00044 11.1881 4.98712 11.3214 5.01263C11.4547 5.03814 11.5772 5.10134 11.6736 5.19426L16 9.33312L11.6736 13.4713C11.6099 13.5334 11.5341 13.5827 11.4507 13.6164C11.3673 13.65 11.2778 13.6673 11.1875 13.6673C11.0972 13.6673 11.0077 13.65 10.9243 13.6164C10.8409 13.5827 10.7651 13.5334 10.7014 13.4713C10.5725 13.3463 10.5 13.1768 10.5 13V11.3405C8.60938 11.3859 6.54344 11.7179 5 14V13.3333C5 10.2445 7.40625 7.70438 10.5 7.37236Z" fill="#F973A1"/>
              <circle cx="10" cy="10" r="9.5" stroke="#F973A1"/>
            </svg>

            <span>Копировать ссылку</span>
          </AppButton>
        </div>
      </div>

      <GiftList
        :gifts="wishlist.items"
        :show-delete="true"
        :show-reserve="false"
        @delete="handleDeleteGift"
        @reserve="handleReserveGift"
      />

      <AddGiftModal
        v-if="isAddModalOpen"
        :wishlist-id="wishlistId"
        @close="isAddModalOpen = false"
        @add="handleAddGift"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AppButton from '@/components/AppButton.vue';
import GiftList from '@/components/wishlist/GiftList.vue';
import AddGiftModal from '@/components/wishlist/AddGiftModal.vue';
import {
  getWishlistById,
  addGiftToWishlist,
  removeGiftFromWishlist,
  generateId,
  type GiftItem,
  type Wishlist
} from '@/utils/storage';

const route = useRoute();
const wishlistId = route.params.id as string;

const wishlist = ref<Wishlist | null>(null);
const isAddModalOpen = ref(false);

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

const handleAddGift = (data: { name: string; price?: number; link?: string; image?: string }) => {
  const newGift: GiftItem = {
    id: generateId(),
    name: data.name,
    price: data.price,
    link: data.link,
    image: data.image,
    isReserved: false
  };

  const updated = addGiftToWishlist(wishlistId, newGift);
  if (updated) {
    wishlist.value = updated;
    isAddModalOpen.value = false;
  }
};

const handleDeleteGift = (giftId: string) => {
  const updated = removeGiftFromWishlist(wishlistId, giftId);
  if (updated) {
    wishlist.value = updated;
  }
};

const handleReserveGift = (giftId: string) => {
  // Резервирование будет реализовано позже
  console.log('Reserve gift:', giftId);
};

const handleCopyLink = async () => {
  const shareUrl = `${window.location.origin}/share/${wishlistId}`;
  try {
    await navigator.clipboard.writeText(shareUrl);
    alert('Ссылка скопирована в буфер обмена!');
  } catch {
    alert('Не удалось скопировать ссылку');
  }
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