'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Mail, ArrowRight, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useCartStore } from '@/store/cart';
import confetti from 'canvas-confetti';

export default function ConfirmationPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    // Clear the cart after successful payment
    clearCart();

    // Celebrate with confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#8B4557', '#D4A853', '#F4E4E4', '#FFD700'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#8B4557', '#D4A853', '#F4E4E4', '#FFD700'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-poudre/50 to-creme flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full"
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-bordeaux via-dore to-bordeaux" />

          {/* Success icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="relative mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-dore rounded-full flex items-center justify-center"
            >
              <Sparkles className="h-4 w-4 text-white" />
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-brun mb-4">
              Merci pour votre commande !
            </h1>
            <p className="text-brun-clair text-lg mb-8">
              Votre commande a bien été enregistrée. Nous préparons vos délices
              avec amour !
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-8"
          >
            <div className="flex items-center gap-4 p-4 bg-rose-poudre/50 rounded-xl text-left">
              <div className="w-12 h-12 bg-bordeaux/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-bordeaux" />
              </div>
              <div>
                <p className="font-semibold text-brun">Confirmation par email</p>
                <p className="text-sm text-brun-clair">
                  Un récapitulatif vous a été envoyé
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-rose-poudre/50 rounded-xl text-left">
              <div className="w-12 h-12 bg-bordeaux/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="h-6 w-6 text-bordeaux" />
              </div>
              <div>
                <p className="font-semibold text-brun">Préparation en cours</p>
                <p className="text-sm text-brun-clair">
                  Vous serez notifié de l'avancement
                </p>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            <Link href="/boutique" className="block">
              <Button className="w-full btn-shine" size="lg">
                Continuer mes achats
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/" className="block">
              <Button variant="outline" className="w-full" size="lg">
                Retour à l'accueil
              </Button>
            </Link>
          </motion.div>

          {/* Support note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-sm text-brun-clair"
          >
            Une question ? Contactez-nous à{' '}
            <a
              href="mailto:contact@gateauxdechouchou.fr"
              className="text-bordeaux hover:underline"
            >
              contact@gateauxdechouchou.fr
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
