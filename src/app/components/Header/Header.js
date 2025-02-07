import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className="flex items-center justify-between flex-wrap bg-transparent px-6">
      <div className={`${styles.logo} flex items-center flex-shrink-0 text-white mr-6`}>
        <Link href="/">
            <Image className="fill-current mr-2" src="/images/svgviewer-output.svg" alt="Ritka Studios Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto max-w-fit">
        <ul className="text-sm lg:flex-grow">
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
    </header>
  );
}