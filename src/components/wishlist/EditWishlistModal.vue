<template>
  <AppModal title="Редактирование вишлиста" @close="emit('close')">
    <WishlistForm 
      :initialData="initialData" 
      @submit="submitForm"
    />
  </AppModal>
</template>

<script setup lang="ts">
import AppModal from '@/components/ui/AppModal.vue';
import WishlistForm from '@/components/wishlist/WishlistForm.vue';
import { useWishlist } from '@/composables/useWishlist';
import type { IWishlist, IWishlistFormData } from '@/types';

const { updateWishlistById } = useWishlist();

const props = defineProps<{
  wishlist: IWishlist;
}>();

const emit = defineEmits<{
  close: [];
}>();

const initialData: IWishlistFormData = {
  title: props.wishlist.title,
  date: props.wishlist.date,
  description: props.wishlist.description
};

const submitForm = (data: IWishlistFormData) => {
  updateWishlistById(props.wishlist.id, data);
  emit('close');
};
</script>