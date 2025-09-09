import { notFound } from 'next/navigation';
import { showEcommerce } from '../../lib/flags';
import CartClient from './CartClient';

export default async function Cart() {
    const ecommerceEnabled = await showEcommerce();

    if (!ecommerceEnabled) {
        notFound();
    }

    return <CartClient />;
}