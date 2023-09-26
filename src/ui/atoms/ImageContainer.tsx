import { type ProductItemType } from '../types/Products.types';

type Props = ProductItemType['image'];

export const ImageContainer = ({ alt, src }: Props) => {
  return (
    <div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
      <img
        height={320}
        width={320}
        alt={alt}
        src={src}
        className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
      />
    </div>
  );
};
