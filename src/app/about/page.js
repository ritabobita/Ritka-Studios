import Image from 'next/image';
import styles from './about.module.scss';

export default function About() {
    return (
      <main className={`${styles.AboutPage}`}>
        <h1 className="mt-9 text-4xl text-center font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">About Ritka Studios</h1>
        <div className={`${styles.AboutContent} flex flex-row items-start justify-center mt-9 w-full gap-7`}>
          <Image src="/images/placeholder_image_400x600.svg" alt="About Ritka Studios" width={400} height={600} />
            <p className="text-left w-[30rem]">Hi! I'm Rita, the artist behind Ritka Studios.
              My journey with ceramics began three years ago, but my creative path spans many forms of artistic expression. 
              From making music to exploring photography and video production, I've always found joy in bringing ideas to life through different mediums and I've never been one to limit my creative curiosity.
              <br />
              <br />
              What draws me to ceramics is the intuitive connection between hands and clay, and the rewarding process of creating pieces that are both beautiful and functional. 
              My approach to pottery is deeply influenced by my background in other art forms. Just as I developed my distinct style in music over the years, 
              I bring that same experimental spirit to my ceramic work. My experience with photography taught me to seek out compelling color combinations, which you'll see reflected in my vibrant, playful pieces.
              <br />
              <br />
              At Ritka Studios, I create with a simple intention: to make pieces that are both fun to look at and fun to use. 
              While I strive for cohesion in my collections, I'm not afraid to follow my curiosity and try something unexpected. 
              Each piece is handcrafted with care, often featuring dynamic color combinations that work together to create a harmonious whole.
              <br />
              <br />
              You can find my latest work in my online shop; or follow along on <a href="https://www.instagram.com/ritkastudios/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Instagram </a>
              to check out my process and see what I'm working on.
              </p>
        </div>
      </main>
    );
  }