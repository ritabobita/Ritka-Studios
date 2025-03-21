// 'use client'
// import { useEffect, useState } from 'react';
// import { formattedNumber } from '../../utils/utils';
// import styles from './FeaturedProductGrid.module.scss';
// import ProductButton from '../Product Button/ProductButton';
// import Link from 'next/link';

// export default function FeaturedProductGrid() {
//     const [products, setProducts] = useState([]);
//     const [prices, setPrices] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const response = await fetch('/api/products');
//             const data = await response.json();
//             setProducts(data);
//         };

//         const fetchPrices = async () => {
//             const response = await fetch('/api/prices');
//             const data = await response.json();
//             setPrices(data);
//         };

//         fetchProducts();
//         fetchPrices();
//     }, []);

//     return (
//         <div className={styles.featuredProductGrid}>
//             <section className={styles.products}>

//                 {products.map(product => {
//                     const productPrice = prices.find(price => price.id === product.default_price) ?.unit_amount || 'Price not available';

//                     return (
//                     <article key={product.id} className={styles.productCard}>
//                         <Link href={`/product/${product.id}`}>
//                         <img src={product.images[0]} alt={product.name}
//                         />
//                         <div className={styles.productInfo}>
//                             <h3 className={styles.productName}>{product.name}</h3>
//                             <p className={styles.productPrice}>{formattedNumber(productPrice)}</p>
//                         </div>
//                         </Link>
//                     </article>
//                     );
//                 })}
//         </section>
//         <ProductButton className={styles.viewAllProducts} href="/shop">View All Products</ProductButton>
//         </div>
//     )
// }



'use client'
import { useEffect, useState } from 'react';
import styles from './FeaturedProductGrid.module.scss';
import Link from 'next/link';
import ProductButton from '../Product Button/ProductButton';
import { formattedNumber } from '../../utils/utils';


export default function FeaturedProductGrid() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('API response:', data);

                if (data.response?.objects) {
                    setProducts(data.response.objects);
                } else {
                    setError('No products found');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message);
            }
        };

        fetchProducts();
    }, []);

    if (error) {
        return <div>Error loading products: {error}</div>;
    }

    return (
        <div className={styles.featuredProductGrid}>
            <section className={styles.products}>
                {products.map(product => (
                    <article key={product.id} className={styles.productCard}>
                        <Link href={`/product/${product.id}`}>
                            <div className={styles.productInfo}>
                                <h3 className={styles.productName}>
                                    {product.itemData?.name || 'No name'}
                                </h3>
                                <p className={styles.productPrice}>{formattedNumber(product.itemData?.variations[0]?.itemVariationData?.priceMoney?.amount)}</p>
                            </div>
                        </Link>
                    </article>
                ))}
            </section>
            <ProductButton className={styles.viewAllProducts} href="/shop">View All Products</ProductButton>
        </div>
    );
}