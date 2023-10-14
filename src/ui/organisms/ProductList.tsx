'use client';

import { ProductListItem } from '../molecues/ProductListItem';
import { ProductOrderByInput, type ProductListItemFragment } from '@/gql/graphql';
import { SortBy } from '@/ui/molecues/SortBy';
import { useState } from 'react';

type Props = {
  products: ProductListItemFragment[];
};

export const ProductList = ({ products }: Props) => {
  const [sortBy, setSortBy] = useState<ProductOrderByInput>();

  const sortedProducts = products.sort((a, b) => {
    if (sortBy === 'price_ASC') {
      return a.price - b.price;
    }
    if (sortBy === 'price_DESC') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <SortBy handleSort={(value) => setSortBy(value)} />
      <ul
        data-testid="products-list"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {sortedProducts.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};
