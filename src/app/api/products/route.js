// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function GET() {
//     try {
//         const products = await stripe.products.list();
//         return NextResponse.json(products.data);
//     } catch (error) {
//         return NextResponse.error();
//     }
// }

import { SquareClient, SquareEnvironment } from "square";
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const client = new SquareClient({
            environment: SquareEnvironment.Sandbox,
            token: process.env.SQUARE_SANDBOX_ACCESS_TOKEN
        });

        // Get all catalog items with their images
        const result = await client.catalog.list({
            types: "ITEM,IMAGE"  // This will fetch both items and their images
        });

        console.log('Square API Response:', result); // See what we're getting

        const safeResult = JSON.parse(JSON.stringify(result, (_, value) =>
            typeof value === 'bigint' ? value.toString() : value
        ));

        return NextResponse.json(safeResult);

    } catch (error) {
        console.error('Square API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}