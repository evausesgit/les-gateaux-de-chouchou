'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart, ArrowRight, Star } from 'lucide-react';

const footerLinks = {
  boutique: [
    { name: 'Nos Gâteaux', href: '/boutique' },
    { name: 'Gâteaux sur Mesure', href: '/sur-mesure' },
    { name: 'Éditions Collector', href: '/gaby-the-artist' },
    { name: 'Carte Cadeau', href: '/carte-cadeau' },
  ],
  informations: [
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Livraison', href: '/livraison' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Mentions Légales', href: '/mentions-legales' },
    { name: 'CGV', href: '/cgv' },
    { name: 'Confidentialité', href: '/confidentialite' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Newsletter Section - Comic style */}
      <div className="bg-bleu py-16 relative border-t-4 border-noir">
        {/* Halftone pattern */}
        <div className="absolute inset-0 halftone-yellow opacity-30" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Speech bubble style */}
            <div className="speech-bubble inline-block mb-8 bg-jaune">
              <motion.span
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl block"
              >
                💌
              </motion.span>
            </div>

            <h3 className="comic-title comic-title-white text-3xl md:text-5xl mb-4">
              Restez gourmands !
            </h3>
            <p className="text-blanc/90 mb-8 max-w-md mx-auto font-body text-lg">
              Inscrivez-vous pour recevoir nos nouveautés et offres exclusives.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="comic-input flex-1 text-center sm:text-left"
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="comic-btn comic-btn-red"
              >
                S'inscrire
                <ArrowRight className="h-4 w-4 ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer - Comic panel style */}
      <div className="bg-noir text-blanc py-16 border-t-4 border-jaune">
        {/* Action lines background */}
        <div className="absolute inset-0 action-lines opacity-5" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6 group">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    className="w-14 h-14 bg-jaune border-4 border-jaune flex items-center justify-center text-3xl shadow-[4px_4px_0_0_#FF0000]"
                  >
                    🎂
                  </motion.div>
                  <div>
                    <span className="comic-title text-2xl text-jaune block leading-tight">
                      Les Gâteaux
                    </span>
                    <span className="text-sm font-bold text-rouge block leading-tight font-body">
                      de Chouchou
                    </span>
                  </div>
                </div>
              </Link>
              <p className="text-blanc/70 mb-6 leading-relaxed font-body">
                Des créations gourmandes faites avec amour, pour illuminer vos
                moments de bonheur.
              </p>

              {/* Contact - Comic badges */}
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 text-blanc/70 hover:text-jaune transition-colors group"
                >
                  <span className="w-10 h-10 bg-rouge border-3 border-blanc flex items-center justify-center group-hover:bg-jaune group-hover:text-noir transition-all shadow-[3px_3px_0_0_#FFDD00]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="font-body">Paris, Île-de-France</span>
                </a>
                <a
                  href="tel:+33123456789"
                  className="flex items-center gap-3 text-blanc/70 hover:text-jaune transition-colors group"
                >
                  <span className="w-10 h-10 bg-bleu border-3 border-blanc flex items-center justify-center group-hover:bg-jaune group-hover:text-noir transition-all shadow-[3px_3px_0_0_#FFDD00]">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="font-body">01 23 45 67 89</span>
                </a>
                <a
                  href="mailto:contact@gateauxdechouchou.fr"
                  className="flex items-center gap-3 text-blanc/70 hover:text-jaune transition-colors group"
                >
                  <span className="w-10 h-10 bg-vert border-3 border-blanc flex items-center justify-center group-hover:bg-jaune group-hover:text-noir transition-all shadow-[3px_3px_0_0_#FFDD00]">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="font-body text-sm">contact@gateauxdechouchou.fr</span>
                </a>
              </div>
            </div>

            {/* Links - Comic style */}
            <div>
              <h3 className="font-sans text-lg mb-6 text-jaune uppercase tracking-wide flex items-center gap-2">
                <Star className="h-4 w-4 fill-jaune" />
                Boutique
              </h3>
              <ul className="space-y-3">
                {footerLinks.boutique.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-blanc/70 hover:text-blanc font-body hover:translate-x-2 transition-all inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-rouge" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-lg mb-6 text-jaune uppercase tracking-wide flex items-center gap-2">
                <Star className="h-4 w-4 fill-jaune" />
                Informations
              </h3>
              <ul className="space-y-3">
                {footerLinks.informations.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-blanc/70 hover:text-blanc font-body hover:translate-x-2 transition-all inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-bleu" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-lg mb-6 text-jaune uppercase tracking-wide flex items-center gap-2">
                <Star className="h-4 w-4 fill-jaune" />
                Légal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-blanc/70 hover:text-blanc font-body hover:translate-x-2 transition-all inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-vert" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social - Comic buttons */}
              <div className="mt-8">
                <h4 className="font-sans text-lg mb-4 text-jaune uppercase tracking-wide">Suivez-nous</h4>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-rose border-3 border-blanc flex items-center justify-center hover:bg-jaune hover:text-noir transition-all shadow-[3px_3px_0_0_#FFDD00]"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-bleu border-3 border-blanc flex items-center justify-center hover:bg-jaune hover:text-noir transition-all shadow-[3px_3px_0_0_#FFDD00]"
                  >
                    <Facebook className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom - Comic divider */}
          <div className="comic-divider mt-16 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blanc/50 text-sm font-body uppercase tracking-wide">
              © {new Date().getFullYear()} Les Gâteaux de Chouchou. Tous droits réservés.
            </p>
            <p className="text-blanc/50 text-sm flex items-center gap-2 font-body uppercase tracking-wide">
              Fait avec{' '}
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-rouge fill-rouge" />
              </motion.span>{' '}
              à Paris
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
