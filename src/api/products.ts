import { type ProductItemType } from '@/ui/types/Products.types';

type ProductResponse = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
};

export const mapProductResponse = (p: ProductResponse): ProductItemType => {
  return {
    id: p.id,
    category: p.category,
    name: p.title,
    price: p.price,
    description: p.description,
    image: {
      src: p.image,
      alt: p.title,
    },
  };
};

export const getProducts = async () => {
  const res = await fetch('https://naszsklep-api.vercel.app/api/products');
  const productRes = (await res.json()) as ProductResponse[];
  return productRes.map(mapProductResponse);
};

export const getProductById = async (id: ProductItemType['id']) => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
  const productRes = (await res.json()) as ProductResponse;
  return mapProductResponse(productRes);
};
