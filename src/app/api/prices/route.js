import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
    try {
        const prices = await stripe.prices.list();
        return NextResponse.json(prices.data);
    } catch (error) {
        return NextResponse.error();
    }
}
