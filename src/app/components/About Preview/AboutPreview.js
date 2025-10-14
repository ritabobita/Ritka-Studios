import Image from 'next/image';
import styles from './AboutPreview.module.scss';

export default function AboutPreview() {
    return (
      <main className={`${styles.AboutPreview}`}>
        <h2 className={`${styles.aboutPreviewHeader} text-center font-extrabold leading-none tracking-tight`}>About Ritka Studios</h2>
        <div className={`${styles.AboutContent} flex flex-row items-start justify-center my-12 w-full gap-7`}>
            <p className="lg:w-[50rem]">Hi! I&apos;m Rita, the artist behind Ritka Studios. I like to say I create pieces that are both fun to look at and fun to use.
                Featuring vibrant colors and experimental glazes that reflect my curiosity in this medium. If you&apos;d like
                to learn more about me and my work, you can find more information <a href="/about" className="text-blue-500 hover:text-blue-700">here</a>.
              </p>
        </div>
      </main>
    );
  }