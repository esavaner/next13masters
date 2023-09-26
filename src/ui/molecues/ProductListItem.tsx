import { ImageContainer } from '../atoms/ImageContainer';
import { ProductBadge } from '../atoms/ProductBadge';
import { type ProductItemType } from '../types/Products.types';

type Props = {
  product: ProductItemType;
};

export const ProductListItem = ({ product }: Props) => {
  return (
    <li>
      <article>
        <ImageContainer {...product.image} />
        <ProductBadge product={product} />
      </article>
    </li>
  );
};
