import './globals.css';

import type { Metadata } from 'next';
import React from 'react';

import { Footer } from '@/_components/Footer';
import { Navigation } from '@/_components/Navigation';

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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7189778934872846"
          crossOrigin="anonymous"
        ></script>
      </head>
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
