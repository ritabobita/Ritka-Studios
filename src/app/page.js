import Image from "next/image";
import VideoHero from "./components/Video Hero/VideoHero";
import FeaturedProductGrid from "./components/Featured Product Grid/FeaturedProductGrid";
import StaticWorkGallery from "./components/Static Work Gallery/StaticWorkGallery";
import AboutPreview from "./components/About Preview/AboutPreview";
import EventsGallery from "./components/Events Gallery/EventsGallery";
import { showEcommerce } from '../lib/flags';

export default async function Home() {
  const ecommerceEnabled = await showEcommerce();

  return (
    <main className="HomePage">
      <VideoHero />
      <AboutPreview />
      {ecommerceEnabled ? <FeaturedProductGrid /> : null}
      <StaticWorkGallery />
      <EventsGallery />
    </main>
  );
}