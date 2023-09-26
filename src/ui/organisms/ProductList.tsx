import { ProductListItem } from '../molecues/ProductListItem';
import { type ProductItemType } from '../types/Products.types';

type Props = {
  products: ProductItemType[];
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
