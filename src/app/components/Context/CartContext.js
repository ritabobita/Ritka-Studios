'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// Simplified storage helpers
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

    // Initialize cart from localStorage
    useEffect(() => {
        setCartItems(getStorageItem('cartItems'));
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
        getTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
