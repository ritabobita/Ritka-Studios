import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req, { params }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    try {
        const product = await stripe.products.retrieve(id);
        return NextResponse.json(product);
    } catch (error) {
        console.error(`Error fetching product: ${error.message}`);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
