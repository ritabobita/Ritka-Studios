import localFont from "next/font/local";
import "./globals.css";
import Header from './components/Header'; // Import the Header component

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={moderustic.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}