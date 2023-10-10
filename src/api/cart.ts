import { cookies } from 'next/headers';
import { executeGraphql } from './utils';
import {
  CartCreateDocument,
  type CartFragment,
  CartGetByIdDocument,
  type ProductGetByIdQuery,
  CartAddProductDocument,
} from '@/gql/graphql';

export const createCart = async () => {
  return executeGraphql(CartCreateDocument, {});
};

export const getCartFromCookies = async () => {
  const cartId = cookies().get('cartId')?.value;
  if (cartId) {
    const cart = await executeGraphql(CartGetByIdDocument, { id: cartId });
    if (cart.order) {
      return cart.order;
    }
  }
};

export const getOrCreateCart = async (): Promise<CartFragment> => {
  const existingCart = await getCartFromCookies();
  if (existingCart) {
    return existingCart;
  }
  const cart = await createCart();
  if (!cart.createOrder) {
    throw new Error('Failed to create cart');
  }
  return cart.createOrder;
};

export const addToCart = async (
  orderId: string,
  product: ProductGetByIdQuery['products'][number],
) => {
  return executeGraphql(CartAddProductDocument, {
    orderId,
    productId: product.id,
    total: product.price,
  });
};
