import { createQuery } from 'react-query-kit';
import { getProductByIdOrSlug, getProductBySlug, getProducts } from './requests';
import type { IProduct, IProductQuery, IProductResponse } from './types';

export const useProductsQuery = createQuery<IProductResponse, Partial<IProductQuery>>({
  queryKey: ['products'],
  fetcher: (params) => getProducts(params),
});

export const useProductByIdOrSlugQuery = createQuery<IProduct, string>({
  queryKey: ['product'],
  fetcher: (id) => getProductByIdOrSlug(id),
});

export const useProductBySlugQuery = createQuery<IProduct, string>({
  queryKey: ['product-by-slug'],
  fetcher: (slug) => getProductBySlug(slug),
});
