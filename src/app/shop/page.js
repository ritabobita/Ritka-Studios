import ShopProductGrid from '../components/Shop Product Grid/ShopProductGrid';
import { showEcommerce } from '../../lib/flags';

export default async function Shop() {

  const ecommerceEnabled = await showEcommerce();

    return (
      <main>
        <h1 className="mt-9 text-4xl text-center font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">Shop Ritka Studios</h1>
        {ecommerceEnabled ? <ShopProductGrid /> : <div>Ecommerce is disabled</div>}
      </main>
    );
  }