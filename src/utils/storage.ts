export interface GiftItem {
  id: string;
  name: string;
  price?: number;
  link?: string;
  image?: string;
  isReserved: boolean;
  reservedBy?: string;
}

export interface Wishlist {
  id: string;
  title: string;
  date: string;
  description: string;
  items: GiftItem[];
  createdAt: string;
}

const STORAGE_KEY = 'wishlists';

//Получить все вишлисты
export const getAllWishlists = (): Wishlist[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  
  const parsed = JSON.parse(data);
  return Object.values(parsed);
};

//Получить вишлист по ID

export const getWishlistById = (id: string): Wishlist | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;
  
  const parsed = JSON.parse(data);
  return parsed[id] || null;
};

//Сохранить вишлист (создание или обновление)

export const saveWishlist = (wishlist: Wishlist): void => {
  const data = localStorage.getItem(STORAGE_KEY);
  const wishlists = data ? JSON.parse(data) : {};
  
  wishlists[wishlist.id] = wishlist;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlists));
};

//Удалить вишлист по ID

export const deleteWishlist = (id: string): void => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return;
  
  const wishlists = JSON.parse(data);
  delete wishlists[id];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlists));
};

//Сгенерировать уникальный ID

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

//Добавить подарок в вишлист

export const addGiftToWishlist = (wishlistId: string, gift: GiftItem): Wishlist | null => {
  const wishlist = getWishlistById(wishlistId);
  if (!wishlist) return null;
  
  wishlist.items.push(gift);
  saveWishlist(wishlist);
  
  return wishlist;
};

//Обновить подарок в вишлисте

export const updateGiftInWishlist = (
  wishlistId: string,
  giftId: string,
  updates: { name?: string; price?: number; link?: string; image?: string; isReserved?: boolean; reservedBy?: string }
): Wishlist | null => {
  const wishlist = getWishlistById(wishlistId);
  if (!wishlist) return null;

  const giftIndex = wishlist.items.findIndex(item => item.id === giftId);
  if (giftIndex === -1) return null;

  const currentGift = wishlist.items[giftIndex]!;
  wishlist.items[giftIndex] = {
    id: currentGift.id,
    name: updates.name ?? currentGift.name,
    price: updates.price ?? currentGift.price,
    link: updates.link ?? currentGift.link,
    image: updates.image ?? currentGift.image,
    isReserved: updates.isReserved ?? currentGift.isReserved,
    reservedBy: updates.reservedBy ?? currentGift.reservedBy
  };
  saveWishlist(wishlist);

  return wishlist;
};

//Удалить подарок из вишлиста

export const removeGiftFromWishlist = (wishlistId: string, giftId: string): Wishlist | null => {
  const wishlist = getWishlistById(wishlistId);
  if (!wishlist) return null;
  
  wishlist.items = wishlist.items.filter(item => item.id !== giftId);
  saveWishlist(wishlist);
  
  return wishlist;
};
