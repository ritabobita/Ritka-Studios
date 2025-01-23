import React from 'react';
import styles from './ProductButton.module.scss';

const ProductButton = ({ children, className, href, ...props }) => {
    return (
        <a className={`${styles.button} ${className}`} href={href} {...props}>
            {children}
        </a>
    );
};

export default ProductButton;
