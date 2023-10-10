'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export const AddToCartButton = () => {
  const formStatus = useFormStatus();
  return (
    <button
      type="submit"
      className="rounded-sm disabled:cursor-wait disabled:bg-slate-300"
      disabled={formStatus.pending}
    >
      Add to cart
    </button>
  );
};
