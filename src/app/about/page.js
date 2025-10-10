import Image from 'next/image';
import styles from './about.module.scss';

export default function About() {
    return (
      <main className={`${styles.AboutPage}`}>
        <h1 className="mt-9 text-4xl text-center font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">About Ritka Studios</h1>
        <div className={`${styles.AboutContent} flex flex-row items-start justify-center my-12 w-full gap-7`}>
          <Image src="/images/About_Photo.jpg" alt="About Ritka Studios" width={400} height={600} />
            <p className="text-left w-[30rem]">Hi! I'm Rita, the artist behind Ritka Studios. 
              My journey with ceramics began in 2021, but my creative path spans many forms of artistic expression—from music to photography and video production. 
              What draws me to ceramics is the intuitive connection between hands and clay.
              <br />
              <br />
              My approach to pottery is deeply influenced by my background in other art forms, where I learned that there's always a way to translate an idea into reality. 
              That philosophy leads me to make use of and embrace experimentation.
              I work both on the wheel and with hand-building techniques, creating pieces with a simple intention: to make objects that are fun to look at or fun to use. 
              Each piece is handcrafted with care, often featuring dynamic color combinations that work together to create a harmonious whole.
              <br />
              <br />
              You can find my latest work in my <a href="https://ritkastudios.etsy.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">online shop</a>; or follow along on <a href="https://www.instagram.com/ritkastudios/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Instagram </a>
              to see what I'm working on.
              </p>
        </div>
      </main>
    );
  }