<template>
  <div class="gift-card">
    <div class="gift-card__header">
      <h3 class="gift-card__title">{{ gift.name }}</h3>
      <button 
        v-if="showDelete" 
        class="gift-card__delete" 
        @click="emit('delete')"
        aria-label="Удалить подарок"
      >
<img src="@/assets/icons/cross.svg" alt="Удалить подарок" width="20" height="20">
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
        @click="emit('reserve')"
      >
        {{ gift.isReserved ? 'Зарезервировано' : 'Я заберу этот подарок' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IGiftItem } from '@/types';
import { formatPrice } from '@/utils/formatting';

const props = defineProps<{
  gift: IGiftItem;
  showDelete?: boolean;
  showReserve?: boolean;
}>();

const emit = defineEmits<{
  delete: [];
  reserve: [];
}>();
</script>

<style scoped>
.gift-card {
  border: 1px solid var(--color-border-light);
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
  color: var(--color-text-900);
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
  color: var(--color-text-600);
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
  background: var(--color-text-300);
  border-color: var(--color-text-300);
  color: var(--color-text-900);
  cursor: default;
}
</style>
