import { redirect } from 'next/navigation';
import { getCartFromCookies } from '@/api/cart';
import { formatPrice } from '@/utils';

export default async function CartPage() {
  const cart = await getCartFromCookies();

  if (!cart) {
    redirect('/');
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantitiy</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.orderItems.map(
            (item) =>
              item.product && (
                <tr key={item.id}>
                  <td>{item.product.name}</td>
                  <td>{item.quantity}</td>
                  <td>{formatPrice(item.product.price)}</td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </div>
  );
}
