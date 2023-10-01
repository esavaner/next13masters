import { type Metadata } from 'next';
import { getProductById } from '@/api/products';
import { ProductListItem } from '@/ui/molecues/ProductListItem';

type Props = {
  params: {
    productId: string;
  };
};

// export const generateStaticParams = async () => {
//   const products = await getProducts();
//   return products.map((product) => ({ productId: product.id }));
// };

export const generateMetadata = async ({ params: { productId } }: Props): Promise<Metadata> => {
  const product = await getProductById(productId);
  return {
    title: `Produkt ${product.name}`,
    description: `${product.description}`,
    openGraph: {
      title: `Produkt ${product.name}`,
      description: `${product.description}`,
      images: [product.image.src],
    },
  };
};

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.productId);
  return (
    <div>
      <ProductListItem product={product} />
      <span>{product.description}</span>
    </div>
  );
}
