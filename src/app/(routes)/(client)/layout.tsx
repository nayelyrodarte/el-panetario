import './globals.css';

import type { Metadata } from 'next';

import Footer from '@/_components/Footer/Footer';
import Header from '@/_components/Header/Header';

import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: 'El Panetario',
  description: 'Un universo de pan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
