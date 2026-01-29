import { Suspense } from 'react';
import { getProducts, getCategories } from '@/sanity/lib/fetch';
import BoutiqueClient from '@/components/boutique/BoutiqueClient';

interface BoutiquePageProps {
  searchParams: Promise<{ category?: string }>;
}

export const metadata = {
  title: 'Boutique',
  description:
    'Découvrez tous nos gâteaux artisanaux : créations signatures, gâteaux d\'anniversaire, tartes, entremets et éditions collector.',
};

export default async function BoutiquePage({ searchParams }: BoutiquePageProps) {
  const params = await searchParams;
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-creme flex items-center justify-center">
          <div className="animate-pulse text-bordeaux text-xl">
            Chargement...
          </div>
        </div>
      }
    >
      <BoutiqueClient
        products={products}
        categories={categories}
        initialCategory={params.category}
      />
    </Suspense>
  );
}
