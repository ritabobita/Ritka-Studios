'use client';
import styles from './Cart.module.scss';
import { useState } from 'react';
import { LucideMinus, LucidePlus, X } from 'lucide-react';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    const removeFromCart = (item) => {
        setCartItems(cartItems.filter(i => i !== item));
    };  

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const handleCheckout = () => {
        console.log('Checkout button clicked');
    };

    const handleQuantityChange = (item, quantity) => {
        const updatedItems = cartItems.map(i => 
            i.id === item.id ? { ...i, quantity } : i
        );
        setCartItems(updatedItems);
    };

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
                <div className="flex flex-row items-center gap-12">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <span>Quantity</span>
                        <span>
                            <button onClick={() => handleQuantityChange(item, item.quantity - 1)} className={`${styles.quantityButton} border border-gray-400 text-black py-2 px-2 hover:bg-gray-200`}>
                                <LucideMinus className="w-3 h-3" />
                            </button>
                            <span className="mx-2">1</span>
                            <button onClick={() => handleQuantityChange(item, item.quantity + 1)} className={`${styles.quantityButton} border border-gray-400 text-black py-2 px-2 hover:bg-gray-200`}>
                                <LucidePlus className="w-3 h-3" />
                            </button>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <span>Total</span>
                        <span>$10.00</span>
                    </div>
                    <button onClick={() => removeFromCart(item)} className={`${styles.trashButton} py-1 px-3 hover:text-gray-500`}>
                        <X className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div className={`${styles.totalContainer} mt-4 flex flex-col items-end`}>
                <h3 className="text-xl">Subtotal: ${getTotal()}</h3>
            <button onClick={handleCheckout} className={`${styles.checkoutButton} mt-4 border border-black text-black py-2 px-4 hover:bg-gray-200`}>
                Proceed to Checkout
            </button>
            </div>
        </div>
    );
}