'use client'

import { useCart } from '../components/Context/CartContext'
import { useEffect, useState } from 'react'

export default function SuccessSection({ customerEmail }) {
  const { clearCart } = useCart()
  const [hasCleared, setHasCleared] = useState(false)
  
  useEffect(() => {
    if (!hasCleared) {
      console.log('Clearing cart from return page')
      clearCart()
      setHasCleared(true)
    }
  }, [clearCart, hasCleared])

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