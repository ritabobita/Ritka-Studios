'use client'
import { useEffect, useState } from 'react';
import styles from './FeaturedProductGrid.module.scss';
import ProductButton from '../Product Button/ProductButton';
import Link from 'next/link';

export default function FeaturedProductGrid() {
    const [products, setProducts] = useState([]);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            console.log(data)
            setProducts(data);
        };

        const fetchPrices = async () => {
            const response = await fetch('/api/prices');
            const data = await response.json();
            console.log(data)
            setPrices(data);
        };

        fetchProducts();
        fetchPrices();
    }, []);

    return (
        <div className={styles.featuredProductGrid}>
            <section className={styles.products}>

                {products.map(product => {
                    const productPrice = prices.find(price => price.id === product.default_price) ?.unit_amount || 'Price not available';

                    return (
                    <article key={product.id} className={styles.productCard}>
                        <Link href={`/product/${product.id}`}>
                        <img src={product.images[0]} alt={product.name}
                        />
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>{productPrice}</p>
                        </div>
                        </Link>
                    </article>
                    );
                })}
        </section>
        <ProductButton className={styles.viewAllProducts} href="/shop">View All Products</ProductButton>
        </div>
    )
}