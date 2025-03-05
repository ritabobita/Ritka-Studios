import styles from './Cart.module.scss';

export default function Cart() {
  return (
    <div className={`${styles.cart} p-4`}>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <ul className="list-disc pl-5">
        {/* Cart items will be rendered here */}
        <li className="mb-2">Item 1 - $10.00</li>
        <li className="mb-2">Item 2 - $15.00</li>
        {/* ... existing code ... */}
      </ul>
      <div className={`${styles.total} mt-4 p-2 bg-white shadow-md`}>
        <h2 className="text-xl">Total: $25.00</h2>
      </div>
      <button className={`${styles.checkoutButton} mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600`}>
        Proceed to Checkout
      </button>
    </div>
  );
}