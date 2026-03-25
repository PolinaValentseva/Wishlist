import { STORAGE_KEY } from '@/constants';
import type { IGiftItem, IWishlist } from '@/types';

export const getAllWishlists = (): IWishlist[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  
  const parsed = JSON.parse(data);
  return Object.values(parsed);
};

export const getWishlistById = (id: string): IWishlist | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;
  
  const parsed = JSON.parse(data);
  return parsed[id] || null;
};

export const saveWishlist = (wishlist: IWishlist): IWishlist => {
  const data = localStorage.getItem(STORAGE_KEY);
  const wishlists = data ? JSON.parse(data) : {};
  
  wishlists[wishlist.id] = wishlist;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlists));
  
  return wishlist;
};

export const deleteWishlist = (id: string): void => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return;
  
  const wishlists = JSON.parse(data);
  delete wishlists[id];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlists));
};

export const addGiftToWishlist = (wishlistId: string, gift: IGiftItem): IWishlist | null => {
  const wishlist = getWishlistById(wishlistId);
  if (!wishlist) return null;
  
  wishlist.items.push(gift);
  saveWishlist(wishlist);
  
  return wishlist;
};

export const updateGiftInWishlist = (
  wishlistId: string,
  giftId: string,
  updates: Partial<IGiftItem>
): IWishlist | null => {
  const wishlist = getWishlistById(wishlistId);
  if (!wishlist) return null;

  const giftIndex = wishlist.items.findIndex((item: IGiftItem) => item.id === giftId);
  if (giftIndex === -1) return null;

  wishlist.items[giftIndex] = {
    ...wishlist.items[giftIndex]!,
    ...updates
  };
  saveWishlist(wishlist);

  return wishlist;
};

export const removeGiftFromWishlist = (wishlistId: string, giftId: string): IWishlist | null => {
  const wishlist = getWishlistById(wishlistId);
  if (!wishlist) return null;
  
  wishlist.items = wishlist.items.filter((item: IGiftItem) => item.id !== giftId);
  saveWishlist(wishlist);
  
  return wishlist;
};
