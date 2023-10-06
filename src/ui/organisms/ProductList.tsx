import { ProductListItem } from '../molecues/ProductListItem';
import { type ProductListItemFragment } from '@/gql/graphql';

type Props = {
  products: ProductListItemFragment[];
};

export const ProductList = ({ products }: Props) => {
  return (
    <ul
      data-testid="products-list"
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
