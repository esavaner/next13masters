export type ProductItemType = {
  id: string;
  category?: string;
  price?: number;
  name?: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
};
