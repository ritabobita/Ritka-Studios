import { redirect } from 'next/navigation'

import { stripe } from '../../lib/stripe'

export default async function Return({ searchParams }) {
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
    return (
      <section id="success" className='flex flex-col items-center justify-center mt-20 w-[70%] mx-auto'>
          <h1 className='text-4xl font-bold mb-4 text-center'>Thank you for your order!</h1>
          <img src="/images/Oprah-You-Get-A.jpg" alt="Success" className='w-1/2 mx-auto mb-4' />
          <p className='text-lg text-center'>
            We appreciate your business! A confirmation email will be sent to{' '}
          {customerEmail}. If you have any questions, please email:{' '}
        </p>
        <a href="mailto:ritkastudios@gmail.com" className='text-blue-500 text-lg'>ritkastudios@gmail.com</a>
      </section>
    )
  }
}