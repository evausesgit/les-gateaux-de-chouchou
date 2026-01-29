import { getFeaturedProducts, getCategories } from '@/sanity/lib/fetch';
import HomeClient from '@/components/home/HomeClient';

export default async function Home() {
  const [featuredProducts, categories] = await Promise.all([
    getFeaturedProducts(),
    getCategories(),
  ]);

  return (
    <HomeClient featuredProducts={featuredProducts} categories={categories} />
  );
}
