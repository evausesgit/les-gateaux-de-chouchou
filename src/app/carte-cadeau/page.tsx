'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronLeft,
  Gift,
  Heart,
  Mail,
  Check,
  Sparkles,
} from 'lucide-react';
import Button from '@/components/ui/Button';

const giftAmounts = [25, 50, 75, 100, 150, 200];

export default function CartesCadeauPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount >= 10) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-creme">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-poudre to-creme py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-8xl">🎁</div>
          <div className="absolute bottom-10 right-10 text-8xl">🎂</div>
          <div className="absolute top-1/2 left-1/3 text-6xl">✨</div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-bordeaux to-dore rounded-full mb-6 shadow-lg">
              <Gift className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-brun">Carte </span>
              <span className="gradient-text">Cadeau</span>
            </h1>
            <p className="text-brun-clair text-lg max-w-2xl mx-auto">
              Offrez des moments de bonheur gourmand à vos proches avec nos
              cartes cadeaux digitales
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 shadow-lg text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <Check className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-brun mb-4">
              Carte cadeau envoyée !
            </h2>
            <p className="text-brun-clair text-lg mb-8">
              {formData.recipientName} recevra sa carte cadeau de {finalAmount}€
              par email très bientôt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setSubmitted(false)}>
                Offrir une autre carte
              </Button>
              <Link href="/boutique">
                <Button variant="outline">Voir la boutique</Button>
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Amount selection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-brun mb-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-dore" />
                Choisissez le montant
              </h2>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {giftAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-xl border-2 font-bold text-lg transition-all ${
                      selectedAmount === amount
                        ? 'border-bordeaux bg-bordeaux text-white'
                        : 'border-rose-poudre hover:border-bordeaux text-brun'
                    }`}
                  >
                    {amount}€
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="number"
                  min="10"
                  max="500"
                  placeholder="Montant personnalisé (10€ - 500€)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-brun-clair">
                  €
                </span>
              </div>

              {/* Preview card */}
              <div className="mt-8 p-6 bg-gradient-to-br from-bordeaux via-bordeaux-hover to-dore rounded-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-20 text-8xl">
                  🎁
                </div>
                <div className="relative">
                  <p className="text-white/80 text-sm mb-1">Carte Cadeau</p>
                  <h3 className="text-2xl font-bold mb-4">
                    Les Gâteaux de Chouchou
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">
                      {finalAmount || '—'}
                    </span>
                    <span className="text-xl">€</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-brun mb-6 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-bordeaux" />
                  Personnalisez votre cadeau
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-brun mb-2">
                      Nom du destinataire *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.recipientName}
                      onChange={(e) =>
                        setFormData({ ...formData, recipientName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none"
                      placeholder="Marie"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brun mb-2">
                      <Mail className="h-4 w-4 inline mr-1" />
                      Email du destinataire *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.recipientEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          recipientEmail: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none"
                      placeholder="marie@exemple.fr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brun mb-2">
                      Votre nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.senderName}
                      onChange={(e) =>
                        setFormData({ ...formData, senderName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none"
                      placeholder="Jean"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brun mb-2">
                      Message personnel (optionnel)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none resize-none"
                      placeholder="Joyeux anniversaire ! Régale-toi bien..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-shine"
                    size="lg"
                    disabled={finalAmount < 10}
                  >
                    <Gift className="h-5 w-5 mr-2" />
                    Offrir {finalAmount > 0 ? `${finalAmount}€` : ''}
                  </Button>

                  {finalAmount > 0 && finalAmount < 10 && (
                    <p className="text-sm text-red-500 text-center">
                      Le montant minimum est de 10€
                    </p>
                  )}
                </div>
              </form>

              {/* Info */}
              <div className="mt-6 p-4 bg-rose-poudre/30 rounded-xl">
                <p className="text-sm text-brun-clair">
                  <strong className="text-brun">Comment ça marche ?</strong>
                  <br />
                  La carte cadeau sera envoyée par email au destinataire avec un
                  code unique utilisable sur notre boutique en ligne. Validité :
                  1 an.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
