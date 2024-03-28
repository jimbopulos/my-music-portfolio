import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar, Footer } from '@/components';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'James Galantino Portfolio',
  description: 'Welcome to my personal portfolio website!',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <main className="flex flex-col h-full min-h-screen items-center">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
