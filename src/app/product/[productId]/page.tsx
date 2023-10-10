import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { cookies } from 'next/headers';
import { AddToCartButton } from './AddToCartButton';
import { getProductById, getProductsList } from '@/api/products';
import { ProductListItem } from '@/ui/molecues/ProductListItem';
import { RelatedProductList } from '@/ui/organisms/RelatedProductList';
import { addToCart, getOrCreateCart } from '@/api/cart';

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
  if (!product) {
    notFound();
  }
  return {
    title: `Produkt ${product.name}`,
    description: `${product.description}`,
    openGraph: {
      title: `Produkt ${product.name}`,
      description: `${product.description}`,
      images: product.images,
    },
  };
};

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.productId);
  if (!product) {
    notFound();
  }
  const relatedProducts = await getProductsList(4);

  const addToCartAction = async (_formData: FormData) => {
    'use server';

    const cart = await getOrCreateCart();
    cookies().set('cartId', cart.id, { httpOnly: true });
    await addToCart(cart.id, product);
  };

  return (
    <div>
      <ProductListItem product={product} />
      <span>{product.description}</span>
      <form action={addToCartAction}>
        <input type="hidden" name="productId" value={product.id} />
        <AddToCartButton />
      </form>
      <Suspense>
        <RelatedProductList products={relatedProducts} />
      </Suspense>
    </div>
  );
}
