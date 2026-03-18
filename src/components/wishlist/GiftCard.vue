<template>
  <div class="gift-card">
    <div class="gift-card__header">
      <h3 class="gift-card__title">{{ gift.name }}</h3>
      <button 
        v-if="showDelete" 
        class="gift-card__delete" 
        @click="$emit('delete')"
        aria-label="Удалить подарок"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    
    <div v-if="gift.image" class="gift-card__image-wrapper">
      <img :src="gift.image" :alt="gift.name" class="gift-card__image">
    </div>
    
    <div class="gift-card__body">
      <p :class="['gift-card__price', { 'gift-card__price--no-price': !gift.price }]">
        {{ gift.price ? formatPrice(gift.price) : 'нет цены' }}
      </p>

      <a
        :href="gift.link"
        target="_blank"
        rel="noopener noreferrer"
        class="gift-card__link"
      >
        Перейти к товару
      </a>
      
      <button
        v-if="showReserve"
        :class="['gift-card__reserve', { 'gift-card__reserve--reserved': gift.isReserved }]"
        @click="$emit('reserve')"
      >
        {{ gift.isReserved ? 'Зарезервировано' : 'Я заберу этот подарок' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GiftItem } from '@/utils/storage';

const props = defineProps<{
  gift: GiftItem;
  showDelete?: boolean;
  showReserve?: boolean;
}>();

const emits = defineEmits<{
  delete: [];
  reserve: [];
}>();

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(price);
};
</script>

<style scoped>
.gift-card {
  border: 1px solid #c2d1dc;
  border-radius: 12px;
  padding: 20px;
  background: var(--color-white);
}

.gift-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.gift-card__title {
  font-size: 20px;
  font-weight: 600;
}

.gift-card__delete {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: var(--color-text-gray);
  transition: color 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gift-card__delete:hover {
  color: var(--color-error);
}

.gift-card__image-wrapper {
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
}

.gift-card__image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.gift-card__body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.gift-card__price {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-primary);
}

.gift-card__price--no-price {
  color: var(--color-text-gray-light);
  font-weight: 400;
  font-size: 16px;
}

.gift-card__link {
  color: var(--color-primary);
  text-decoration: underline;
  font-size: 16px;
  transition: opacity 0.25s;
}

.gift-card__link:hover {
  opacity: 0.8;
}

.gift-card__reserve {
  padding: 10px 20px;
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  background: transparent;
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s;
}

.gift-card__reserve:hover {
  background: var(--color-primary);
  color: var(--color-white);
}

.gift-card__reserve--reserved {
  background: var(--color-text-gray-super-light);
  border-color: var(--color-text-gray-super-light);
  color: var(--color-text-gray);
  cursor: default;
}
</style>
