import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GaleRya - Creative Portfolio Gallery',
  description: 'A modern platform for showcasing creative portfolios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={`${poppins.className} min-h-screen bg-gradient-to-b from-gray-900 to-black`}>
        {children}
      </body>
    </html>
  );
} 