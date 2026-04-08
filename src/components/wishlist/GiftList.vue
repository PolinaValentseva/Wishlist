<template>
  <div class="gift-list">
    <div v-if="gifts.length === 0" class="gift-list__empty">
      <div class="decor-gift" aria-hidden="true">
          <img src="@/assets/images/GiftList/gift-primary.svg" alt="Подарок" width="68" height="72">
          <img src="@/assets/images/GiftList/gift-primary.svg" alt="Подарок" width="133" height="143">
      </div>
      <p>У тебя еще нет ни одного подарка.<br>Скорее исправь это!</p>
    </div>
    
    <div v-else class="gift-list__grid">
      <GiftCard
        v-for="gift in gifts"
        :key="gift.id"
        :gift="gift"
        :show-delete="showDelete"
        :show-reserve="showReserve"
        @delete="emit('delete', gift.id)"
        @reserve="emit('reserve', gift.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IGiftItem } from '@/types';
import GiftCard from '@/components/wishlist/GiftCard.vue';

const props = defineProps<{
  gifts: IGiftItem[];
  showDelete?: boolean;
  showReserve?: boolean;
}>();

const emit = defineEmits<{
  delete: [giftId: string];
  reserve: [giftId: string];
}>();
</script>

<style scoped>
.gift-list__empty {
  text-align: center;
  padding: 60px 20px;
  color: var(--color-text-600);
  font-size: 18px;
}

.gift-list__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.decor-gift {
  margin-bottom: 25px;
}
</style>
