'use client';
import { usePathname } from 'next/navigation';
import styles from './ProductPage.module.scss';
import { useEffect, useState } from 'react';
import { formattedNumber } from '../../utils/utils';


const ProductPage = () => {
    // const router = useRouter();
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    // console.log("Product ID:", id);
    const [product, setProduct] = useState(null);
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id && id !== 'undefined') {
            const fetchProduct = async () => {
                try {
                    const response = await fetch(`/api/products/${id}`);
                    if (!response.ok) {
                        throw new Error('Product not found');
                    }
                    const data = await response.json();
                    console.log(data)
                    setProduct(data);
                } catch (err) {
                    console.error("Error fetching product:", err.message);
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            const fetchPrices = async () => {
                const response = await fetch('/api/prices');
                const data = await response.json();
                console.log(data)
                setPrices(data);
            };

            fetchProduct();
            fetchPrices();
        } else {
            setError("Invalid product ID");
            setLoading(false);
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>No product found.</div>;

    const productPrice = prices.find(price => price.id === product.default_price)?.unit_amount || 'Price not available';


    return (
        <div className={`${styles.productPage} flex flex-col items-center justify-center mt-10`}>
            <section className={`${styles.product} w-[70%] flex flex-row gap-10`}>
                <img src={product.images[0]} alt={product.name} className={`${styles.productImage}`} />
                <div key={product.id} className={`${styles.productContent} flex flex-col`}>
                    <h1 className='text-5xl font-bold mb-4'>{product.name}</h1>
                    <p className='text-lg font-bold mb-3'>{formattedNumber(productPrice)}</p>
                    <button className={`${styles.addToCartButton} text-black border border-black px-3 py-4 mb-6 w-[93%]`}>Add to Cart</button>
                    <p className='text-md mb-2'>{product.description}</p>
                </div>
            </section>
        </div>
    );
};

export default ProductPage;