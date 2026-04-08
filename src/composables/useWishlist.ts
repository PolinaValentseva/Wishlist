import { ref } from 'vue';
import type { IWishlist, IGiftItem, IWishlistFormData } from '@/types';
import * as services from '@/services';
import { generateId } from '@/utils/ids';

const wishlists = ref<IWishlist[]>([]);

export function useWishlist() {
  const updateWishlistInArray = (updated: IWishlist): void => {
    const index = wishlists.value.findIndex(wishlist => wishlist.id === updated.id);
    if (index !== -1) {
      wishlists.value[index] = updated;
    }
  };

  const loadAllWishlists = (): void => {
    wishlists.value = services.getAllWishlists();
  };

  const getWishlist = (id: string): IWishlist | undefined => {
    return wishlists.value.find(wishlist => wishlist.id === id);
  };

  const createWishlist = (data: IWishlistFormData): IWishlist => {
    const newWishlist: IWishlist = {
      ...data,
      id: generateId(),
      items: [],
      createdAt: new Date().toISOString()
    };
    
    services.saveWishlist(newWishlist);
    wishlists.value.push(newWishlist);
    
    return newWishlist;
  };

  const removeWishlist = (id: string): void => {
    services.deleteWishlist(id);
    wishlists.value = wishlists.value.filter(wishlist => wishlist.id !== id);
  };

  const updateWishlist = (id: string, data: IWishlistFormData): void => {
    const updated = services.updateWishlist(id, data);
    if (updated) {
      updateWishlistInArray(updated);
    }
  };

  const addGift = (wishlistId: string, gift: IGiftItem): void => {
    const updated = services.addGiftToWishlist(wishlistId, gift);
    if (updated) {
      updateWishlistInArray(updated);
    }
  };

  const removeGift = (wishlistId: string, giftId: string): void => {
    const updated = services.removeGiftFromWishlist(wishlistId, giftId);
    if (updated) {
      updateWishlistInArray(updated);
    }
  };

  const updateGift = (wishlistId: string, giftId: string, updates: Partial<IGiftItem>): void => {
    const updated = services.updateGiftInWishlist(wishlistId, giftId, updates);
    if (updated) {
      updateWishlistInArray(updated);
    }
  };

  return {
    wishlists,
    loadAllWishlists,
    getWishlist,
    createWishlist,
    removeWishlist,
    updateWishlist,
    addGift,
    removeGift,
    updateGift
  };
}