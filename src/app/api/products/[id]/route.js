// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function GET(req, { params }) {
//     const { id } = params;

//     if (!id) {
//         return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
//     }

//     try {
//         const product = await stripe.products.retrieve(id);
//         return NextResponse.json(product);
//     } catch (error) {
//         console.error(`Error fetching product: ${error.message}`);
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }

import { SquareClient, SquareEnvironment } from "square";
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    try {
        const client = new SquareClient({
            environment: SquareEnvironment.Sandbox,
            token: process.env.SQUARE_SANDBOX_ACCESS_TOKEN
        });

        // Get the specific catalog item
        const result = await client.catalog.object.get({
            objectId: id
        });
        
        // If the item has an image ID, fetch the image as well
        let image = null;
        if (result.object?.itemData?.imageIds?.[0]) {
            const imageResult = await client.catalog.object.get({
                objectId: result.object.itemData.imageIds[0]
            });
            image = imageResult.object?.imageData?.url;
        }

        const safeResult = JSON.parse(JSON.stringify(
            { ...result.object, imageUrl: image || '/placeholder-image.jpg' },
            (_, value) => typeof value === 'bigint' ? value.toString() : value
        ));

        return NextResponse.json(safeResult);

    } catch (error) {
        console.error('Square API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}