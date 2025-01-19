import Image from "next/image";
import VideoHero from "./components/Video Hero/VideoHero";
import FeaturedProductGrid from "./components/Featured Product Grid/FeaturedProductGrid";

export default function Home() {
  return (
    <main>
      <VideoHero />
      <h2 className="text-center text-6xl font-bold my-24">Our Products</h2>
      <FeaturedProductGrid />
    </main>
  );
}