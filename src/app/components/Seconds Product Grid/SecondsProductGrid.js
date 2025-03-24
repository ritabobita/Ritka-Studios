// 'use client'
// import { useEffect, useState } from 'react';
// import { formattedNumber } from '../../utils/utils';
// import styles from './SecondsProductGrid.module.scss';
// import ProductButton from '../Product Button/ProductButton';
// import Link from 'next/link';

// export default function SecondsProductGrid() {
//     const [products, setProducts] = useState([]);
//     const [prices, setPrices] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const response = await fetch('/api/products');
//             const data = await response.json();
//             console.log(data)
//             setProducts(data);
//         };

//         const fetchPrices = async () => {
//             const response = await fetch('/api/prices');
//             const data = await response.json();
//             console.log(data)
//             setPrices(data);
//         };

//         fetchProducts();
//         fetchPrices();
//     }, []);

//     return (
//         <div className={styles.secondsProductGrid}>
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
//         </div>
//     )
// }

'use client'
import { useEffect, useState } from 'react';
import styles from './SecondsProductGrid.module.scss';
import Link from 'next/link';
import { formattedNumber } from '../../utils/utils';

export default function SecondsProductGrid() {
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

                if (data.response?.objects) {
                    // Separate items and images
                    const items = data.response.objects.filter(obj => obj.type === 'ITEM');
                    const images = data.response.objects.filter(obj => obj.type === 'IMAGE');
                    console.log(items)

                    // Map through items and find their matching images
                    const productsWithImages = items.map(item => {
                        const imageId = item.itemData?.imageIds?.[0];
                        const matchingImage = images.find(img => img.id === imageId);
                        
                        return {
                            ...item,
                            imageUrl: matchingImage?.imageData?.url || '/placeholder-image.jpg'
                        };
                    });

                    setProducts(productsWithImages);
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
        <div className={styles.secondsProductGrid}>
            <section className={styles.products}>
                {products.map(product => (
                    <article key={product.id} className={styles.productCard}>
                        <Link href={`/product/${product.id}`}>
                            <img 
                                src={product.imageUrl} 
                                alt={product.itemData?.name || 'Missing image'}
                                className={styles.productImage}
                            />
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
        </div>
    );
}