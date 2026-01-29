import { client } from './client';
import {
  categoriesQuery,
  productsQuery,
  featuredProductsQuery,
  productsByCategoryQuery,
  productBySlugQuery,
  collectorProductsQuery,
  relatedProductsQuery,
} from './queries';
import { mockProducts, mockCategories } from '@/lib/mock-data';
import { Product, Category } from '@/types';

// Vérifie si Sanity est configuré
const isSanityConfigured = () => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return projectId && projectId !== 'ton-project-id';
};

// Récupérer toutes les catégories
export async function getCategories(): Promise<Category[]> {
  if (!isSanityConfigured()) {
    return mockCategories;
  }

  try {
    const categories = await client.fetch(categoriesQuery);
    return categories;
  } catch (error) {
    console.error('Erreur Sanity (categories):', error);
    return mockCategories;
  }
}

// Récupérer tous les produits
export async function getProducts(): Promise<Product[]> {
  if (!isSanityConfigured()) {
    return mockProducts;
  }

  try {
    const products = await client.fetch(productsQuery);
    return products;
  } catch (error) {
    console.error('Erreur Sanity (products):', error);
    return mockProducts;
  }
}

// Récupérer les produits mis en avant
export async function getFeaturedProducts(): Promise<Product[]> {
  if (!isSanityConfigured()) {
    return mockProducts.slice(0, 4);
  }

  try {
    const products = await client.fetch(featuredProductsQuery);
    return products.length > 0 ? products : mockProducts.slice(0, 4);
  } catch (error) {
    console.error('Erreur Sanity (featured):', error);
    return mockProducts.slice(0, 4);
  }
}

// Récupérer les produits par catégorie
export async function getProductsByCategory(category: string): Promise<Product[]> {
  if (!isSanityConfigured()) {
    return mockProducts.filter((p) => p.category.slug === category);
  }

  try {
    const products = await client.fetch(productsByCategoryQuery, { category });
    return products;
  } catch (error) {
    console.error('Erreur Sanity (by category):', error);
    return mockProducts.filter((p) => p.category.slug === category);
  }
}

// Récupérer un produit par son slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!isSanityConfigured()) {
    return mockProducts.find((p) => p.slug === slug) || null;
  }

  try {
    const product = await client.fetch(productBySlugQuery, { slug });
    return product || mockProducts.find((p) => p.slug === slug) || null;
  } catch (error) {
    console.error('Erreur Sanity (by slug):', error);
    return mockProducts.find((p) => p.slug === slug) || null;
  }
}

// Récupérer les produits collector
export async function getCollectorProducts(): Promise<Product[]> {
  if (!isSanityConfigured()) {
    return mockProducts.filter((p) => p.isCollector);
  }

  try {
    const products = await client.fetch(collectorProductsQuery);
    return products.length > 0 ? products : mockProducts.filter((p) => p.isCollector);
  } catch (error) {
    console.error('Erreur Sanity (collector):', error);
    return mockProducts.filter((p) => p.isCollector);
  }
}

// Récupérer les produits liés
export async function getRelatedProducts(
  categoryId: string,
  productId: string
): Promise<Product[]> {
  if (!isSanityConfigured()) {
    return mockProducts
      .filter((p) => p.category._id === categoryId && p._id !== productId)
      .slice(0, 4);
  }

  try {
    const products = await client.fetch(relatedProductsQuery, {
      categoryId,
      productId,
    });
    return products;
  } catch (error) {
    console.error('Erreur Sanity (related):', error);
    return mockProducts
      .filter((p) => p.category._id === categoryId && p._id !== productId)
      .slice(0, 4);
  }
}
