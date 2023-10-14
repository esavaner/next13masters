'use client';

import { ProductOrderByInput } from '@/gql/graphql';

type Props = {
  handleSort: (value: ProductOrderByInput) => void;
};

type OptionArray = {
  label: string;
  value?: ProductOrderByInput;
  testId?: string;
};

export const SortBy = ({ handleSort }: Props) => {
  const options: OptionArray[] = [
    {
      label: 'Sort by',
    },
    {
      value: 'price_ASC',
      label: 'Price ascending',
      testId: 'sort-by-price',
    },
    {
      value: 'price_DESC',
      label: 'Price descending',
      testId: 'sort-by-price',
    },
  ];

  return (
    <select onChange={(e) => handleSort(e.target.value as ProductOrderByInput)}>
      {options.map((option) => (
        <option value={option.value} key={option.label} data-testid={option.testId}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
