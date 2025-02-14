import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
    try {
        const products = await stripe.products.list();
        return NextResponse.json(products.data);
    } catch (error) {
        return NextResponse.error();
    }
}
