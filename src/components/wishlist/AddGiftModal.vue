<template>
  <div class="modal-overlay" @click="handleClose">
    <div class="modal" @click.stop>
      <div class="modal__header">
        <h2 class="modal__title">Добавить подарок</h2>
        <button class="modal__close" @click="handleClose" aria-label="Закрыть">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="modal__form">
        <div class="form-group">
          <label for="name" class="form-label">Название подарка</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            class="form-input"
            :class="{ 'form-input--error': errors.name }"
            placeholder="Например, Настольная игра"
          />
          <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
        </div>

        <div class="form-group">
          <label for="price" class="form-label">Цена (₽)</label>
          <input
            id="price"
            v-model.number="formData.price"
            type="number"
            class="form-input"
            :class="{ 'form-input--error': errors.price }"
            placeholder="500"
            min="0"
          />
          <span v-if="errors.price" class="form-error">{{ errors.price }}</span>
        </div>

        <div class="form-group">
          <label for="link" class="form-label">Ссылка на товар</label>
          <input
            id="link"
            v-model="formData.link"
            type="url"
            class="form-input"
            :class="{ 'form-input--error': errors.link }"
            placeholder="https://..."
          />
          <span v-if="errors.link" class="form-error">{{ errors.link }}</span>
        </div>

        <div class="form-group">
          <label for="image" class="form-label">Ссылка на изображение</label>
          <input
            id="image"
            v-model="formData.image"
            type="url"
            class="form-input"
            placeholder="https://..."
          />
        </div>

        <div class="modal__actions">
          <AppButton variant="outline" type="button" @click="handleClose">
            Отмена
          </AppButton>
          <AppButton variant="primary" type="submit">
            Добавить
          </AppButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AppButton from '@/components/AppButton.vue';

interface FormData {
  name: string;
  price: number | '';
  link: string;
  image: string;
}

interface FormErrors {
  name: string;
  price: string;
  link: string;
}

const props = defineProps<{
  wishlistId: string;
}>();

const emits = defineEmits<{
  close: [];
  add: [data: { name: string; price?: number; link: string; image?: string }];
}>();

const formData = ref<FormData>({
  name: '',
  price: '',
  link: '',
  image: ''
});

const errors = ref<FormErrors>({
  name: '',
  price: '',
  link: ''
});

// Блокировка прокрутки body при открытии модалки
onMounted(() => {
  document.body.style.overflow = 'hidden';
});

onBeforeUnmount(() => {
  document.body.style.overflow = '';
});

const handleClose = () => {
  document.body.style.overflow = '';
  emits('close');
};

const validateForm = (): boolean => {
  errors.value = {
    name: '',
    price: '',
    link: ''
  };

  let isValid = true;

  if (!formData.value.name.trim()) {
    errors.value.name = 'Название подарка обязательно';
    isValid = false;
  }

  if (formData.value.price && formData.value.price < 0) {
    errors.value.price = 'Цена не может быть отрицательной';
    isValid = false;
  }

  if (!formData.value.link.trim()) {
    errors.value.link = 'Ссылка на товар обязательна';
    isValid = false;
  } else if (!isValidUrl(formData.value.link)) {
    errors.value.link = 'Некорректный URL (должен начинаться с http:// или https://)';
    isValid = false;
  }

  return isValid;
};

const isValidUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch {
    return false;
  }
};

const handleSubmit = () => {
  if (!validateForm()) {
    return;
  }

  emits('add', {
    name: formData.value.name,
    price: formData.value.price || undefined,
    link: formData.value.link,
    image: formData.value.image || undefined
  });

  // Очистка формы
  formData.value = {
    name: '',
    price: '',
    link: '',
    image: ''
  };
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal {
  background: var(--color-white);
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 0 24px;
}

.modal__title {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-gray);
  margin: 0;
}

.modal__close {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: var(--color-muted);
  transition: color 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__close:hover {
  color: var(--color-text-gray);
}

.modal__form {
  padding: 24px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-gray);
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-border);
  border-radius: 8px;
  font-size: 14px;
  font-family: var(--font-family);
  transition: border-color 0.25s, box-shadow 0.25s;
  outline: none;
}

.form-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(248, 133, 156, 0.2);
}

.form-input--error {
  border-color: var(--color-error);
}

.form-input--error:focus {
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
}

.form-error {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-error);
}

.modal__actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
}
</style>
