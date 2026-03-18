<template>
  <div class="wishlist-card">
    <div class="wishlist-card__header">
      <h3 class="wishlist-card__title">{{ wishlist.title }}</h3>
      <div class="wishlist-card__actions">
        <button
          class="wishlist-card__edit"
          @click="$emit('edit')"
          aria-label="Редактировать"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.5 2.50021C18.8978 2.10239 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.10239 21.5 2.50021C21.8978 2.89804 22.1213 3.43762 22.1213 4.00021C22.1213 4.56281 21.8978 5.10239 21.5 5.50021L12 15.0002L8 16.0002L9 12.0002L18.5 2.50021Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button
          class="wishlist-card__delete"
          @click="$emit('delete')"
          aria-label="Удалить"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
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
      <button class="wishlist-card__share" @click="$emit('share')">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 7.37236V5.66628C10.5002 5.53453 10.5407 5.40579 10.6162 5.29628C10.6917 5.18677 10.799 5.1014 10.9245 5.05092C11.05 5.00044 11.1881 4.98712 11.3214 5.01263C11.4547 5.03814 11.5772 5.10134 11.6736 5.19426L16 9.33312L11.6736 13.4713C11.6099 13.5334 11.5341 13.5827 11.4507 13.6164C11.3673 13.65 11.2778 13.6673 11.1875 13.6673C11.0972 13.6673 11.0077 13.65 10.9243 13.6164C10.8409 13.5827 10.7651 13.5334 10.7014 13.4713C10.5725 13.3463 10.5 13.1768 10.5 13V11.3405C8.60938 11.3859 6.54344 11.7179 5 14V13.3333C5 10.2445 7.40625 7.70438 10.5 7.37236Z" fill="#F973A1"/>
          <circle cx="10" cy="10" r="9.5" stroke="#F973A1"/>
        </svg>
        <span>Поделиться</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Wishlist } from '@/utils/storage';

const props = defineProps<{
  wishlist: Wishlist;
}>();

const emits = defineEmits<{
  edit: [];
  delete: [];
  share: [];
}>();

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
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
  color: var(--color-text-gray);
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
  background: rgba(248, 133, 156, 0.1);
}

.wishlist-card__delete:hover {
  color: var(--color-error);
  background: rgba(231, 76, 60, 0.1);
}

.wishlist-card__body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
}

.wishlist-card__date {
  font-size: 16px;
  color: var(--color-text-gray-light);
  margin: 0 0 8px 0;
}

.wishlist-card__description {
  font-size: 14px;
  color: var(--color-text-gray-light);
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
