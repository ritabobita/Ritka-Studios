import { notFound } from 'next/navigation';
import Checkout from '../components/Checkout/checkout'
import { showEcommerce } from '../../lib/flags';

export default async function CheckoutPage() {
  const ecommerceEnabled = await showEcommerce();

  if (!ecommerceEnabled) {
    notFound();
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <Checkout />
    </div>
  )
}
