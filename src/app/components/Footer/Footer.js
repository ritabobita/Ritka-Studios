import styles from './Footer.module.scss';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-black border border-gray-400 m-[.3rem]">
      <div className=" px-4 py-2">
        <div className="flex flex-col justify-center items-center">
        <div className={`${styles.logo} flex items-center flex-shrink-0 text-white`}>
        <Link href="/">
            <Image className="fill-current" src="/images/Ritka-Footer.svg" alt="Ritka Studios Logo" width={100} height={100} />
          </Link>
        </div>
          
          <div className={`${styles.quickLinks}`}>
            {/* <h3 className="text-lg font-semibold mb-4">Quick Links</h3> */}
            <ul className="flex flex-row justify-between items-center">
              <li><a href="/shop" className="transition-colors">Shop</a></li>
              <li><a href="/seconds" className="transition-colors">Seconds</a></li>
              <li><a href="/about" className="transition-colors">About</a></li>
              <li><a href="/contact" className="transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col justify-center items-center mt-3">
            {/* <h3 className="text-xs font-semibold mb-3">See What We're Up To</h3> */}
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
          </div>
        </div>
        
        <div className="text-xs text-center mt-4">
          © {new Date().getFullYear()} Ritka Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
}