type Props = {
  params: {
    category: string;
    pageNumber: string;
  };
};

type CategoryProps = {
  params: {
    category: string;
  };
};

export const generateStaticParams = async ({ params: { category } }: CategoryProps) => {
  if (category === 't-shirts') {
    return [{ pageNumber: '1' }, { pageNumber: '2' }];
  } else {
    return [{ pageNumber: '1' }];
  }
};

export default function CategoryProductPage({ params: { category, pageNumber } }: Props) {
  return (
    <h1>
      Produkty z kategorii {category}, strona {pageNumber}
    </h1>
  );
}
