'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CartContext = createContext();

// storage helpers
const getStorageItem = (key) => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem(key) || '[]');
};

const setStorageItem = (key, value) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isHydrated, setIsHydrated] = useState(false);
    const router = useRouter();

    // Add clearCart function with localStorage clearing
    const clearCart = () => {
        console.log('Clearing cart...');
        setCartItems([]);  // Set state first
        localStorage.setItem('cartItems', JSON.stringify([]));
        console.log('Cart cleared, new state:', []);
    };

    // Simplified cart operations
    const addToCart = (product, price) => {
        setCartItems(items => {
            const existingItem = items.find(item => item.id === product.id);
            return existingItem
                ? items.map(item => item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item)
                : [...items, { ...product, price, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const getTotal = () => cartItems.reduce((total, item) => 
        total + item.price * item.quantity, 0);

    const updateQuantity = (id, change, maxQuantity = null) => {
        setCartItems(items => items.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + change;
                if (maxQuantity === 1 && change > 0) {
                    return item;
                }
                return newQuantity < 1 ? item : { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const handleCheckout = async () => {
        try {
            await router.push('/checkout');
        } catch (error) {
            console.error('Error initiating checkout:', error);
        }
    };

    // Initialize cart from localStorage
    useEffect(() => {
        const storedItems = getStorageItem('cartItems');
        if (storedItems) {
            setCartItems(storedItems);
        }
        setIsHydrated(true);
    }, []);

    // Save cart changes to localStorage
    useEffect(() => {
        if (isHydrated) {
            setStorageItem('cartItems', cartItems);
        }
    }, [cartItems, isHydrated]);

    const value = {
        cartItems: isHydrated ? cartItems : [],
        setCartItems,
        addToCart,
        removeFromCart,
        getTotal,
        updateQuantity,
        handleCheckout,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
