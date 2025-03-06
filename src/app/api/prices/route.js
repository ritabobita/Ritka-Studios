import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
    try {
        let allPrices = [];
        let hasMore = true;
        let startingAfter = undefined;

        while (hasMore) {
            const prices = await stripe.prices.list({
                limit: 100,  // Maximum allowed by Stripe
                starting_after: startingAfter,
            });
            
            allPrices = [...allPrices, ...prices.data];
            hasMore = prices.has_more;
            
            if (hasMore && prices.data.length > 0) {
                startingAfter = prices.data[prices.data.length - 1].id;
            }
        }

        return NextResponse.json(allPrices);
    } catch (error) {
        console.error('Error fetching prices:', error);
        return NextResponse.error();
    }
}
