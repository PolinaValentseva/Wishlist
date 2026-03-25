import { ref, computed } from 'vue';
import type { IWishlist, IGiftItem } from '@/types';
import * as storage from '@/services/storage';
import { generateId } from '@/utils/ids';

const wishlistsMap = ref<Map<string, IWishlist>>(new Map());

export function useWishlist() {
  const wishlists = computed(() => Array.from(wishlistsMap.value.values()) as IWishlist[]);

  const loadAllWishlists = (): void => {
    const data = storage.getAllWishlists();
    wishlistsMap.value = new Map(data.map(w => [w.id, w]));
  };

  const getWishlist = (id: string): IWishlist | null => {
    return wishlistsMap.value.get(id) ?? null;
  };

  const createWishlist = (data: Omit<IWishlist, 'id' | 'createdAt' | 'items'>): IWishlist => {
    const newWishlist: IWishlist = {
      ...data,
      id: generateId(),
      items: [],
      createdAt: new Date().toISOString()
    };
    storage.saveWishlist(newWishlist);
    wishlistsMap.value.set(newWishlist.id, newWishlist);
    return newWishlist;
  };

  const removeWishlist = (id: string): void => {
    storage.deleteWishlist(id);
    wishlistsMap.value.delete(id);
  };

  const addGift = (wishlistId: string, gift: IGiftItem): void => {
    const updated = storage.addGiftToWishlist(wishlistId, gift);
    if (updated) {
      wishlistsMap.value.set(wishlistId, updated);
    }
  };

  const removeGift = (wishlistId: string, giftId: string): void => {
    const updated = storage.removeGiftFromWishlist(wishlistId, giftId);
    if (updated) {
      wishlistsMap.value.set(wishlistId, updated);
    }
  };

  const updateGift = (wishlistId: string, giftId: string, updates: Partial<IGiftItem>): void => {
    const updated = storage.updateGiftInWishlist(wishlistId, giftId, updates);
    if (updated) {
      wishlistsMap.value.set(wishlistId, updated);
    }
  };

  return {
    wishlists,
    loadAllWishlists,
    getWishlist,
    createWishlist,
    removeWishlist,
    addGift,
    removeGift,
    updateGift
  };
}