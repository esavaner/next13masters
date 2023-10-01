import Link from 'next/link';
import { ImageContainer } from '../atoms/ImageContainer';
import { ProductBadge } from '../atoms/ProductBadge';
import { type ProductItemType } from '../types/Products.types';

type Props = {
  product: ProductItemType;
};

export const ProductListItem = ({ product }: Props) => {
  return (
    <li>
      <Link href={`/product/${product.id}`}>
        <article>
          <ImageContainer {...product.image} />
          <ProductBadge product={product} />
        </article>
      </Link>
    </li>
  );
};
