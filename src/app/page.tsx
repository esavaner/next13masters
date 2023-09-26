import { ProductList } from '@/ui/organisms/ProductList';
import { type ProductItemType } from '@/ui/types/Products.types';

const products: ProductItemType[] = [
  {
    id: '1',
    category: 'cat1',
    price: 123,
    name: 'test1',
    image: {
      src: '/hat1.png',
      alt: 'hat1',
    },
  },
  {
    id: '2',
    category: 'cat2',
    price: 123,
    name: 'test2',
    image: {
      src: '/hat2.png',
      alt: 'hat2',
    },
  },
  {
    id: '3',
    category: 'cat3',
    price: 123,
    name: 'test3',
    image: {
      src: '/hat3.png',
      alt: 'hat3',
    },
  },
  {
    id: '4',
    category: 'cat4',
    price: 123,
    name: 'test4',
    image: {
      src: '/hat4.png',
      alt: 'hat4',
    },
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <ProductList products={products} />
      </section>
    </main>
  );
}
