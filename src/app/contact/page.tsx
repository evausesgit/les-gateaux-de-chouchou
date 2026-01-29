'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Check,
  Instagram,
  Facebook,
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-creme">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-poudre to-creme py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-brun">Contactez-</span>
              <span className="gradient-text">nous</span>
            </h1>
            <p className="text-brun-clair text-lg max-w-2xl mx-auto">
              Une question, une demande spéciale ? Notre équipe est là pour vous
              accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold text-brun mb-8">
              Nos Coordonnées
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-bordeaux to-dore rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-brun mb-1">Adresse</h3>
                  <p className="text-brun-clair">
                    Les Gâteaux de Chouchou
                    <br />
                    Paris, Île-de-France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-bordeaux to-dore rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-brun mb-1">Téléphone</h3>
                  <a
                    href="tel:+33123456789"
                    className="text-bordeaux hover:underline"
                  >
                    01 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-bordeaux to-dore rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-brun mb-1">Email</h3>
                  <a
                    href="mailto:contact@gateauxdechouchou.fr"
                    className="text-bordeaux hover:underline"
                  >
                    contact@gateauxdechouchou.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-bordeaux to-dore rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-brun mb-1">Horaires</h3>
                  <p className="text-brun-clair">
                    Lundi - Samedi : 9h00 - 19h00
                    <br />
                    Dimanche : Fermé
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <h3 className="font-semibold text-brun mb-4">Suivez-nous</h3>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white"
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white"
                >
                  <Facebook className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-bordeaux to-dore rounded-full flex items-center justify-center">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brun mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-brun-clair">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-brun mb-6">
                    Envoyez-nous un message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
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
                        required
                        className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none"
                        placeholder="Marie Dupont"
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
                        required
                        className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none"
                        placeholder="marie@exemple.fr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brun mb-2">
                        Sujet
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none bg-white"
                      >
                        <option value="">Choisir un sujet</option>
                        <option value="commande">Question sur une commande</option>
                        <option value="produit">Question sur un produit</option>
                        <option value="livraison">Livraison</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brun mb-2">
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-rose-poudre focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/20 outline-none resize-none"
                        placeholder="Votre message..."
                      />
                    </div>

                    <Button type="submit" className="w-full btn-shine" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map placeholder */}
      <section className="h-96 bg-rose-poudre relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="h-10 w-10 text-bordeaux" />
            </div>
            <p className="text-brun font-medium">Paris, Île-de-France</p>
            <p className="text-sm text-brun-clair">
              Livraison dans toute la région
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
