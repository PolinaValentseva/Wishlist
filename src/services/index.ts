import { STORAGE_KEY } from '@/constants';
import type { IGiftItem, IWishlist } from '@/types';

const readData = (): Record<string, IWishlist> => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
};

const writeData = (data: Record<string, IWishlist>): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getAllWishlists = (): IWishlist[] => {
  const data = readData();
  return Object.values(data);
};

export const getWishlistById = (id: string): IWishlist | null => {
  const data = readData();
  return data[id] || null;
};

export const saveWishlist = (wishlist: IWishlist): IWishlist => {
  const data = readData();
  data[wishlist.id] = wishlist;
  writeData(data);
  return wishlist;
};

export const deleteWishlist = (id: string): void => {
  const data = readData();
  delete data[id];
  writeData(data);
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