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
  description: "Discover handmade pottery by Ritka Studios. A collection featuring unique ceramics that blends playful design with everyday functionality.",
  openGraph: {
    title: "Ritka Studios - Handmade Ceramics",
    description: "Discover handmade pottery by Ritka Studios. A collection featuring unique ceramics that blends playful design with everyday functionality.",
    url: 'https://ritkastudios.com',
    siteName: 'Ritka Studios',
    images: [
      {
        url: '/images/ograph-ritka.jpg',
        width: 1200,
        height: 630,
        alt: 'Ritka Studios - Handmade Ceramics',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ritka Studios - Handmade Ceramics",
    description: "Discover handmade pottery by Ritka Studios. A collection featuring unique ceramics that blends playful design with everyday functionality.",
    images: ['/images/ograph-ritka.jpg'],
  },
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
          <Footer ecommerceEnabled={ecommerceEnabled} />
        </CartProvider>
      </body>
    </html>
  );
}