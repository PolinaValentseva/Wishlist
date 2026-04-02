<template>
  <div class="wishlist-card">
    <div class="wishlist-card__header">
      <h3 class="wishlist-card__title">{{ wishlist.title }}</h3>
      <div class="wishlist-card__actions">
        <button
          class="wishlist-card__edit"
          @click="emit('edit')"
          aria-label="Редактировать"
        >
<img src="@/assets/icons/edit.svg" alt="Редактировать" width="20" height="20">
        </button>
        <button
          class="wishlist-card__delete"
          @click="emit('delete')"
          aria-label="Удалить"
        >
<img src="@/assets/icons/cart.svg" alt="Удалить" width="20" height="20">
        </button>
      </div>
    </div>

    <div class="wishlist-card__body">
      <p v-if="wishlist.date" class="wishlist-card__date">
        {{ formatDate(wishlist.date) }}
      </p>
      <p v-if="wishlist.description" class="wishlist-card__description">
        {{ wishlist.description }}
      </p>
    </div>

    <div class="wishlist-card__footer">
      <RouterLink :to="`/wishlist/${wishlist.id}`" class="wishlist-card__link">
        Открыть вишлист
      </RouterLink>
      <button class="wishlist-card__share" @click="emit('share')">
<img src="@/assets/icons/share.svg" alt="Поделиться" width="20" height="20">
        <span>Поделиться</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IWishlist } from '@/types';
import { formatDate } from '@/utils/formatting';

const props = defineProps<{
  wishlist: IWishlist;
}>();

const emit = defineEmits<{
  edit: [];
  delete: [];
  share: [];
}>();
</script>

<style scoped>
.wishlist-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 24px;
  background: var(--color-white);
}

.wishlist-card__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.wishlist-card__title {
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text-100);
}

.wishlist-card__actions {
  display: flex;
  gap: 8px;
}

.wishlist-card__edit,
.wishlist-card__delete {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: var(--color-muted);
  transition: color 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.wishlist-card__edit:hover {
  color: var(--color-primary);
  background: var(--color-primary-alpha-10);
}

.wishlist-card__delete:hover {
  color: var(--color-error);
  background: var(--color-error-alpha-10);
}

.wishlist-card__body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
}

.wishlist-card__date {
  font-size: 16px;
  color: var(--color-text-70);
  margin: 0 0 8px 0;
}

.wishlist-card__description {
  font-size: 14px;
  color: var(--color-text-70);
  margin: 0 0 12px 0;
  overflow: hidden;
}

.wishlist-card__footer {
  display: flex;
  gap: 12px;
}

.wishlist-card__link {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: transform 0.25s;
}

.wishlist-card__link:hover {
  transform: translateY(-2px);
}

.wishlist-card__share {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background: transparent;
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s;
  white-space: nowrap;
}

.wishlist-card__share:hover {
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .wishlist-card {
    padding: 20px;
  }

  .wishlist-card__title {
    font-size: 18px;
  }

  .wishlist-card__footer {
    flex-direction: column;
  }

  .wishlist-card__link,
  .wishlist-card__share {
    width: 100%;
  }
}
</style>
