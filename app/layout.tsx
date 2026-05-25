//layout.tsx is the root layout of the application and is used to define the global styles and metadata for the application.
//metadata is used by nextjs to set the title and description of the page for SEO purposes
//fonts are imported from google fonts using next/font/google and assigned to css variables for use in the global styles
//fonts:
//headings: Playfair Display - a classic serif font with elegant and sophisticated style, perfect for headings and titles
//body: Montserrat - a clean and versatile sans-serif font, easy to read and suitable for body text
//jsx is used to define the layout of the page, with a main element that contains a section with a heading, subheading, and a list of bullet points describing Felicia's experience and skills, as well as two buttons for viewing her portfolio and asking her questions. 

import type {Metadata} from 'next'
import {Playfair_Display, Montserrat} from "next/font/google";
import "./globals.css"
import { JSX } from 'react';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: "--font-playfair",
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: 'Felicia Ainslie',
  description: 'Senior Product Leader focused on AI, cybersecurity, operational modernization, reusable and scalable enterprise systems.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}