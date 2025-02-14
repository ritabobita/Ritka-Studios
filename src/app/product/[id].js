import { useRouter } from 'next/router';
import styles from './ProductPage.module.scss';

const ProductPage = () => {

    const router = useRouter();
    const { id } = router.query;

    const product = {
        name: "Bud Vase",
        id: 1,
        price: "$100",
        description: "A beautiful bud vase",
        image: "https://i.etsystatic.com/35122230/c/2312/1838/79/148/il/b86066/4373628315/il_680x540.4373628315_7lkq.jpg"
    }

    return (
        <div key={product.id} className={`${styles.ProductPage}`}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} />
        </div>
    )
}

export default ProductPage;