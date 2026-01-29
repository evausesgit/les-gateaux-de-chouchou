import type { Metadata } from 'next';
import { Bangers, Comic_Neue } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';

const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  display: 'swap',
  weight: '400',
});

const comicNeue = Comic_Neue({
  subsets: ['latin'],
  variable: '--font-comic-neue',
  display: 'swap',
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Les Gâteaux de Chouchou | Pâtisserie Artisanale Paris',
    template: '%s | Les Gâteaux de Chouchou',
  },
  description:
    'Découvrez nos créations gourmandes faites avec amour. Gâteaux artisanaux, pâtisseries sur mesure et éditions collector par Gaby the Artist. Livraison Paris Île-de-France.',
  keywords: [
    'pâtisserie',
    'gâteaux',
    'Paris',
    'artisanal',
    'livraison',
    'anniversaire',
    'sur mesure',
  ],
  authors: [{ name: 'Les Gâteaux de Chouchou' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.gateauxdechouchou.fr',
    siteName: 'Les Gâteaux de Chouchou',
    title: 'Les Gâteaux de Chouchou | Pâtisserie Artisanale Paris',
    description:
      'Découvrez nos créations gourmandes faites avec amour. Gâteaux artisanaux et éditions collector.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${bangers.variable} ${comicNeue.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
