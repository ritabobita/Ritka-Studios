import localFont from "next/font/local";
import "./styles/globals.scss";
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/Context/CartContext';
import { showEcommerce } from '../lib/flags';

const moderustic = localFont({
  src: [
    {
      path: '../../public/fonts/Moderustic/static/Moderustic-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
});

export const metadata = {
  title: "Ritka Studios",
  description: "Ceramics that are fun to look at and fun to use",
};

// ecommerce flag passed as child to accommodate its server-side rendering for client components
export default async function RootLayout({ children }) {
  const ecommerceEnabled = await showEcommerce();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${moderustic.className} flex flex-col min-h-screen`}>
        <CartProvider>
          <Header ecommerceEnabled={ecommerceEnabled} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}