import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

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
      <body className={mont.className}>{children}</body>
    </html>
  );
}
