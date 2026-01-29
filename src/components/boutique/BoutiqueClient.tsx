'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import { Product, Category } from '@/types';

interface BoutiqueClientProps {
  products: Product[];
  categories: Category[];
  initialCategory?: string | null;
}

export default function BoutiqueClient({
  products,
  categories,
  initialCategory,
}: BoutiqueClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory || null
  );
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter(
      (product) => product.category?.slug === selectedCategory
    );
  }, [selectedCategory, products]);

  return (
    <div className="min-h-screen bg-creme">
      {/* Header avec glassmorphism */}
      <div className="relative bg-gradient-to-br from-bordeaux via-bordeaux-hover to-bordeaux py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-dore/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-poudre/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4"
            >
              Collection 2025
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Notre Boutique
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Découvrez toutes nos créations gourmandes, faites avec amour et
              passion.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter bar moderne */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm"
        >
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-bordeaux" />
            <span className="font-medium text-brun">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
            </span>
          </div>

          {/* Category pills */}
          <div className="hidden lg:flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedCategory
                  ? 'bg-bordeaux text-white shadow-lg shadow-bordeaux/25'
                  : 'bg-rose-poudre/50 text-brun hover:bg-rose-poudre'
              }`}
            >
              Tous
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.slug
                    ? 'bg-bordeaux text-white shadow-lg shadow-bordeaux/25'
                    : 'bg-rose-poudre/50 text-brun hover:bg-rose-poudre'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Mobile filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-bordeaux text-white rounded-full"
          >
            <Filter className="h-4 w-4" />
            Filtres
          </button>
        </motion.div>

        {/* Mobile filters dropdown */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mb-6 overflow-hidden"
            >
              <div className="p-4 bg-white rounded-2xl shadow-sm space-y-2">
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setShowFilters(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                    !selectedCategory
                      ? 'bg-bordeaux text-white'
                      : 'hover:bg-rose-poudre text-brun'
                  }`}
                >
                  Tous les produits
                </button>
                {categories.map((category) => (
                  <button
                    key={category._id}
                    onClick={() => {
                      setSelectedCategory(category.slug);
                      setShowFilters(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                      selectedCategory === category.slug
                        ? 'bg-bordeaux text-white'
                        : 'hover:bg-rose-poudre text-brun'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active filter badge */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-bordeaux/10 text-bordeaux rounded-full text-sm font-medium">
              {categories.find((c) => c.slug === selectedCategory)?.name}
              <button
                onClick={() => setSelectedCategory(null)}
                className="hover:bg-bordeaux/20 rounded-full p-0.5 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          </motion.div>
        )}

        {/* Products grid avec animation */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={selectedCategory || 'all'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🍰</div>
              <p className="text-brun-clair mb-4">
                Aucun produit trouvé dans cette catégorie.
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory(null)}
              >
                Voir tous les produits
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
