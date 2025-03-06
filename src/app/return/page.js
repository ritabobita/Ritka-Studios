import SuccessSection from '../components/SuccessSection'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'

// This is already a server component by default since it's a page.js file
export default async function Return({ searchParams }) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details: { email: customerEmail }
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    return <SuccessSection customerEmail={customerEmail} />
  }
}