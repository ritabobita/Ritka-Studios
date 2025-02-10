'use client'
import styles from './ShopProductGrid.module.scss';
import ProductButton from '../Product Button/ProductButton';

export default function ShopProductGrid() {
    return (
        <div className={styles.shopProductGrid}>
            <section className={styles.products}>
            <article className={styles.productCard}>
                <img
                    src="https://i.etsystatic.com/35122230/c/2312/1838/79/148/il/b86066/4373628315/il_680x540.4373628315_7lkq.jpg"
                    alt="Bud Vase"
                />
                <div className={styles.productInfo}>
                    <h3 className={styles.productName}>Bud Vase</h3>
                    <p className={styles.productPrice}>$100</p>
                </div>
            </article>
            <article className={styles.productCard}>
                <img
                    src="https://i.etsystatic.com/35122230/c/2910/2237/0/0/il/226620/4715730938/il_680x540.4715730938_bpmd.jpg"
                    alt="Bud Vase"
                />
                <div className={styles.productInfo}>
                    <h3 className={styles.productName}>Bud Vase</h3>
                    <p className={styles.productPrice}>$100</p>
                </div>
            </article>
            <article className={styles.productCard}>
                <img
                    src="https://i.etsystatic.com/35122230/c/3000/2384/0/0/il/df540c/4087687814/il_680x540.4087687814_1y1j.jpg"
                    alt="Flower Vase"
                />
                <div className={styles.productInfo}>
                    <h3 className={styles.productName}>Flower Vase</h3>
                    <p className={styles.productPrice}>$100</p>
                </div>
            </article>
            <article className={styles.productCard}>
                <img 
                    src="https://i.etsystatic.com/35122230/r/il/abbddb/4715682318/il_340x270.4715682318_5tu8.jpg"
                    alt="Creamer"
                />
                <div className={styles.productInfo}>
                    <h3 className={styles.productName}>Creamer</h3>
                    <p className={styles.productPrice}>$100</p>
                </div>
            </article>
            <article className={styles.productCard}>
                <img
                    src="https://i.etsystatic.com/35122230/c/2445/1943/553/41/il/d8ba31/4699605164/il_340x270.4699605164_p4po.jpg"
                    alt="Bud Vase"
                />
                <div className={styles.productInfo}>
                    <h3 className={styles.productName}>Bud Vase</h3>
                    <p className={styles.productPrice}>$100</p>
                </div>
            </article>
            <article className={styles.productCard}>
                <img
                    src="https://i.etsystatic.com/35122230/c/2922/2053/0/0/il/423eec/4763865791/il_340x270.4763865791_edc7.jpg"
                    alt="Bud Vase"
                />
                <div className={styles.productInfo}>
                    <h3 className={styles.productName}>Bud Vase</h3>
                    <p className={styles.productPrice}>$100</p>
                </div>
            </article>
            <article className={styles.productCard}>
                <img
                    src="https://i.etsystatic.com/35122230/c/2922/2053/0/0/il/423eec/4763865791/il_340x270.4763865791_edc7.jpg"
                    alt="Bud Vase"
                />
                <div className={styles.productInfo}>
                    <h3 className={styles.productName}>Bud Vase</h3>
                    <p className={styles.productPrice}>$100</p>
                </div>
            </article>
            <article className={styles.productCard}>
                <img
                    src="https://i.etsystatic.com/35122230/c/2922/2053/0/0/il/423eec/4763865791/il_340x270.4763865791_edc7.jpg"
                    alt="Bud Vase"
                />
                <div className={styles.productInfo}>
                    <h3 className={styles.productName}>Bud Vase</h3>
                    <p className={styles.productPrice}>$100</p>
                </div>
            </article>
        </section>
        {/* <ProductButton className={styles.viewAllProducts} href="/shop">View All Products</ProductButton> */}
        </div>
    )
}