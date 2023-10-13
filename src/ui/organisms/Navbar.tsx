import { getCartFromCookies } from '@/api/cart';
import { ActiveLink } from '@/ui/atoms/ActiveLink';

export const Navbar = async () => {
  const cart = await getCartFromCookies();
  const quantity = cart?.orderItems.reduce((acc, val) => acc + val.quantity, 0) ?? 0;

  return (
    <div>
      <nav>
        <ul>
          <li>
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/products">All products</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/categories">Categories</ActiveLink>
          </li>
        </ul>
      </nav>
      <ActiveLink href="/cart">Qt: {quantity}</ActiveLink>
    </div>
  );
};
