'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-creme">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-poudre to-creme py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-brun-clair hover:text-bordeaux transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Retour
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-brun"
          >
            Mentions Légales
          </motion.h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm prose prose-lg max-w-none"
        >
          <h2 className="text-2xl font-bold text-brun mb-4">
            1. Éditeur du site
          </h2>
          <p className="text-brun-clair leading-relaxed">
            <strong>Les Gâteaux de Chouchou</strong>
            <br />
            [Forme juridique à compléter]
            <br />
            [Adresse complète]
            <br />
            Paris, Île-de-France
            <br />
            <br />
            <strong>Email :</strong> contact@gateauxdechouchou.fr
            <br />
            <strong>Téléphone :</strong> 01 23 45 67 89
            <br />
            <br />
            [Numéro SIRET à compléter]
            <br />
            [Numéro TVA intracommunautaire à compléter]
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            2. Directeur de la publication
          </h2>
          <p className="text-brun-clair leading-relaxed">
            [Nom du responsable à compléter]
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            3. Hébergement
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Le site est hébergé par :
            <br />
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723
            <br />
            États-Unis
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            4. Propriété intellectuelle
          </h2>
          <p className="text-brun-clair leading-relaxed">
            L'ensemble du contenu de ce site (textes, images, vidéos, logos,
            graphismes) est protégé par le droit d'auteur et appartient à Les
            Gâteaux de Chouchou ou fait l'objet d'une autorisation d'utilisation.
            <br />
            <br />
            Toute reproduction, distribution, modification ou utilisation du
            contenu sans autorisation préalable est strictement interdite.
            <br />
            <br />
            Les illustrations "Gaby the Artist" sont des créations originales
            protégées par le droit d'auteur.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            5. Protection des données personnelles
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez d'un
            droit d'accès, de rectification, de portabilité, d'effacement de vos
            données, ainsi qu'un droit d'opposition et de limitation du
            traitement.
            <br />
            <br />
            Les données collectées sont uniquement utilisées pour :
          </p>
          <ul className="text-brun-clair list-disc ml-6 space-y-2">
            <li>Le traitement de vos commandes</li>
            <li>La communication relative à votre commande</li>
            <li>L'envoi de notre newsletter (si consentement)</li>
            <li>L'amélioration de nos services</li>
          </ul>
          <p className="text-brun-clair leading-relaxed mt-4">
            Pour exercer vos droits, contactez-nous à :
            contact@gateauxdechouchou.fr
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            6. Cookies
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Ce site utilise des cookies pour améliorer votre expérience de
            navigation :
          </p>
          <ul className="text-brun-clair list-disc ml-6 space-y-2">
            <li>
              <strong>Cookies essentiels :</strong> nécessaires au
              fonctionnement du site (panier, session)
            </li>
            <li>
              <strong>Cookies analytiques :</strong> pour comprendre l'utilisation
              du site (anonymisés)
            </li>
          </ul>
          <p className="text-brun-clair leading-relaxed mt-4">
            Vous pouvez configurer votre navigateur pour refuser les cookies non
            essentiels.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            7. Liens externes
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Ce site peut contenir des liens vers des sites tiers. Nous déclinons
            toute responsabilité quant au contenu de ces sites externes.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            8. Litiges
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Les présentes mentions légales sont régies par le droit français. En
            cas de litige, et après échec de toute tentative de résolution
            amiable, les tribunaux français seront compétents.
            <br />
            <br />
            Conformément aux dispositions du Code de la consommation concernant
            le règlement amiable des litiges, vous pouvez recourir au service de
            médiation de votre choix.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            9. Crédits
          </h2>
          <p className="text-brun-clair leading-relaxed">
            <strong>Conception et développement :</strong> [À compléter]
            <br />
            <strong>Illustrations collector :</strong> Gaby the Artist
            <br />
            <strong>Photographies :</strong> [À compléter]
          </p>
        </motion.div>
      </div>
    </div>
  );
}
