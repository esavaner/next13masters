import { formatPrice } from '../../utils';
import { type ProductListItemFragment } from '@/gql/graphql';

type Props = {
  product: ProductListItemFragment;
};

export const ProductBadge = ({ product: { categories, price, name } }: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl">{name}</h1>
      <span className="text-xs">{categories?.[0]?.name}</span>
      <span className="mt-2">{formatPrice(price)}</span>
    </div>
  );
};
