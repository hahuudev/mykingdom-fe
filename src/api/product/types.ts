import type { IMetaResponse, ITableQuery } from './../../types/index';

export interface IProductQuery extends ITableQuery {}

export interface IProductVariant {
  _id: string;
  sku: string;
  name: string;
  price: number;
  salePrice: number;
  quantity: number;
  soldCount: number;
  attributes: Record<string, string>;
  images: string[];
}

export interface IBrandInfo {
  _id: string;
  name: string;
  slug: string;
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  type: string;
  images: string[];
  categories: string[];
  primaryCategoryId: string | null;
  brandId: IBrandInfo;
  variants: IProductVariant[];
  viewCount: number;
  totalSoldCount: number;
  averageRating: number;
  reviewCount: number;
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  isOnSale: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export interface IProductResponse {
  items: IProduct[];
  meta: IMetaResponse;
}
