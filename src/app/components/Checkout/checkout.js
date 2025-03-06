'use client'

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { useCart } from '../Context/CartContext'
import { fetchClientSecret } from '../../actions/stripe'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState('')
  const { cartItems, clearCart } = useCart()

  useEffect(() => {
    // Check if this is a return from Stripe
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('session_id')) {
      console.log('Returned from Stripe checkout');
      clearCart();
      window.location.href = '/checkout/success';
      return;
    }

    const getClientSecret = async () => {
      const secret = await fetchClientSecret(cartItems)
      setClientSecret(secret)
    }
    getClientSecret()
  }, [cartItems, clearCart])

  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{
            clientSecret,
            onComplete: () => {
              console.log('Checkout completed');
              clearCart();
              window.location.href = '/checkout/success';
            }
          }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
      {!clientSecret && <div>Loading...</div>}
    </div>
  )
}