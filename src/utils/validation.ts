import type { IWishlistFormData, IGiftFormData, IValidationErrors } from '@/types';

export const isValidUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch {
    return false;
  }
};

export const validateWishlistForm = (data: IWishlistFormData): IValidationErrors => {
  const errors: IValidationErrors = {};

  if (!data.title.trim()) {
    errors.title = 'Название вишлиста обязательно для заполнения';
  }

  if (!data.date) {
    errors.date = 'Дата события обязательна для заполнения';
  }

  return errors;
};

export const validateGiftForm = (data: IGiftFormData): IValidationErrors => {
  const errors: IValidationErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Название подарка обязательно';
  }

  if (data.price !== undefined && data.price < 0) {
    errors.price = 'Цена не может быть отрицательной';
  }

  if (!data.link.trim()) {
    errors.link = 'Ссылка на товар обязательна';
  } else if (!isValidUrl(data.link)) {
    errors.link = 'Некорректный URL (должен начинаться с http:// или https://)';
  }

  return errors;
};