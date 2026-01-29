'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Star, ArrowRight } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/cart';
import SanityImage from '@/components/ui/SanityImage';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  // Comic primary colors rotation
  const bgColors = ['bg-jaune', 'bg-blanc', 'bg-cyan', 'bg-rose'];
  const cardBg = bgColors[index % bgColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      }}
      className="group"
    >
      <Link href={`/produit/${product.slug}`}>
        <div
          className={`comic-card relative ${cardBg}`}
        >
          {/* Halftone overlay */}
          <div className="absolute inset-0 halftone opacity-20 pointer-events-none" />

          {/* Badges - Comic style */}
          <div className="absolute top-3 left-3 z-10 flex gap-2">
            {product.isNew && (
              <motion.span
                initial={{ scale: 0, rotate: -12 }}
                animate={{ scale: 1, rotate: -5 }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                className="badge-comic badge-red"
              >
                <Star className="h-3 w-3" />
                NEW!
              </motion.span>
            )}
            {product.isCollector && (
              <motion.span
                initial={{ scale: 0, rotate: 12 }}
                animate={{ scale: 1, rotate: 5 }}
                transition={{ delay: index * 0.1 + 0.4, type: 'spring' }}
                className="badge-comic badge-blue"
              >
                <Sparkles className="h-3 w-3" />
                COLLECTOR
              </motion.span>
            )}
          </div>

          {/* Image container - Comic panel */}
          <div className="aspect-square relative overflow-hidden border-b-4 border-noir">
            <SanityImage
              image={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Ben-Day dots overlay on hover */}
            <div className="absolute inset-0 benday-overlay opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Quick add button - POW style */}
            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.85 }}
              className="absolute bottom-3 right-3 p-3 bg-rouge text-blanc border-4 border-noir shadow-[4px_4px_0_0_#000] opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-bleu z-10"
            >
              <ShoppingBag className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Info - Comic typography */}
          <div className="p-4 relative">
            <h3 className="font-sans text-noir text-xl uppercase tracking-tight leading-tight">
              {product.name}
            </h3>

            {product.description && (
              <p className="text-sm text-noir/70 mt-2 line-clamp-2 leading-snug font-body">
                {product.description}
              </p>
            )}

            <div className="mt-4 flex items-center justify-between">
              {/* Price - Starburst style */}
              <div className="relative">
                <span className="text-3xl font-sans text-rouge" style={{ WebkitTextStroke: '1px #000' }}>
                  {product.price.toFixed(0)}€
                </span>
              </div>

              <div className="flex items-center gap-2">
                {product.servings && (
                  <span className="text-xs font-bold text-noir bg-jaune px-2 py-1 border-3 border-noir shadow-[2px_2px_0_0_#000]">
                    {product.servings}
                  </span>
                )}
                <span className="text-noir group-hover:translate-x-2 transition-transform">
                  <ArrowRight className="h-6 w-6" strokeWidth={3} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
