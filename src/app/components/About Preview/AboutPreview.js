import Image from 'next/image';
import styles from './AboutPreview.module.scss';

export default function AboutPreview() {
    return (
      <main className={`${styles.AboutPreview}`}>
        <h1 className={`${styles.aboutPreviewHeader} text-4xl text-center font-extrabold leading-none tracking-tight md:text-5xl`}>About Ritka Studios</h1>
        <div className={`${styles.AboutContent} flex flex-row items-start justify-center my-12 w-full gap-7`}>
            <p className="md:w-[50rem]">Hi! I'm Rita, the artist behind Ritka Studios. 
                My ceramics journey began four years ago. I like to say I create pieces that are both fun to look at and fun to use. 
                Featuring vibrant colors and experimental glazes that reflect my curiosity in this medium. If you'd like 
                to learn more about me and my work, you can find more information <a href="/about" className="text-blue-500 hover:text-blue-700">here</a>.
              </p>
        </div>
      </main>
    );
  }