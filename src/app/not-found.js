import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Page Not Found</h2>
                <p className={styles.description}>
                    Sorry, the page you're looking for doesn't exist or may have been moved.
                </p>
                <Link href="/" className={styles.homeLink}>
                    Return Home
                </Link>
            </div>
        </div>
    );
}