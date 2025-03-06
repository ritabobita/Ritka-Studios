'use client'

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { useCart } from '../components/Context/CartContext'
import { fetchClientSecret } from '../actions/stripe'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState('')
  const { cartItems } = useCart()

  useEffect(() => {
    // Fetch the client secret when component mounts
    const getClientSecret = async () => {
      const secret = await fetchClientSecret(cartItems)
      setClientSecret(secret)
    }
    getClientSecret()
  }, [cartItems])

  if (!clientSecret) {
    return <div>Loading...</div>
  }

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ clientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}