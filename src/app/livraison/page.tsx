'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, Truck, Store, Clock, MapPin, Check } from 'lucide-react';
import Button from '@/components/ui/Button';

const deliveryZones = [
  { code: '75', name: 'Paris', price: 10 },
  { code: '92', name: 'Hauts-de-Seine', price: 12 },
  { code: '93', name: 'Seine-Saint-Denis', price: 12 },
  { code: '94', name: 'Val-de-Marne', price: 12 },
  { code: '91', name: 'Essonne', price: 15 },
  { code: '77', name: 'Seine-et-Marne', price: 15 },
  { code: '78', name: 'Yvelines', price: 15 },
  { code: '95', name: "Val-d'Oise", price: 15 },
];

export default function LivraisonPage() {
  return (
    <div className="min-h-screen bg-creme">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-poudre to-creme py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-brun-clair hover:text-bordeaux transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Retour
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-brun">Livraison & </span>
              <span className="gradient-text">Retrait</span>
            </h1>
            <p className="text-brun-clair text-lg max-w-2xl mx-auto">
              Découvrez nos options pour recevoir vos créations gourmandes
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-bordeaux to-dore rounded-2xl flex items-center justify-center mb-6">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-brun mb-4">
              Livraison à domicile
            </h2>
            <p className="text-brun-clair mb-6">
              Nous livrons vos gâteaux directement chez vous, dans toute
              l'Île-de-France. Nos livreurs sont formés pour transporter vos
              créations avec le plus grand soin.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-brun">
                <Check className="h-5 w-5 text-green-500" />
                Livraison J+1 garantie
              </li>
              <li className="flex items-center gap-3 text-brun">
                <Check className="h-5 w-5 text-green-500" />
                Créneaux de 2h au choix
              </li>
              <li className="flex items-center gap-3 text-brun">
                <Check className="h-5 w-5 text-green-500" />
                SMS de suivi en temps réel
              </li>
              <li className="flex items-center gap-3 text-brun">
                <Check className="h-5 w-5 text-green-500" />
                Emballage isotherme premium
              </li>
            </ul>
          </motion.div>

          {/* Pickup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-bordeaux to-dore rounded-2xl flex items-center justify-center mb-6">
              <Store className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-brun mb-4">
              Retrait en boutique
            </h2>
            <p className="text-brun-clair mb-6">
              Venez chercher votre commande directement dans notre atelier
              parisien. Une occasion de découvrir les coulisses de notre
              pâtisserie !
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-brun">
                <Check className="h-5 w-5 text-green-500" />
                Gratuit
              </li>
              <li className="flex items-center gap-3 text-brun">
                <Check className="h-5 w-5 text-green-500" />
                Disponible sous 24h
              </li>
              <li className="flex items-center gap-3 text-brun">
                <Check className="h-5 w-5 text-green-500" />
                Créneaux flexibles
              </li>
              <li className="flex items-center gap-3 text-brun">
                <Check className="h-5 w-5 text-green-500" />
                Conseils personnalisés
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Delivery zones */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-brun text-center mb-8">
            Zones de livraison
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {deliveryZones.map((zone) => (
                <div
                  key={zone.code}
                  className="p-4 bg-rose-poudre/30 rounded-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-bordeaux" />
                    <div>
                      <p className="font-semibold text-brun">{zone.name}</p>
                      <p className="text-sm text-brun-clair">{zone.code}</p>
                    </div>
                  </div>
                  <span className="font-bold text-bordeaux">{zone.price}€</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Time slots */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-brun text-center mb-8">
            Créneaux horaires
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Clock className="h-6 w-6 text-bordeaux" />
              <p className="text-brun-clair">
                Choisissez le créneau qui vous convient lors de votre commande
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                '10h00 - 12h00',
                '12h00 - 14h00',
                '14h00 - 16h00',
                '16h00 - 18h00',
                '18h00 - 20h00',
              ].map((slot) => (
                <div
                  key={slot}
                  className="p-3 bg-rose-poudre/30 rounded-xl text-center"
                >
                  <p className="font-medium text-brun">{slot}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link href="/boutique">
            <Button size="lg" className="btn-shine">
              Découvrir nos créations
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
