import styles from './Footer.module.scss';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ ecommerceEnabled }) {
  return (
    <footer className="bg-white text-black border border-gray-400 m-[.3rem] mt-[5rem]">
      <div className={`${styles.footerContainer} px-4 py-2`}>
        <div className="flex flex-col justify-center items-center">
        <div className={`${styles.logo} flex items-center flex-shrink-0 text-white`}>
        <Link href="/">
            <Image className="fill-current" src="/images/Ritka-Footer.svg" alt="Ritka Studios Logo" width={100} height={100} />
          </Link>
        </div>
          
          <div className={`${styles.quickLinks}`}>
            <ul className="flex flex-row justify-center items-center gap-6">
              {ecommerceEnabled && (
                <>
                  <li><a href="/shop">Shop</a></li>
                  <li><a href="/seconds">Seconds</a></li>
                </>
              )}
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={`${styles.instagramLogo} flex flex-col justify-center items-center mt-2`}>
              <a href="https://www.instagram.com/ritkastudios/" target="_blank" rel="noopener">
                <Instagram size={24} />
              </a>
          </div>
        </div>
        
        <div className={`${styles.copyright} text-xs text-center mt-2`}>
          © {new Date().getFullYear()} Ritka Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
}