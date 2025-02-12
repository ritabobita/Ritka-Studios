'use client'
import styles from './FeaturedProductGrid.module.scss';
import ProductButton from '../Product Button/ProductButton';
import Link from 'next/link';

export default function FeaturedProductGrid() {

    const products = [
        {
            id: 1,
            name: "Bud Vase",
            price: "$100",
            image: "https://i.etsystatic.com/35122230/c/2312/1838/79/148/il/b86066/4373628315/il_680x540.4373628315_7lkq.jpg"
        },
        {
            id: 2,
            name: "Flower Vase",
            price: "$100",
            image: "https://i.etsystatic.com/35122230/c/3000/2384/0/0/il/df540c/4087687814/il_680x540.4087687814_1y1j.jpg"
        },
        {
            id: 3,
            name: "Creamer",
            price: "$100",
            image: "https://i.etsystatic.com/35122230/r/il/abbddb/4715682318/il_340x270.4715682318_5tu8.jpg"
        },
        {
            id: 4,
            name: "Bud Vase",
            price: "$100",
            image: "https://i.etsystatic.com/35122230/c/2445/1943/553/41/il/d8ba31/4699605164/il_340x270.4699605164_p4po.jpg"
        },
        {
            id: 5,
            name: "Bud Vase",
            price: "$100",
            image: "https://i.etsystatic.com/35122230/c/2922/2053/0/0/il/423eec/4763865791/il_340x270.4763865791_edc7.jpg"
        },
        {
            id: 6,
            name: "Bud Vase",
            price: "$100",
            image: "https://i.etsystatic.com/35122230/c/2922/2053/0/0/il/423eec/4763865791/il_340x270.4763865791_edc7.jpg"
        },
        {
            id: 7,
            name: "Bud Vase",
            price: "$100",
            image: "https://i.etsystatic.com/35122230/c/2922/2053/0/0/il/423eec/4763865791/il_340x270.4763865791_edc7.jpg"
        },
        {
            id: 8,
            name: "Bud Vase",
            price: "$100",
            image: "https://i.etsystatic.com/35122230/c/2922/2053/0/0/il/423eec/4763865791/il_340x270.4763865791_edc7.jpg"
        }
    ]

    return (
        <div className={styles.featuredProductGrid}>
            <section className={styles.products}>

                {products.map(product => (
                    <article key={product.id} className={styles.productCard}>
                        <Link href={`/products/${product.id}`}>
                        <img src={product.image} alt={product.name}
                        />
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>{product.price}</p>
                        </div>
                        </Link>
                    </article>
                ))}
        </section>
        <ProductButton className={styles.viewAllProducts} href="/shop">View All Products</ProductButton>
        </div>
    )
}