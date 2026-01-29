'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Palette, Gift, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';
import { mockProducts } from '@/lib/mock-data';

export default function GabyTheArtistPage() {
  const collectorProducts = mockProducts.filter((p) => p.isCollector);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-bordeaux to-bordeaux-hover text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-dore rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                Éditions Collector
              </span>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Gaby the Artist
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Découvrez nos éditions limitées, sublimées par les illustrations
                originales de notre talentueuse artiste Gaby. Chaque boîte est
                une œuvre d'art unique qui raconte une histoire gourmande.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Palette className="h-5 w-5" />
                  </div>
                  <span>Illustrations originales</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Gift className="h-5 w-5" />
                  </div>
                  <span>Éditions limitées</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-[120px] block mb-4">🎨</span>
                  <p className="text-white/80 text-lg">
                    Collection à venir...
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-creme">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-brun mb-8">L'histoire de Gaby</h2>
            <div className="prose prose-lg text-brun-clair mx-auto">
              <p className="mb-6">
                Gaby, c'est avant tout une passion débordante pour l'art et la
                créativité. Depuis son plus jeune âge, elle dessine, peint et
                imagine des mondes colorés peuplés de personnages attachants.
              </p>
              <p className="mb-6">
                Ses illustrations uniques mêlent douceur, poésie et une touche
                de magie. Quand elle a découvert l'univers des Gâteaux de
                Chouchou, une évidence s'est imposée : marier ses créations
                artistiques à nos gourmandises pour créer quelque chose de
                vraiment spécial.
              </p>
              <p>
                Chaque boîte collector est une invitation au voyage, où l'art
                rencontre la gourmandise pour offrir une expérience sensorielle
                complète.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-rose-poudre/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brun mb-4">
              Pourquoi choisir une édition Collector ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Édition Limitée',
                description:
                  "Chaque collection est produite en quantité limitée, faisant de votre boîte un véritable objet de collection.",
              },
              {
                icon: Palette,
                title: 'Art Original',
                description:
                  'Les illustrations sont créées spécialement par Gaby, exclusivement pour Les Gâteaux de Chouchou.',
              },
              {
                icon: Heart,
                title: 'Cadeau Parfait',
                description:
                  "Une attention unique qui ravira les amateurs d'art et de gourmandises.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-bordeaux/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-bordeaux" />
                </div>
                <h3 className="text-xl font-semibold text-brun mb-2">
                  {feature.title}
                </h3>
                <p className="text-brun-clair">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      {collectorProducts.length > 0 && (
        <section className="py-20 bg-creme">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-brun mb-4">
                Nos Éditions Collector
              </h2>
              <p className="text-brun-clair">
                Découvrez nos créations exclusives illustrées par Gaby.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectorProducts.map((product, index) => (
                <ProductCard key={product._id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brun mb-6">
              Ne manquez pas les prochaines éditions
            </h2>
            <p className="text-brun-clair mb-8 text-lg">
              Inscrivez-vous à notre newsletter pour être informé en avant-première
              des nouvelles collections Gaby the Artist.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-3 rounded-full border border-brun-clair/30 focus:outline-none focus:border-bordeaux"
              />
              <Button type="submit">
                S'inscrire
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
