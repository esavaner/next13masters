import { executeGraphql } from './utils';
import {
  ProductsGetListDocument,
  ProductsGetByCategorySlugDocument,
  ProductGetByIdDocument,
  ProductsCountDocument,
} from '@/gql/graphql';

export const getProductsList = async (first: number = 20, skip: number = 0) => {
  const res = await executeGraphql(ProductsGetListDocument, { skip, first });
  return res.products;
};

export const getProductsByCategorySlug = async (
  slug: string,
  first: number = 20,
  skip: number = 0,
) => {
  const products = (await executeGraphql(ProductsGetByCategorySlugDocument, { slug, skip, first }))
    .categories[0]?.products;

  return products;
};

export const getProductById = async (id: string) => {
  const product = (await executeGraphql(ProductGetByIdDocument, { id })).products[0];
  return product;
};

export const getProductsCount = async () => {
  const count = (await executeGraphql(ProductsCountDocument, {})).productsConnection.aggregate
    .count;
  return count;
};
