'use client';
import styles from './Cart.module.scss';
import { useState } from 'react';

export default function Cart() {
    // const [cartItems, setCartItems] = useState([]);

    // const addToCart = (item) => {
    //     setCartItems([...cartItems, item]);
    // }; 

    // const removeFromCart = (item) => {
    //     setCartItems(cartItems.filter(i => i !== item));
    // };  

    // const getTotal = () => {
    //     return cartItems.reduce((total, item) => total + item.price, 0);
    // };

    // const clearCart = () => {
    //     setCartItems([]);
    // };

    // const handleCheckout = () => {
    //     console.log('Checkout button clicked');
    // };

    // const handleQuantityChange = (item, quantity) => {
    //     const updatedItems = cartItems.map(i => 
    //         i.id === item.id ? { ...i, quantity } : i
    //     );
    //     setCartItems(updatedItems);
    // };

    return (
        <div className={`${styles.cart} p-4`}>
            <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
            <div className={`${styles.cartContainer} flex flex-row justify-around mt-12 border border-gray-600`}>
                <div className={`${styles.cartItem} flex flex-row gap-5`}>
                    <img src="/images/Ritka-Header.svg" alt="Product 1" className="border" />
                    <div className="flex flex-col items-center justify-center">
                        <span>Item Name</span>
                        <span>$10.00</span>
                    </div>
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <span>Quantity</span>
                        <span>
                            <button className={`${styles.quantityButton} border border-gray-400 text-black py-1 px-3 hover:bg-gray-200`}>
                                -
                            </button>
                            <span className="mx-2">1</span>
                            <button className={`${styles.quantityButton} border border-gray-400 text-black py-1 px-3 hover:bg-gray-200`}>
                                +
                            </button>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <span>Total</span>
                        <span>$10.00</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.totalContainer} mt-4 flex flex-col items-end`}>
                <h3 className="text-xl">Subtotal: $25.00</h3>
            <button className={`${styles.checkoutButton} mt-4 border border-black text-black py-2 px-4 hover:bg-gray-200`}>
                Proceed to Checkout
            </button>
            </div>
        </div>
    );
}