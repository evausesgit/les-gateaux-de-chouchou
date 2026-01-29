'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Truck,
  Clock,
  Sparkles,
  Star,
  Share2,
  Check,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';
import SanityImage from '@/components/ui/SanityImage';
import { useCartStore } from '@/store/cart';
import { mockProducts } from '@/lib/mock-data';
import { Product } from '@/types';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCartStore();

  useEffect(() => {
    // Pour l'instant on utilise les mock data, plus tard ça viendra de Sanity
    const found = mockProducts.find((p) => p.slug === slug);
    setProduct(found || null);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-creme flex items-center justify-center">
        <div className="animate-pulse text-bordeaux text-xl">Chargement...</div>
      </div>
    );
  }

  const relatedProducts = mockProducts
    .filter((p) => p.category._id === product.category._id && p._id !== product._id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-creme">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-rose-poudre">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-brun-clair hover:text-bordeaux">
              Accueil
            </Link>
            <span className="text-brun-clair">/</span>
            <Link href="/boutique" className="text-brun-clair hover:text-bordeaux">
              Boutique
            </Link>
            <span className="text-brun-clair">/</span>
            <Link
              href={`/boutique?category=${product.category.slug}`}
              className="text-brun-clair hover:text-bordeaux"
            >
              {product.category.name}
            </Link>
            <span className="text-brun-clair">/</span>
            <span className="text-brun font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Product */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="aspect-square bg-white rounded-[2rem] shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-poudre/30 to-transparent z-10 pointer-events-none" />
                <SanityImage
                  image={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Badges */}
                <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                  {product.isNew && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="badge-fashion flex items-center gap-1"
                    >
                      <Star className="h-3 w-3" />
                      Nouveau
                    </motion.span>
                  )}
                  {product.isCollector && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-dore to-dore-light text-white text-sm font-semibold rounded-full flex items-center gap-1 shadow-lg"
                    >
                      <Sparkles className="h-4 w-4" />
                      Collector
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 glass p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-dore text-dore"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-brun">4.9</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            {/* Category */}
            <Link
              href={`/boutique?category=${product.category.slug}`}
              className="inline-flex items-center gap-2 text-sm text-bordeaux hover:text-bordeaux-hover transition-colors mb-4"
            >
              <span className="w-6 h-6 bg-bordeaux/10 rounded-full flex items-center justify-center">
                ←
              </span>
              {product.category.name}
            </Link>

            <h1 className="text-4xl lg:text-5xl font-bold text-brun mb-4">
              {product.name}
            </h1>

            <p className="text-lg text-brun-clair mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Details chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {product.servings && (
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <span className="text-lg">👥</span>
                  <span className="text-sm font-medium text-brun">
                    {product.servings}
                  </span>
                </div>
              )}
              {product.weight && (
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <span className="text-lg">⚖️</span>
                  <span className="text-sm font-medium text-brun">
                    {product.weight}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <span className="text-lg">🇫🇷</span>
                <span className="text-sm font-medium text-brun">
                  Fait en France
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <span className="text-4xl font-bold gradient-text">
                {product.price.toFixed(2)} €
              </span>
            </div>

            {/* Quantity & Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Quantity selector */}
              <div className="flex items-center bg-white rounded-full shadow-sm">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-rose-poudre rounded-l-full transition-colors"
                >
                  <Minus className="h-5 w-5 text-brun" />
                </motion.button>
                <span className="w-14 text-center font-bold text-lg text-brun">
                  {quantity}
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-rose-poudre rounded-r-full transition-colors"
                >
                  <Plus className="h-5 w-5 text-brun" />
                </motion.button>
              </div>

              {/* Add to cart */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className={`w-full btn-shine ${addedToCart ? 'bg-green-500 hover:bg-green-600' : ''}`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="h-5 w-5 mr-2" />
                      Ajouté !
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Ajouter au panier
                    </>
                  )}
                </Button>
              </motion.div>

              {/* Like button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`p-4 rounded-full shadow-sm transition-colors ${
                  isLiked
                    ? 'bg-red-50 text-red-500'
                    : 'bg-white text-brun hover:bg-rose-poudre'
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              </motion.button>

              {/* Share */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-white rounded-full shadow-sm hover:bg-rose-poudre transition-colors"
              >
                <Share2 className="h-5 w-5 text-brun" />
              </motion.button>
            </div>

            {/* Delivery info */}
            <div className="bg-gradient-to-br from-rose-poudre/50 to-white rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bordeaux/10 rounded-xl flex items-center justify-center">
                  <Truck className="h-6 w-6 text-bordeaux" />
                </div>
                <div>
                  <p className="font-semibold text-brun">Livraison Paris & IDF</p>
                  <p className="text-sm text-brun-clair">
                    À partir de 10€ • Livraison J+1
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bordeaux/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-bordeaux" />
                </div>
                <div>
                  <p className="font-semibold text-brun">Retrait en boutique</p>
                  <p className="text-sm text-brun-clair">
                    Gratuit • Disponible sous 24h
                  </p>
                </div>
              </div>
            </div>

            {/* Allergens */}
            {product.allergens && product.allergens.length > 0 && (
              <div className="mt-6 p-4 bg-white rounded-xl border border-rose-poudre">
                <p className="text-sm text-brun">
                  <span className="font-semibold">⚠️ Allergènes :</span>{' '}
                  {product.allergens.join(', ')}
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold">
                <span className="text-brun">Vous aimerez </span>
                <span className="gradient-text">aussi</span>
              </h2>
              <Link href="/boutique">
                <Button variant="outline" size="sm">
                  Voir tout
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product._id} product={product} index={index} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
