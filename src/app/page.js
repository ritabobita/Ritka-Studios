import Image from "next/image";
import VideoHero from "./components/Video Hero/VideoHero";
import FeaturedProductGrid from "./components/Featured Product Grid/FeaturedProductGrid";

export default function Home() {
  return (
    <main className="HomePage">
      <VideoHero />
      <FeaturedProductGrid />
    </main>
  );
}