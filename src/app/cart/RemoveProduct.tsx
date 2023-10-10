'use client';

import { useTransition } from 'react';
import { removeItem } from './actions';
import { useRouter } from 'next/navigation';

type Props = {
  itemId: string;
};

export const RemoveButton = ({ itemId }: Props) => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <button
      disabled={pending}
      className="text-red-500 disabled:text-gray-400"
      onClick={() => {
        startTransition(async () => {
          await removeItem(itemId);
          router.refresh();
        });
      }}
    >
      Remove
    </button>
  );
};
