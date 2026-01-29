'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Commandes',
    questions: [
      {
        q: 'Quel est le délai pour passer commande ?',
        a: 'Nous vous conseillons de passer commande au minimum 24h à l\'avance pour les gâteaux classiques, et 48h à 72h pour les créations sur mesure. Pour les commandes importantes ou les périodes de fêtes, nous recommandons de commander une semaine à l\'avance.',
      },
      {
        q: 'Comment modifier ou annuler ma commande ?',
        a: 'Vous pouvez modifier ou annuler votre commande jusqu\'à 48h avant la date de livraison ou retrait prévue, en nous contactant par email ou téléphone. Passé ce délai, aucune modification ne sera possible car nous aurons déjà commencé la préparation.',
      },
      {
        q: 'Les prix sont-ils TTC ?',
        a: 'Oui, tous nos prix affichés sont TTC (toutes taxes comprises). Les frais de livraison sont indiqués séparément lors de la commande.',
      },
    ],
  },
  {
    category: 'Livraison & Retrait',
    questions: [
      {
        q: 'Quelles sont les zones de livraison ?',
        a: 'Nous livrons dans toute l\'Île-de-France : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Essonne (91), Seine-et-Marne (77), Yvelines (78) et Val-d\'Oise (95). Les tarifs varient de 10€ à 15€ selon la zone.',
      },
      {
        q: 'Comment se passe le retrait en boutique ?',
        a: 'Le retrait est gratuit ! Présentez-vous à notre adresse parisienne dans le créneau horaire choisi, muni de votre numéro de commande et d\'une pièce d\'identité. Nous vous remettrons votre commande avec des conseils de conservation.',
      },
      {
        q: 'Que se passe-t-il si je ne suis pas présent lors de la livraison ?',
        a: 'Notre livreur vous appellera avant de passer. Si vous n\'êtes pas disponible, vous pouvez désigner un tiers pour réceptionner votre commande. En cas d\'absence sans avertissement, une nouvelle livraison vous sera facturée.',
      },
    ],
  },
  {
    category: 'Produits',
    questions: [
      {
        q: 'Vos produits contiennent-ils des allergènes ?',
        a: 'Oui, nos pâtisseries peuvent contenir des allergènes courants : gluten, œufs, lait, fruits à coque, arachides, soja. La liste complète est indiquée sur chaque fiche produit. N\'hésitez pas à nous contacter pour toute question spécifique.',
      },
      {
        q: 'Comment conserver mes gâteaux ?',
        a: 'Nos gâteaux se conservent au réfrigérateur entre 2°C et 6°C. Sortez-les 30 minutes avant dégustation pour apprécier pleinement leurs saveurs. La durée de conservation varie selon les produits (généralement 2-3 jours).',
      },
      {
        q: 'Proposez-vous des options végétariennes ou sans gluten ?',
        a: 'Nous avons quelques créations végétariennes dans notre gamme. Pour les besoins sans gluten ou autres régimes spécifiques, contactez-nous pour une création sur mesure. Notez que notre atelier manipule des allergènes courants.',
      },
    ],
  },
  {
    category: 'Sur Mesure & Événements',
    questions: [
      {
        q: 'Comment commander un gâteau sur mesure ?',
        a: 'Rendez-vous sur notre page "Sur Mesure" et remplissez le formulaire avec vos souhaits. Nous vous recontacterons sous 24h avec une proposition et un devis personnalisé.',
      },
      {
        q: 'Quel budget prévoir pour un gâteau sur mesure ?',
        a: 'Le prix dépend de la taille, de la complexité du design et des ingrédients. Nos créations sur mesure démarrent autour de 60€ pour un gâteau 6 personnes. Nous vous fournirons un devis détaillé avant confirmation.',
      },
      {
        q: 'Faites-vous des wedding cakes ?',
        a: 'Absolument ! Nous créons des pièces montées et wedding cakes pour les mariages. Contactez-nous au moins 3 mois à l\'avance pour discuter de votre projet et organiser une dégustation.',
      },
    ],
  },
  {
    category: 'Paiement & Remboursement',
    questions: [
      {
        q: 'Quels moyens de paiement acceptez-vous ?',
        a: 'Nous acceptons les paiements par carte bancaire (Visa, Mastercard, American Express) via notre plateforme sécurisée Stripe. Le paiement s\'effectue lors de la commande.',
      },
      {
        q: 'Puis-je me faire rembourser ?',
        a: 'En raison de la nature périssable de nos produits, le droit de rétractation ne s\'applique pas (article L221-28 du Code de la consommation). En cas de problème avec votre commande, contactez-nous dans les 24h avec des photos.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-rose-poudre last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-brun group-hover:text-bordeaux transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-bordeaux" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-brun-clair leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-bordeaux/10 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-bordeaux" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-brun">Questions </span>
              <span className="gradient-text">Fréquentes</span>
            </h1>
            <p className="text-brun-clair text-lg max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {faqs.map((category, index) => (
          <motion.section
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-brun mb-6">
              {category.category}
            </h2>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6">
                {category.questions.map((faq) => (
                  <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          </motion.section>
        ))}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-bordeaux to-bordeaux-hover rounded-3xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Vous n'avez pas trouvé votre réponse ?
          </h3>
          <p className="text-white/80 mb-6">
            Notre équipe est là pour vous aider
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-bordeaux font-semibold rounded-full hover:bg-dore hover:text-white transition-colors"
          >
            Nous contacter
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
