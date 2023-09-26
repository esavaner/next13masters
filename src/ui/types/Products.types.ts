export type ProductItemType = {
  id: string;
  category?: string;
  price?: number;
  name?: string;
  image: {
    src: string;
    alt: string;
  };
};
