export interface IGiftItem {
  id: string;
  name: string;
  price?: number;
  link?: string;
  image?: string;
  isReserved: boolean;
  reservedBy?: string;
}

export interface IWishlist {
  id: string;
  title: string;
  date: string;
  description: string;
  items: IGiftItem[];
  createdAt: string;
}

export interface IWishlistFormData {
  title: string;
  date: string;
  description: string;
}

export interface IGiftFormData {
  name: string;
  price?: number;
  link: string;
  image?: string;
}

export interface IValidationErrors {
  [key: string]: string;
}

export interface IValidationResult {
  errors: IValidationErrors;
  isErrors: boolean;
} 
