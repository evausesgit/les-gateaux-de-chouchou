'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  Users,
  Palette,
  MessageSquare,
  Send,
  Check,
  Cake,
  Heart,
  Star,
} from 'lucide-react';
import Button from '@/components/ui/Button';

const occasions = [
  { id: 'anniversaire', label: 'Anniversaire', emoji: '🎂' },
  { id: 'mariage', label: 'Mariage', emoji: '💒' },
  { id: 'bapteme', label: 'Baptême', emoji: '👶' },
  { id: 'entreprise', label: 'Événement entreprise', emoji: '🏢' },
  { id: 'baby-shower', label: 'Baby Shower', emoji: '🍼' },
  { id: 'autre', label: 'Autre occasion', emoji: '🎉' },
];

const flavors = [
  'Chocolat',
  'Vanille',
  'Fraise',
  'Citron',
  'Framboise',
  'Caramel',
  'Pistache',
  'Praliné',
  'Fruits exotiques',
  'Red Velvet',
];

const servingSizes = [
  '6-8 personnes',
  '10-12 personnes',
  '15-20 personnes',
  '20-30 personnes',
  '30-50 personnes',
  '50+ personnes',
];

export default function SurMesurePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    occasion: '',
    date: '',
    servings: '',
    flavors: [] as string[],
    description: '',
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFlavorToggle = (flavor: string) => {
    setFormData((prev) => ({
      ...prev,
      flavors: prev.flavors.includes(flavor)
        ? prev.flavors.filter((f) => f !== flavor)
        : [...prev.flavors, flavor],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on enverrait les données à l'API
    setSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.occasion !== '';
      case 2:
        return formData.date !== '' && formData.servings !== '';
      case 3:
        return formData.flavors.length > 0;
      case 4:
        return (
          formData.name !== '' &&
          formData.email !== '' &&
          formData.phone !== ''
        );
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-creme flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-bordeaux to-dore rounded-full flex items-center justify-center"
          >
            <Check className="h-12 w-12 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold text-brun mb-4">
            Demande envoyée !
          </h1>
          <p className="text-brun-clair mb-8">
            Merci pour votre demande. Nous vous recontacterons sous 24h pour
            discuter de votre projet gourmand.
          </p>
          <Button onClick={() => (window.location.href = '/')}>
            Retour à l'accueil
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-creme">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-bordeaux via-bordeaux-hover to-bordeaux py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-dore rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Création Unique
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Votre Gâteau Sur Mesure
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Racontez-nous votre projet et nous créerons ensemble le gâteau
              parfait pour votre événement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-sm border-b border-rose-poudre">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Occasion', icon: Cake },
              { num: 2, label: 'Détails', icon: Calendar },
              { num: 3, label: 'Saveurs', icon: Palette },
              { num: 4, label: 'Contact', icon: MessageSquare },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div
                  className={`flex items-center gap-2 ${
                    step >= s.num ? 'text-bordeaux' : 'text-brun-clair'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      step >= s.num
                        ? 'bg-bordeaux text-white'
                        : 'bg-rose-poudre text-brun-clair'
                    }`}
                  >
                    {step > s.num ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <s.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span className="hidden sm:block font-medium">{s.label}</span>
                </div>
                {i < 3 && (
                  <div
                    className={`w-12 sm:w-24 h-1 mx-2 rounded-full transition-all ${
                      step > s.num ? 'bg-bordeaux' : 'bg-rose-poudre'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Occasion */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-bold text-brun mb-2">
                Quelle est l'occasion ?
              </h2>
              <p className="text-brun-clair mb-8">
                Choisissez le type d'événement pour lequel vous souhaitez un
                gâteau.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {occasions.map((occasion) => (
                  <motion.button
                    key={occasion.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setFormData({ ...formData, occasion: occasion.id })
                    }
                    className={`p-6 rounded-2xl border-2 transition-all text-center ${
                      formData.occasion === occasion.id
                        ? 'border-bordeaux bg-bordeaux/5 shadow-lg'
                        : 'border-rose-poudre hover:border-bordeaux/50 bg-white'
                    }`}
                  >
                    <span className="text-4xl block mb-3">{occasion.emoji}</span>
                    <span className="font-semibold text-brun">
                      {occasion.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-bold text-brun mb-2">
                Les détails de votre événement
              </h2>
              <p className="text-brun-clair mb-8">
                Aidez-nous à préparer le gâteau parfait pour votre occasion.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brun mb-2">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Date de l'événement
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brun mb-3">
                    <Users className="h-4 w-4 inline mr-2" />
                    Nombre de personnes
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {servingSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, servings: size })
                        }
                        className={`px-4 py-3 rounded-xl transition-all ${
                          formData.servings === size
                            ? 'bg-bordeaux text-white'
                            : 'bg-white border border-rose-poudre hover:border-bordeaux text-brun'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Flavors */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-bold text-brun mb-2">
                Quelles saveurs vous tentent ?
              </h2>
              <p className="text-brun-clair mb-8">
                Sélectionnez une ou plusieurs saveurs (nous vous proposerons des
                associations).
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                {flavors.map((flavor) => (
                  <button
                    key={flavor}
                    type="button"
                    onClick={() => handleFlavorToggle(flavor)}
                    className={`px-4 py-3 rounded-xl transition-all ${
                      formData.flavors.includes(flavor)
                        ? 'bg-bordeaux text-white shadow-lg'
                        : 'bg-white border border-rose-poudre hover:border-bordeaux text-brun'
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-brun mb-2">
                  <MessageSquare className="h-4 w-4 inline mr-2" />
                  Décrivez votre gâteau idéal (optionnel)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Thème, couleurs, décorations souhaitées, allergies..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none bg-white resize-none"
                />
              </div>
            </motion.div>
          )}

          {/* Step 4: Contact */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-bold text-brun mb-2">
                Vos coordonnées
              </h2>
              <p className="text-brun-clair mb-8">
                Nous vous recontacterons sous 24h avec une proposition
                personnalisée.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brun mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Marie Dupont"
                    className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brun mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="marie@exemple.fr"
                    className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brun mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none bg-white"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="mt-8 p-6 bg-rose-poudre/30 rounded-2xl">
                <h3 className="font-semibold text-brun mb-4">Récapitulatif</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-brun-clair">Occasion</span>
                    <span className="text-brun font-medium">
                      {occasions.find((o) => o.id === formData.occasion)?.label}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-brun-clair">Date</span>
                    <span className="text-brun font-medium">
                      {new Date(formData.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-brun-clair">Personnes</span>
                    <span className="text-brun font-medium">
                      {formData.servings}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-brun-clair">Saveurs</span>
                    <span className="text-brun font-medium">
                      {formData.flavors.join(', ')}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            {step > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Retour
              </Button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <Button
                type="button"
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
              >
                Continuer
              </Button>
            ) : (
              <Button type="submit" disabled={!canProceed()} className="btn-shine">
                <Send className="h-4 w-4 mr-2" />
                Envoyer ma demande
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* Trust badges */}
      <section className="py-12 bg-white border-t border-rose-poudre">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { icon: Heart, label: 'Fait avec amour' },
              { icon: Star, label: 'Qualité premium' },
              { icon: Sparkles, label: 'Création unique' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-rose-poudre rounded-full flex items-center justify-center mb-2">
                  <item.icon className="h-6 w-6 text-bordeaux" />
                </div>
                <span className="text-sm font-medium text-brun">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
