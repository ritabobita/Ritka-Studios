import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <p>Ritka Studios</p>
        </div>
    </footer>
  );
}