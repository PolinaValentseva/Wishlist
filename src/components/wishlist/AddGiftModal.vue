<template>
  <AppModal title="Добавить подарок" @close="closeModal">
    <form @submit.prevent="createGift" class="modal__form">
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
        <AppButton variant="outline" type="button" @click="closeModal">
          Отмена
        </AppButton>
        <AppButton variant="primary" type="submit">
          Добавить
        </AppButton>
      </div>
    </form>
  </AppModal>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AppModal from '@/components/ui/AppModal.vue';
import AppButton from '@/components/ui/AppButton.vue';
import { validateGiftForm } from '@/utils/validation';
import type { IGiftFormData, IValidationErrors } from '@/types';

const props = defineProps<{
  wishlistId: string;
}>();

const emit = defineEmits<{
  close: [];
  add: [data: IGiftFormData];
}>();

const formData = ref<IGiftFormData>({
  name: '',
  price: undefined,
  link: '',
  image: undefined
});

const errors = ref<IValidationErrors>({});

onMounted(() => {
  document.body.style.overflow = 'hidden';
});

onBeforeUnmount(() => {
  document.body.style.overflow = '';
});

const closeModal = () => {
  document.body.style.overflow = '';
  emit('close');
};

const createGift = () => {
  const { errors: validationErrors, isErrors } = validateGiftForm(formData.value);
  errors.value = validationErrors;

  if (isErrors) {
    return;
  }

  emit('add', {
    name: formData.value.name,
    price: formData.value.price,
    link: formData.value.link,
    image: formData.value.image
  });

  formData.value = {
    name: '',
    price: undefined,
    link: '',
    image: undefined
  };
};
</script>

<style scoped>

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-100);
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
  box-shadow: 0 0 0 3px var(--color-primary-alpha-20);
}

.form-input--error {
  border-color: var(--color-error);
}

.form-input--error:focus {
  box-shadow: 0 0 0 3px var(--color-error-alpha-20);
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