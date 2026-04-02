<template>
  <div class="modal-overlay" @mousedown="emit('close')">
    <div class="modal" @mousedown.stop>
      <div class="modal__header">
        <h2 class="modal__title">{{ title }}</h2>
        <button class="modal__close" @click="emit('close')">
<img src="@/assets/icons/cross.svg" alt="Закрыть" width="24" height="24">
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  padding: 20px;
}

.modal {
  background: var(--color-white);
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 90dvh;
  overflow-y: auto;
  box-shadow: 0 20px 60px var(--color-shadow-lg);
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
  color: var(--color-text-100);
  margin: 0;
}

.modal__close {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: var(--color-muted);
  font-size: 24px;
  line-height: 1;
  transition: color 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__close:hover {
  color: var(--color-text-100);
}
</style>