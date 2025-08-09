import Image from "next/image";
import VideoHero from "./components/Video Hero/VideoHero";
import FeaturedProductGrid from "./components/Featured Product Grid/FeaturedProductGrid";
import { showEcommerce } from '../lib/flags';

export default async function Home() {
  const ecommerceEnabled = await showEcommerce();

  return (
    <main className="HomePage">
      <VideoHero />
      {ecommerceEnabled ? <FeaturedProductGrid /> : null}
    </main>
  );
}