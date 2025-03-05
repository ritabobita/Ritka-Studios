'use client';
import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuClick, setMenuClick] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
    toggleMenu();
  }

  return (
    <header className={styles.header}>
      <nav className="flex items-center justify-between flex-wrap bg-transparent px-6">
      <div className={`${styles.logo} flex items-center flex-shrink-0 text-white mr-6`}>
        <Link href="/" onClick={handleMenuClick}>
            <Image className="fill-current mr-2" src="/images/Ritka-Header.svg" alt="Ritka Studios Logo" width={100} height={100} />
        </Link>
        </div>

        {/* Menu Icon on tablet and mobile */}
        <div className={`${styles.hamburger}`}>
        {isOpen ? <X size={24} onClick={toggleMenu} /> : <Menu size={24} onClick={toggleMenu} />}
        </div>

        {/* Menu on desktop */}
        <div className={`${styles.fullMenu} w-full block flex-grow lg:flex lg:items-center lg:w-auto max-w-fit`}>
        <ul className={`${styles.navLinks} text-sm lg:flex-grow`}>
          <li className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <Link href="/">Home</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <Link href="/seconds">Seconds</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <Link href="/about">About</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        </div>
      </nav>

      {/* Menu on tablet and mobile */}
      {isOpen && (
          <div className={styles.mobileMenu}>
            <ul>
              <li><Link href="/" onClick={handleMenuClick}>Home</Link></li>
              <li><Link href="/shop" onClick={handleMenuClick}>Shop</Link></li>
              <li><Link href="/seconds" onClick={handleMenuClick}>Seconds</Link></li>
              <li><Link href="/about" onClick={handleMenuClick}>About</Link></li>
              <li><Link href="/contact" onClick={handleMenuClick}>Contact</Link></li>
            </ul>
          </div>
        )}
    </header>
  );
}