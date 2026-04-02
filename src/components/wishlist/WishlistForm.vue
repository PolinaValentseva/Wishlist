<template>
  <form @submit.prevent="createWishlist" class="wishlist-form">
    <div class="form-group">
      <label for="title" class="form-label">Название вишлиста</label>
      <input
        id="title"
        v-model="formData.title"
        type="text"
        class="form-input"
        :class="{ 'form-input--error': errors.title }"
        placeholder="Например, День рождения, 8 марта"
      />
      <span v-if="errors.title" class="form-error">{{ errors.title }}</span>
    </div>

    <div class="form-group">
      <label for="date" class="form-label">Дата события</label>
      <input
        id="date"
        v-model="formData.date"
        type="date"
        class="form-input"
        :class="{ 'form-input--error': errors.date }"
      />
      <span v-if="errors.date" class="form-error">{{ errors.date }}</span>
    </div>

    <div class="form-group">
      <label for="description" class="form-label">Описание</label>
      <textarea
        id="description"
        v-model="formData.description"
        class="form-textarea"
        placeholder="Например: приветствие, пожелания к подаркам, приглашения"
        rows="4"
      ></textarea>
    </div>

    <div class="form-actions">
      <AppButton variant="primary" type="submit">Создать</AppButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '@/components/ui/AppButton.vue';
import { validateWishlistForm } from '@/utils/validation';
import type { IWishlistFormData, IValidationErrors } from '@/types';

const formData = ref<IWishlistFormData>({
  title: '',
  date: '',
  description: ''
});

const errors = ref<IValidationErrors>({});

const emit = defineEmits<{
  submit: [data: IWishlistFormData];
}>();

const createWishlist = () => {
  const { errors: validationErrors, isErrors } = validateWishlistForm(formData.value);
  errors.value = validationErrors;

  if (isErrors) {
    return;
  }

  emit('submit', { ...formData.value });
};
</script>

<style scoped>
.wishlist-form {
  width: 500px;
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  color: var(--color-text-100);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--color-border-light);
  border-radius: 8px;
  font-size: 16px;
  font-family: var(--font-family);
  transition: border-color 0.25s, box-shadow 0.25s;
  outline: none;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-alpha-20);
}

.form-input--error {
  border-color: var(--color-error);
}

.form-input--error:focus {
  box-shadow: 0 0 0 3px var(--color-error-alpha-20);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-error {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-error);
}

.form-actions {
  margin-top: 32px;
}

@media (max-width: 600px) {
  .wishlist-form {
    width: 350px;
  }

  .form-group {
    margin-bottom: 20px;
  }
}

@media (max-width: 390px) {
  .wishlist-form {
    width: 280px;
  }

  .form-group {
    margin-bottom: 20px;
  }
}
</style>
