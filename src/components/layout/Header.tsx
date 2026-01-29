'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import CartDrawer from './CartDrawer';

const navigation = [
  { name: 'Boutique', href: '/boutique' },
  { name: 'Sur Mesure', href: '/sur-mesure' },
  { name: 'Gaby ★', href: '/gaby-the-artist', special: true },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-blanc border-b-4 border-noir'
            : 'bg-blanc/95'
        }`}
      >
        {/* Comic Marquee banner */}
        <div className="bg-rouge text-blanc py-2 overflow-hidden border-b-4 border-noir">
          <div className="marquee">
            <div className="marquee-content font-sans">
              {[...Array(2)].map((_, i) => (
                <span key={i} className="flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
                  <span>🎂 Livraison Paris & IDF</span>
                  <Star className="h-4 w-4 text-jaune fill-jaune" />
                  <span>🍰 Pâtisserie Artisanale</span>
                  <Star className="h-4 w-4 text-jaune fill-jaune" />
                  <span>🎁 Commandes sur mesure</span>
                  <Star className="h-4 w-4 text-jaune fill-jaune" />
                  <span>✨ Éditions Collector Gaby</span>
                  <Star className="h-4 w-4 text-jaune fill-jaune" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - Comic style */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="w-14 h-14 bg-jaune border-4 border-noir shadow-[4px_4px_0_0_#000] flex items-center justify-center text-3xl"
              >
                🎂
              </motion.div>
              <div className="hidden sm:block">
                <span className="comic-title text-2xl text-rouge block leading-tight" style={{ WebkitTextStroke: '1px #000' }}>
                  Les Gâteaux
                </span>
                <span className="text-sm font-bold text-bleu block leading-tight font-body">
                  de Chouchou
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Comic style */}
            <nav className="hidden lg:flex items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 font-sans text-sm tracking-wide transition-all duration-150 border-4 ${
                    item.special
                      ? 'bg-rouge text-blanc border-noir shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                      : 'border-transparent text-noir hover:border-noir hover:bg-jaune hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                  }`}
                >
                  {item.special && <Sparkles className="inline h-4 w-4 mr-1" />}
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Cart button - Comic style */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleCart}
                className="relative p-3 bg-bleu text-blanc border-4 border-noir shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                <ShoppingBag className="h-6 w-6" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute -top-3 -right-3 w-7 h-7 bg-rouge text-blanc text-xs font-bold flex items-center justify-center border-3 border-noir shadow-[2px_2px_0_0_#000]"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 bg-jaune text-noir border-4 border-noir shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu - Comic panels */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-blanc border-t-4 border-noir"
            >
              <nav className="px-4 py-6 space-y-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20, rotate: -2 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 font-sans uppercase tracking-wide border-4 border-noir shadow-[6px_6px_0_0_#000] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_0_#000] ${
                        item.special
                          ? 'bg-rouge text-blanc'
                          : index % 3 === 0
                          ? 'bg-jaune text-noir'
                          : index % 3 === 1
                          ? 'bg-bleu text-blanc'
                          : 'bg-blanc text-noir'
                      }`}
                    >
                      {item.special && <Sparkles className="inline h-4 w-4 mr-2" />}
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-36" />

      <CartDrawer />
    </>
  );
}
