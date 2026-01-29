'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Minus,
  Plus,
  X,
  Truck,
  Store,
  ArrowRight,
  ShoppingBag,
  MapPin,
  Clock,
  ChevronLeft,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { useCartStore } from '@/store/cart';

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

const timeSlots = [
  '10h00 - 12h00',
  '12h00 - 14h00',
  '14h00 - 16h00',
  '16h00 - 18h00',
  '18h00 - 20h00',
];

export default function PanierPage() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [selectedZone, setSelectedZone] = useState<string>('75');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const subtotal = getTotalPrice();
  const deliveryPrice = deliveryType === 'delivery'
    ? deliveryZones.find((z) => z.code === selectedZone)?.price || 10
    : 0;
  const total = subtotal + deliveryPrice;

  // Generate next 7 days for delivery
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('fr-FR', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
        }),
      });
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-creme flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-rose-poudre rounded-full flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 text-bordeaux" />
          </div>
          <h1 className="text-3xl font-bold text-brun mb-4">
            Votre panier est vide
          </h1>
          <p className="text-brun-clair mb-8 max-w-md">
            Découvrez nos créations gourmandes et ajoutez vos favoris à votre
            panier.
          </p>
          <Link href="/boutique">
            <Button size="lg">
              Découvrir la boutique
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-creme">
      {/* Header */}
      <div className="bg-white border-b border-rose-poudre">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/boutique"
            className="inline-flex items-center text-brun-clair hover:text-bordeaux transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Continuer mes achats
          </Link>
          <h1 className="text-3xl font-bold text-brun">Mon Panier</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={item.product._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex gap-6">
                    {/* Image */}
                    <div className="w-28 h-28 bg-gradient-to-br from-rose-poudre to-white rounded-xl flex items-center justify-center text-5xl flex-shrink-0">
                      🎂
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-lg text-brun">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-brun-clair mt-1">
                            {item.product.servings}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product._id)}
                          className="p-2 hover:bg-rose-poudre rounded-full transition-colors"
                        >
                          <X className="h-5 w-5 text-brun-clair" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        {/* Quantity */}
                        <div className="flex items-center gap-1 bg-rose-poudre/50 rounded-full">
                          <button
                            onClick={() =>
                              updateQuantity(item.product._id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-rose-poudre rounded-full transition-colors"
                          >
                            <Minus className="h-4 w-4 text-brun" />
                          </button>
                          <span className="w-10 text-center font-semibold text-brun">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product._id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-rose-poudre rounded-full transition-colors"
                          >
                            <Plus className="h-4 w-4 text-brun" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-xl font-bold gradient-text">
                          {(item.product.price * item.quantity).toFixed(2)} €
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Delivery options */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mt-8">
              <h2 className="text-xl font-bold text-brun mb-6">
                Mode de réception
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setDeliveryType('delivery')}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    deliveryType === 'delivery'
                      ? 'border-bordeaux bg-bordeaux/5'
                      : 'border-rose-poudre hover:border-bordeaux/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        deliveryType === 'delivery'
                          ? 'bg-bordeaux text-white'
                          : 'bg-rose-poudre text-brun'
                      }`}
                    >
                      <Truck className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-brun">Livraison</span>
                  </div>
                  <p className="text-sm text-brun-clair">
                    Livré chez vous en Île-de-France
                  </p>
                </button>

                <button
                  onClick={() => setDeliveryType('pickup')}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    deliveryType === 'pickup'
                      ? 'border-bordeaux bg-bordeaux/5'
                      : 'border-rose-poudre hover:border-bordeaux/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        deliveryType === 'pickup'
                          ? 'bg-bordeaux text-white'
                          : 'bg-rose-poudre text-brun'
                      }`}
                    >
                      <Store className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-brun">
                      Retrait en boutique
                    </span>
                  </div>
                  <p className="text-sm text-brun-clair">Gratuit • Paris</p>
                </button>
              </div>

              {/* Delivery zone selection */}
              {deliveryType === 'delivery' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-brun mb-2">
                      <MapPin className="h-4 w-4 inline mr-1" />
                      Zone de livraison
                    </label>
                    <select
                      value={selectedZone}
                      onChange={(e) => setSelectedZone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none"
                    >
                      {deliveryZones.map((zone) => (
                        <option key={zone.code} value={zone.code}>
                          {zone.code} - {zone.name} ({zone.price}€)
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Date selection */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-brun mb-3">
                  <Clock className="h-4 w-4 inline mr-1" />
                  Date souhaitée
                </label>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {availableDates.map((date) => (
                    <button
                      key={date.value}
                      onClick={() => setSelectedDate(date.value)}
                      className={`px-4 py-3 rounded-xl whitespace-nowrap transition-all ${
                        selectedDate === date.value
                          ? 'bg-bordeaux text-white'
                          : 'bg-rose-poudre/50 text-brun hover:bg-rose-poudre'
                      }`}
                    >
                      {date.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slot selection */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4"
                >
                  <label className="block text-sm font-medium text-brun mb-3">
                    Créneau horaire
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`px-4 py-2 rounded-xl text-sm transition-all ${
                          selectedTime === slot
                            ? 'bg-bordeaux text-white'
                            : 'bg-rose-poudre/50 text-brun hover:bg-rose-poudre'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold text-brun mb-6">Récapitulatif</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-brun">
                  <span>Sous-total</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-brun">
                  <span>
                    {deliveryType === 'delivery' ? 'Livraison' : 'Retrait'}
                  </span>
                  <span>
                    {deliveryPrice === 0 ? 'Gratuit' : `${deliveryPrice.toFixed(2)} €`}
                  </span>
                </div>
                <div className="h-px bg-rose-poudre" />
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-brun">Total</span>
                  <span className="gradient-text">{total.toFixed(2)} €</span>
                </div>
              </div>

              <Link
                href={
                  selectedDate && selectedTime
                    ? `/commande?type=${deliveryType}&date=${selectedDate}&time=${encodeURIComponent(selectedTime)}&zone=${selectedZone}`
                    : '#'
                }
              >
                <Button
                  className="w-full btn-shine"
                  size="lg"
                  disabled={!selectedDate || !selectedTime}
                >
                  Passer commande
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              {(!selectedDate || !selectedTime) && (
                <p className="text-xs text-brun-clair text-center mt-3">
                  Veuillez sélectionner une date et un créneau
                </p>
              )}

              <div className="mt-6 p-4 bg-rose-poudre/30 rounded-xl">
                <p className="text-sm text-brun-clair text-center">
                  🔒 Paiement sécurisé par Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
