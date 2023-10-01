import { type ProductItemType } from '../types/Products.types';
import { formatPrice } from '../../utils';

type Props = {
  product: ProductItemType;
};

export const ProductBadge = ({ product: { category, price, name } }: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl">{name}</h1>
      <span className="text-xs">{category}</span>
      <h2 className="mt-2">{formatPrice(price)}</h2>
    </div>
  );
};
