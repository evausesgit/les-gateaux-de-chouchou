'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  CreditCard,
  Lock,
  User,
  Mail,
  Phone,
  MapPin,
  Truck,
  Store,
  Clock,
  Check,
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

function CommandeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { items, getTotalPrice } = useCartStore();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    notes: '',
  });

  // Get delivery info from URL params
  const deliveryType = searchParams.get('type') as 'delivery' | 'pickup' || 'delivery';
  const deliveryDate = searchParams.get('date') || '';
  const deliveryTime = searchParams.get('time') || '';
  const deliveryZone = searchParams.get('zone') || '75';

  const subtotal = getTotalPrice();
  const deliveryPrice =
    deliveryType === 'delivery'
      ? deliveryZones.find((z) => z.code === deliveryZone)?.price || 10
      : 0;
  const total = subtotal + deliveryPrice;

  useEffect(() => {
    if (items.length === 0) {
      router.push('/panier');
    }
  }, [items, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          deliveryInfo: {
            type: deliveryType,
            date: deliveryDate,
            time: deliveryTime,
            zone: deliveryType === 'delivery'
              ? deliveryZones.find((z) => z.code === deliveryZone)?.name
              : 'Retrait en boutique',
          },
          deliveryPrice,
          customer: formData,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gris">
      {/* Header - Comic style */}
      <div className="bg-bleu border-b-4 border-noir">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/panier"
            className="inline-flex items-center text-blanc/80 hover:text-jaune transition-colors mb-4 font-body"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Retour au panier
          </Link>
          <h1 className="comic-title comic-title-white text-3xl">Finaliser ma commande</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Delivery summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="comic-card bg-blanc p-6"
              >
                <h2 className="text-xl font-sans text-noir mb-4 flex items-center gap-2 uppercase">
                  {deliveryType === 'delivery' ? (
                    <Truck className="h-5 w-5 text-rouge" />
                  ) : (
                    <Store className="h-5 w-5 text-rouge" />
                  )}
                  {deliveryType === 'delivery' ? 'Livraison' : 'Retrait en boutique'}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-noir/70 font-body">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {deliveryDate ? new Date(deliveryDate).toLocaleDateString('fr-FR', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                    }) : 'Date non définie'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {deliveryTime || 'Heure non définie'}
                  </span>
                  {deliveryType === 'delivery' && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {deliveryZones.find((z) => z.code === deliveryZone)?.name}
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="comic-card bg-blanc p-6"
              >
                <h2 className="text-xl font-sans text-noir mb-6 flex items-center gap-2 uppercase">
                  <User className="h-5 w-5 text-bleu" />
                  Vos coordonnées
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-noir mb-2 font-body">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="comic-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-noir mb-2 font-body">
                      Nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="comic-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-noir mb-2 font-body">
                      <Mail className="h-4 w-4 inline mr-1" />
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="comic-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-noir mb-2 font-body">
                      <Phone className="h-4 w-4 inline mr-1" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="comic-input"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Delivery address */}
              {deliveryType === 'delivery' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="comic-card bg-blanc p-6"
                >
                  <h2 className="text-xl font-sans text-noir mb-6 flex items-center gap-2 uppercase">
                    <MapPin className="h-5 w-5 text-vert" />
                    Adresse de livraison
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-noir mb-2 font-body">
                        Adresse *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        placeholder="Numéro et nom de rue"
                        className="comic-input"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-noir mb-2 font-body">
                          Code postal *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.postalCode}
                          onChange={(e) =>
                            setFormData({ ...formData, postalCode: e.target.value })
                          }
                          className="comic-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-noir mb-2 font-body">
                          Ville *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          className="comic-input"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="comic-card bg-blanc p-6"
              >
                <h2 className="text-xl font-sans text-noir mb-4 uppercase">
                  Instructions particulières
                </h2>
                <textarea
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  rows={3}
                  placeholder="Digicode, étage, instructions de livraison..."
                  className="comic-input resize-none"
                />
              </motion.div>

              {/* Submit button - mobile */}
              <div className="lg:hidden">
                <Button
                  type="submit"
                  variant="red"
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Chargement...
                    </span>
                  ) : (
                    <>
                      <CreditCard className="h-5 w-5 mr-2" />
                      Payer {total.toFixed(0)} €
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="comic-card bg-blanc p-6 sticky top-40">
              <h2 className="text-xl font-sans text-noir mb-6 uppercase">Récapitulatif</h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product._id} className="flex gap-4">
                    <div className="w-16 h-16 bg-jaune border-3 border-noir shadow-[3px_3px_0_0_#000] flex items-center justify-center text-2xl flex-shrink-0">
                      🎂
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-noir text-sm truncate font-body">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-noir/60 font-body">
                        Qté: {item.quantity}
                      </p>
                      <p className="text-sm font-sans text-rouge">
                        {(item.product.price * item.quantity).toFixed(0)} €
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-1 bg-noir mb-4" />

              {/* Totals */}
              <div className="space-y-2 mb-6 font-body">
                <div className="flex justify-between text-sm text-noir">
                  <span>Sous-total</span>
                  <span>{subtotal.toFixed(0)} €</span>
                </div>
                <div className="flex justify-between text-sm text-noir">
                  <span>{deliveryType === 'delivery' ? 'Livraison' : 'Retrait'}</span>
                  <span>
                    {deliveryPrice === 0 ? 'Gratuit' : `${deliveryPrice.toFixed(0)} €`}
                  </span>
                </div>
                <div className="h-1 bg-noir my-2" />
                <div className="flex justify-between text-2xl">
                  <span className="font-sans text-noir">Total</span>
                  <span className="font-sans text-rouge">{total.toFixed(0)} €</span>
                </div>
              </div>

              {/* Submit button - desktop */}
              <div className="hidden lg:block">
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  variant="red"
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Chargement...
                    </span>
                  ) : (
                    <>
                      <CreditCard className="h-5 w-5 mr-2" />
                      Payer {total.toFixed(0)} €
                    </>
                  )}
                </Button>
              </div>

              {/* Security badges */}
              <div className="mt-6 space-y-3 font-body">
                <div className="flex items-center gap-2 text-sm text-noir/70">
                  <Lock className="h-4 w-4 text-vert" />
                  Paiement sécurisé par Stripe
                </div>
                <div className="flex items-center gap-2 text-sm text-noir/70">
                  <Check className="h-4 w-4 text-vert" />
                  Données protégées
                </div>
              </div>

              {/* Payment methods */}
              <div className="mt-6 pt-4 border-t-3 border-noir">
                <p className="text-xs text-noir/60 mb-2 font-body">Moyens de paiement acceptés</p>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-bleu text-blanc text-xs font-bold border-2 border-noir">
                    Visa
                  </div>
                  <div className="px-3 py-1 bg-rouge text-blanc text-xs font-bold border-2 border-noir">
                    Mastercard
                  </div>
                  <div className="px-3 py-1 bg-violet text-blanc text-xs font-bold border-2 border-noir">
                    Amex
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gris flex items-center justify-center">
      <div className="comic-card bg-blanc p-8 text-center">
        <div className="w-16 h-16 border-4 border-rouge border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-sans text-noir uppercase">Chargement...</p>
      </div>
    </div>
  );
}

export default function CommandePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CommandeContent />
    </Suspense>
  );
}
