import Image from "next/image";
import VideoHero from "./components/Video Hero/VideoHero";

export default function Home() {
  return (
    // tailwind was in className previously
    <main>
      <VideoHero />
    </main>
  );
}