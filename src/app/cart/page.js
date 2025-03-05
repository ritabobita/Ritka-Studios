'use client';
import styles from './Cart.module.scss';
import { useCart } from '../components/Context/CartContext';
import { LucideMinus, LucidePlus, X } from 'lucide-react';
import { formattedNumber } from '../utils/utils';

export default function Cart() {
    const { cartItems, removeFromCart, getTotal, handleQuantityChange } = useCart();

    const handleCheckout = () => {
        console.log('Checkout button clicked');
        // Implement checkout logic here
    };

    return (
        <div className={`${styles.cart} p-4`}>
            <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className={`${styles.cartContainer} flex flex-row justify-around mt-12 border border-gray-600`}>
                        <div className={`${styles.cartItem} flex flex-row gap-5`}>
                            <img src={item.images[0]} alt={item.name} className="border" />
                            <div className="flex flex-col items-center justify-center">
                                <span>{item.name}</span>
                                <span>{formattedNumber(item.price)}</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-12">
                            <div className="flex flex-col items-center justify-center gap-3">
                                <span>Quantity</span>
                                <span>
                                    <button onClick={() => handleQuantityChange(item, item.quantity - 1)} className={`${styles.quantityButton} border border-gray-400 text-black py-2 px-2 hover:bg-gray-200`}>
                                        <LucideMinus className="w-3 h-3" />
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item, item.quantity + 1)} className={`${styles.quantityButton} border border-gray-400 text-black py-2 px-2 hover:bg-gray-200`}>
                                        <LucidePlus className="w-3 h-3" />
                                    </button>
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3">
                                <span>Total</span>
                                <span>{formattedNumber(item.price * item.quantity)}</span>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className={`${styles.trashButton} py-1 px-3 hover:text-gray-500`}>
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                ))
            )}
            <div className={`${styles.totalContainer} mt-4 flex flex-col items-end`}>
                <h3 className="text-xl">Subtotal: {formattedNumber(getTotal())}</h3>
                <button onClick={handleCheckout} className={`${styles.checkoutButton} mt-4 border border-black text-black py-2 px-4 hover:bg-gray-200`}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}