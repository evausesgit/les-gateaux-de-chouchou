'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, Shield } from 'lucide-react';

export default function ConfidentialitePage() {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-bordeaux/10 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-bordeaux" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brun">
              Politique de Confidentialité
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <p className="text-brun-clair italic mb-8">
            Dernière mise à jour : Janvier 2026
          </p>

          <p className="text-brun-clair leading-relaxed mb-8">
            Chez Les Gâteaux de Chouchou, nous accordons une importance
            particulière à la protection de vos données personnelles. Cette
            politique décrit comment nous collectons, utilisons et protégeons
            vos informations.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            1. Responsable du traitement
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Le responsable du traitement des données est :
            <br />
            <strong>Les Gâteaux de Chouchou</strong>
            <br />
            Email : contact@gateauxdechouchou.fr
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            2. Données collectées
          </h2>
          <p className="text-brun-clair leading-relaxed mb-4">
            Nous collectons les données suivantes :
          </p>
          <ul className="text-brun-clair list-disc ml-6 space-y-2">
            <li>
              <strong>Données d'identification :</strong> nom, prénom, email,
              téléphone
            </li>
            <li>
              <strong>Données de livraison :</strong> adresse postale
            </li>
            <li>
              <strong>Données de commande :</strong> historique d'achats,
              préférences
            </li>
            <li>
              <strong>Données de navigation :</strong> cookies, adresse IP (voir
              section Cookies)
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            3. Finalités du traitement
          </h2>
          <p className="text-brun-clair leading-relaxed mb-4">
            Vos données sont utilisées pour :
          </p>
          <ul className="text-brun-clair list-disc ml-6 space-y-2">
            <li>Traiter et livrer vos commandes</li>
            <li>Vous contacter concernant votre commande</li>
            <li>
              Envoyer notre newsletter (avec votre consentement uniquement)
            </li>
            <li>Améliorer notre site et nos services</li>
            <li>Respecter nos obligations légales</li>
          </ul>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            4. Base légale du traitement
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Le traitement de vos données repose sur :
          </p>
          <ul className="text-brun-clair list-disc ml-6 space-y-2 mt-4">
            <li>
              <strong>L'exécution d'un contrat :</strong> pour le traitement de
              vos commandes
            </li>
            <li>
              <strong>Votre consentement :</strong> pour l'envoi de newsletters
            </li>
            <li>
              <strong>Nos obligations légales :</strong> conservation des
              factures
            </li>
            <li>
              <strong>Notre intérêt légitime :</strong> amélioration de nos
              services
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            5. Destinataires des données
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Vos données peuvent être partagées avec :
          </p>
          <ul className="text-brun-clair list-disc ml-6 space-y-2 mt-4">
            <li>
              <strong>Stripe :</strong> pour le traitement des paiements
              (certifié PCI DSS)
            </li>
            <li>
              <strong>Nos livreurs :</strong> pour la livraison de vos commandes
            </li>
            <li>
              <strong>Vercel :</strong> hébergement du site
            </li>
          </ul>
          <p className="text-brun-clair leading-relaxed mt-4">
            Nous ne vendons jamais vos données à des tiers.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            6. Durée de conservation
          </h2>
          <ul className="text-brun-clair list-disc ml-6 space-y-2">
            <li>
              <strong>Données de compte :</strong> jusqu'à suppression de votre
              compte ou 3 ans d'inactivité
            </li>
            <li>
              <strong>Données de commande :</strong> 10 ans (obligations
              comptables)
            </li>
            <li>
              <strong>Cookies :</strong> 13 mois maximum
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            7. Vos droits
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="text-brun-clair list-disc ml-6 space-y-2 mt-4">
            <li>
              <strong>Droit d'accès :</strong> obtenir une copie de vos données
            </li>
            <li>
              <strong>Droit de rectification :</strong> corriger vos données
            </li>
            <li>
              <strong>Droit à l'effacement :</strong> demander la suppression de
              vos données
            </li>
            <li>
              <strong>Droit à la portabilité :</strong> récupérer vos données
              dans un format structuré
            </li>
            <li>
              <strong>Droit d'opposition :</strong> vous opposer au traitement
              de vos données
            </li>
            <li>
              <strong>Droit de retirer votre consentement :</strong> à tout
              moment pour la newsletter
            </li>
          </ul>
          <p className="text-brun-clair leading-relaxed mt-4">
            Pour exercer ces droits, contactez-nous à :
            contact@gateauxdechouchou.fr
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            8. Cookies
          </h2>
          <p className="text-brun-clair leading-relaxed mb-4">
            Notre site utilise des cookies :
          </p>
          <ul className="text-brun-clair list-disc ml-6 space-y-2">
            <li>
              <strong>Cookies essentiels :</strong> fonctionnement du site,
              panier, authentification
            </li>
            <li>
              <strong>Cookies analytiques :</strong> mesure d'audience
              (anonymisés)
            </li>
          </ul>
          <p className="text-brun-clair leading-relaxed mt-4">
            Vous pouvez gérer vos préférences cookies dans les paramètres de
            votre navigateur.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            9. Sécurité
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Nous mettons en œuvre des mesures de sécurité appropriées pour
            protéger vos données :
          </p>
          <ul className="text-brun-clair list-disc ml-6 space-y-2 mt-4">
            <li>Chiffrement SSL/TLS pour toutes les transmissions</li>
            <li>Paiements sécurisés via Stripe (certifié PCI DSS)</li>
            <li>Accès restreint aux données personnelles</li>
            <li>Mises à jour régulières de sécurité</li>
          </ul>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            10. Modifications
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Cette politique peut être mise à jour. En cas de modification
            importante, nous vous en informerons par email ou via une
            notification sur notre site.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            11. Contact
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Pour toute question concernant cette politique ou vos données
            personnelles :
            <br />
            <br />
            <strong>Email :</strong> contact@gateauxdechouchou.fr
            <br />
            <strong>Téléphone :</strong> 01 23 45 67 89
            <br />
            <br />
            Vous pouvez également introduire une réclamation auprès de la CNIL
            (Commission Nationale de l'Informatique et des Libertés).
          </p>
        </motion.div>
      </div>
    </div>
  );
}
