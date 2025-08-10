import Image from 'next/image';
import styles from './StaticWorkGallery.module.scss';

export default function StaticWorkGallery() {
  const workItems = [
    { src: '/images/IMG_0586.jpg', alt: 'Handcrafted ceramic raku vase with natural textures' },
    { src: '/images/IMG_1424.jpg', alt: 'Blue ceramic colander' },
    { src: '/images/IMG_1625.jpg', alt: 'Green glazed ceramic mug' },
    { src: '/images/IMG_1550.jpg', alt: 'Ceramic bookends holding books' }
  ];

  return (
    <section className={styles.staticWorkGallery}>
      <h2 className={styles.header}>Some of My Work</h2>
      
      <div className={styles.gallery}>
        {workItems.map((item, index) => (
          <div key={index} className={styles.workItem}>
            <Image
              src={item.src}
              alt={item.alt}
              width={300}
              height={300}
              className={styles.workImage}
            />
          </div>
        ))}
      </div>

      <div className={styles.ctaContainer}>
        <a 
          href="https://ritkastudios.etsy.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Shop My Latest Work on Etsy
        </a>
      </div>
    </section>
  );
}