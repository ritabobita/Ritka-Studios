'use client';
import { usePathname } from 'next/navigation';
import styles from './ProductPage.module.scss';
import { useEffect, useState } from 'react';

const ProductPage = () => {
    // const router = useRouter();
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    console.log("Product ID:", id);
    const [product, setProduct] = useState(null);
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
                    setProduct(data);
                } catch (err) {
                    console.error("Error fetching product:", err.message);
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchProduct();
        } else {
            setError("Invalid product ID");
            setLoading(false);
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>No product found.</div>;

    return (
        <div key={product.id} className={`${styles.ProductPage}`}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} />
        </div>
    );
};

export default ProductPage;