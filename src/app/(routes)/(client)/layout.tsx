import './globals.css';

import type { Metadata } from 'next';
import React from 'react';

import Footer from '../../../_components/Footer/Footer';
import Navigation from '../../../_components/Header/Navigation';
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
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <StyledComponentsRegistry>
          <Navigation />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
