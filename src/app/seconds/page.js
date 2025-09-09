import { notFound } from 'next/navigation';
import SecondsProductGrid from '../components/Seconds Product Grid/SecondsProductGrid';
import { showEcommerce } from '../../lib/flags';

export default async function Seconds() {
  const ecommerceEnabled = await showEcommerce();

  if (!ecommerceEnabled) {
    notFound();
  }

  return (
    <main>
      <h1 className="mt-9 text-4xl text-center font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">Shop Seconds</h1>
      <SecondsProductGrid />
    </main>
  );
}