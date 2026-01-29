'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cart';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice } =
    useCartStore();

  const total = getTotalPrice();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with halftone effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-noir/60 z-50"
          />

          {/* Drawer - Comic panel style */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-blanc z-50 border-l-4 border-noir flex flex-col"
          >
            {/* Header - Comic style */}
            <div className="flex items-center justify-between p-6 bg-bleu border-b-4 border-noir">
              <h2 className="text-xl font-sans text-blanc uppercase flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Mon Panier
              </h2>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={closeCart}
                className="p-2 bg-jaune border-3 border-noir shadow-[3px_3px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
              >
                <X className="h-5 w-5 text-noir" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 bg-gris">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 bg-jaune border-4 border-noir shadow-[6px_6px_0_0_#000] flex items-center justify-center mb-6">
                    <ShoppingBag className="h-12 w-12 text-noir" />
                  </div>
                  <p className="text-noir/60 mb-6 font-body text-lg">
                    Votre panier est vide
                  </p>
                  <Link
                    href="/boutique"
                    onClick={closeCart}
                    className="comic-btn comic-btn-red"
                  >
                    Découvrir nos créations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item, index) => (
                    <motion.li
                      key={item.product._id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="comic-card bg-blanc p-4"
                    >
                      <div className="flex gap-4">
                        {/* Image placeholder - Comic style */}
                        <div className="w-20 h-20 bg-jaune border-3 border-noir shadow-[3px_3px_0_0_#000] flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🎂</span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-sans text-noir uppercase truncate">
                            {item.product.name}
                          </h3>
                          <p className="text-lg font-bold text-rouge font-sans">
                            {item.product.price.toFixed(0)} €
                          </p>

                          {/* Quantity controls - Comic buttons */}
                          <div className="flex items-center gap-2 mt-2">
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() =>
                                updateQuantity(
                                  item.product._id,
                                  item.quantity - 1
                                )
                              }
                              className="w-8 h-8 bg-bleu text-blanc border-2 border-noir shadow-[2px_2px_0_0_#000] hover:bg-bleu-dark transition-colors flex items-center justify-center"
                            >
                              <Minus className="h-4 w-4" />
                            </motion.button>
                            <span className="w-10 text-center font-bold font-sans text-lg">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() =>
                                updateQuantity(
                                  item.product._id,
                                  item.quantity + 1
                                )
                              }
                              className="w-8 h-8 bg-bleu text-blanc border-2 border-noir shadow-[2px_2px_0_0_#000] hover:bg-bleu-dark transition-colors flex items-center justify-center"
                            >
                              <Plus className="h-4 w-4" />
                            </motion.button>
                          </div>
                        </div>

                        {/* Remove button */}
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeItem(item.product._id)}
                          className="w-8 h-8 bg-rouge text-blanc border-2 border-noir shadow-[2px_2px_0_0_#000] hover:bg-rouge-dark transition-colors self-start flex items-center justify-center"
                        >
                          <X className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer - Comic style */}
            {items.length > 0 && (
              <div className="p-6 bg-noir border-t-4 border-jaune space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blanc font-sans uppercase">Total</span>
                  <span className="text-3xl font-sans text-jaune">{total.toFixed(0)} €</span>
                </div>
                <p className="text-xs text-blanc/60 font-body">
                  Livraison calculée à l'étape suivante
                </p>
                <Link
                  href="/panier"
                  onClick={closeCart}
                  className="comic-btn comic-btn-yellow w-full justify-center"
                >
                  Commander
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
