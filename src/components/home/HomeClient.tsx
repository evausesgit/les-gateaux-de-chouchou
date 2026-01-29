'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Award, Heart, Sparkles, Star, Zap } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import { Product, Category } from '@/types';

interface HomeClientProps {
  featuredProducts: Product[];
  categories: Category[];
}

const categoryEmojis: Record<string, string> = {
  signatures: '⭐',
  anniversaires: '🎂',
  'tartes-entremets': '🥧',
  mignardises: '🧁',
  collector: '🎨',
};

export default function HomeClient({
  featuredProducts,
  categories,
}: HomeClientProps) {
  return (
    <>
      {/* Hero Section - Comic/Manga Style */}
      <section className="relative min-h-[90vh] flex items-center bg-blanc overflow-hidden">
        {/* Halftone dot pattern background */}
        <div className="absolute inset-0 halftone opacity-30" />

        {/* Action lines */}
        <div className="absolute inset-0 action-lines" />

        {/* Decorative comic elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-32 h-32 border-4 border-rouge rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-40 left-20 w-24 h-24 border-4 border-bleu rounded-full hidden lg:block"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Comic badge */}
              <motion.div
                initial={{ opacity: 0, rotate: -8, scale: 0 }}
                animate={{ opacity: 1, rotate: -5, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-block mb-6"
              >
                <span className="badge-comic badge-yellow">
                  <Zap className="h-3 w-3" />
                  Nouveau 2026
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl leading-[0.9] mb-8">
                <span className="comic-title comic-title-red">DES</span>
                <br />
                <span className="comic-title comic-title-blue">GÂTEAUX</span>
                <br />
                <span className="relative inline-block">
                  <span className="comic-title comic-title-yellow">FAITS</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="absolute -bottom-1 left-0 w-full h-4 bg-rouge -skew-x-6 origin-left -z-10"
                  />
                </span>
                <br />
                <span className="comic-title comic-title-red">AVEC</span>
                <span className="comic-title comic-title-white ml-4">AMOUR</span>
              </h1>

              <p className="text-xl text-noir/70 mb-10 max-w-lg leading-relaxed font-body">
                Créations artisanales, ingrédients d'exception, livraison Paris & IDF.
                Chaque gâteau raconte une histoire.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/boutique">
                  <Button variant="red" size="lg">
                    Explorer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/sur-mesure">
                  <Button variant="outline" size="lg">
                    Sur Mesure
                  </Button>
                </Link>
              </div>

              {/* Stats - Comic panels */}
              <div className="mt-12 flex items-center gap-6">
                <motion.div
                  whileHover={{ rotate: -3 }}
                  className="comic-card-yellow p-4 text-center"
                >
                  <p className="text-3xl font-sans text-noir">500+</p>
                  <p className="text-xs font-bold uppercase font-body">Clients</p>
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 3 }}
                  className="comic-card-red p-4 text-center"
                >
                  <p className="text-3xl font-sans">50+</p>
                  <p className="text-xs font-bold uppercase font-body">Créations</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="comic-card-blue p-4 flex items-center gap-1"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-jaune text-jaune" />
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Hero image - Comic panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main cake display - Comic panel */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="panel aspect-square bg-jaune flex items-center justify-center text-[160px] lg:text-[200px] relative"
                  style={{ boxShadow: '12px 12px 0 0 #000' }}
                >
                  <span className="relative z-10">🎂</span>

                  {/* Halftone overlay */}
                  <div className="absolute inset-0 halftone-red opacity-30" />

                  {/* POW badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: -12 }}
                    transition={{ delay: 0.8, type: 'spring' }}
                    className="absolute top-4 right-4 starburst"
                  >
                    <span className="pow text-2xl">YUM!</span>
                  </motion.div>
                </motion.div>

                {/* Floating elements - Comic style */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [3, -3, 3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-rouge border-4 border-noir shadow-[6px_6px_0_0_#000] flex items-center justify-center text-5xl"
                >
                  🧁
                </motion.div>

                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-bleu border-4 border-noir shadow-[6px_6px_0_0_#000] flex items-center justify-center text-4xl"
                >
                  🍰
                </motion.div>

                {/* Speech bubble */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-8 -right-8 speech-bubble"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rouge border-3 border-noir flex items-center justify-center">
                      <Heart className="h-5 w-5 text-blanc" />
                    </div>
                    <div>
                      <p className="font-sans text-noir uppercase text-sm">Fait Maison</p>
                      <p className="text-xs text-noir/60 font-body">Paris, France</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll marquee - Comic style */}
        <div className="absolute bottom-0 left-0 right-0 bg-rouge py-4 border-t-4 border-noir">
          <div className="marquee">
            <div className="marquee-content text-blanc font-sans uppercase tracking-wider">
              <span>Pâtisserie Artisanale ★</span>
              <span>Livraison Paris IDF ★</span>
              <span>Gâteaux Sur Mesure ★</span>
              <span>Éditions Collector ★</span>
              <span>Pâtisserie Artisanale ★</span>
              <span>Livraison Paris IDF ★</span>
              <span>Gâteaux Sur Mesure ★</span>
              <span>Éditions Collector ★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Comic cards */}
      <section className="py-20 bg-blanc relative">
        <div className="absolute inset-0 speed-lines" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: 'Livraison Express',
                description: 'Paris & Île-de-France, frais garanti',
                bg: 'bg-jaune',
                color: 'text-noir',
              },
              {
                icon: Award,
                title: '100% Artisanal',
                description: 'Fait maison chaque jour avec passion',
                bg: 'bg-rouge',
                color: 'text-blanc',
              },
              {
                icon: Heart,
                title: 'Fait avec Amour',
                description: 'Des recettes de famille revisitées',
                bg: 'bg-bleu',
                color: 'text-blanc',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ rotate: index % 2 === 0 ? -3 : 3 }}
                className={`comic-card ${feature.bg} p-8`}
              >
                <div className="w-16 h-16 bg-noir border-4 border-noir flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#FFDD00]">
                  <feature.icon className="h-8 w-8 text-jaune" />
                </div>
                <h3 className={`text-xl font-sans ${feature.color} uppercase mb-2`}>{feature.title}</h3>
                <p className={`${feature.color === 'text-blanc' ? 'text-blanc/80' : 'text-noir/70'} font-body`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Comic section */}
      <section className="py-20 bg-gris relative">
        {/* Ben-Day dots pattern */}
        <div className="absolute inset-0 benday-overlay" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge-comic badge-red mb-6 inline-block">Best-Sellers</span>
            <h2 className="text-4xl lg:text-6xl mb-4">
              <span className="comic-title comic-title-blue">NOS</span>
              <br />
              <span className="comic-title comic-title-red">CRÉATIONS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product._id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-14"
          >
            <Link href="/boutique">
              <Button variant="blue" size="lg">
                Voir Tout
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories - Comic grid */}
      <section className="py-20 bg-blanc">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl">
              <span className="comic-title comic-title-yellow">EXPLOREZ</span>
              <span className="comic-title comic-title-blue ml-4">NOS UNIVERS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => {
              const colors = ['bg-jaune', 'bg-rouge', 'bg-bleu', 'bg-cyan', 'bg-rose'];
              const bgColor = colors[index % colors.length];
              const isLight = ['bg-jaune', 'bg-cyan'].includes(bgColor);

              return (
                <motion.div
                  key={category._id}
                  initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -3 : 3 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={`/boutique?category=${category.slug}`}
                    className={`comic-card block aspect-square ${bgColor} p-4 text-center group`}
                  >
                    <div className="h-full flex flex-col items-center justify-center">
                      <motion.span
                        className="text-5xl mb-3"
                        whileHover={{ scale: 1.3, rotate: 12 }}
                        transition={{ type: 'spring' }}
                      >
                        {categoryEmojis[category.slug] || '🍰'}
                      </motion.span>
                      <h3 className={`font-sans uppercase text-sm tracking-wide ${isLight ? 'text-noir' : 'text-blanc'}`}>
                        {category.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gaby the Artist - Manga section */}
      <section className="py-20 bg-noir relative overflow-hidden">
        {/* Action lines background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 action-lines opacity-20" />
        </div>

        {/* Halftone accent */}
        <div className="absolute top-0 left-0 w-full h-8 halftone-yellow" />
        <div className="absolute bottom-0 left-0 w-full h-8 halftone-red" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ opacity: 0, rotate: 5, scale: 0 }}
                whileInView={{ opacity: 1, rotate: -3, scale: 1 }}
                className="badge-comic badge-yellow mb-8 inline-block"
              >
                <Sparkles className="h-3 w-3" />
                Éditions Limitées
              </motion.span>

              <h2 className="text-5xl lg:text-7xl mb-8 leading-[0.9]">
                <span className="comic-title comic-title-white">GABY</span>
                <br />
                <span className="comic-title comic-title-yellow">THE</span>
                <br />
                <span className="comic-title comic-title-red">ARTIST</span>
              </h2>

              <p className="text-xl text-blanc/70 mb-10 leading-relaxed max-w-lg font-body">
                Découvrez bientôt nos éditions collector dans des boîtes
                exclusives illustrées par notre artiste Gaby. L'art rencontre la gourmandise.
              </p>

              <Link href="/gaby-the-artist">
                <Button variant="yellow" size="lg">
                  Découvrir
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="panel-rounded aspect-square bg-rose flex items-center justify-center"
                style={{ boxShadow: '12px 12px 0 0 #FFDD00' }}
              >
                <span className="text-[140px]">🎨</span>
                <div className="absolute inset-0 halftone-blue opacity-30 rounded-[16px]" />
              </motion.div>

              {/* Floating art supplies */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [5, -5, 5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-jaune border-4 border-noir shadow-[6px_6px_0_0_#000] flex items-center justify-center text-4xl"
              >
                🖌️
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-bleu border-4 border-noir shadow-[6px_6px_0_0_#000] flex items-center justify-center text-3xl"
              >
                ✨
              </motion.div>

              {/* BOOM effect */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute top-4 left-4"
              >
                <span className="boom text-xl">WOW!</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final - Comic style */}
      <section className="py-20 bg-bleu relative">
        <div className="absolute inset-0 halftone-yellow opacity-40" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Thought bubble */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="thought-bubble inline-block mb-8 bg-jaune"
            >
              <motion.span
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl block"
              >
                💝
              </motion.span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl mb-6">
              <span className="comic-title comic-title-white">UN GÂTEAU</span>
              <br />
              <span className="comic-title comic-title-yellow">SUR MESURE ?</span>
            </h2>

            <p className="text-blanc/80 mb-10 text-xl max-w-2xl mx-auto font-body">
              Anniversaire, mariage, événement... Créons ensemble le gâteau de vos rêves.
            </p>

            <Link href="/sur-mesure">
              <Button variant="red" size="lg">
                Demander un Devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
