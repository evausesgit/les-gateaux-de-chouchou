'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function CGVPage() {
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
            Conditions Générales de Vente
          </motion.h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm prose prose-lg max-w-none"
        >
          <p className="text-brun-clair italic">
            Dernière mise à jour : Janvier 2026
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            Article 1 - Objet
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Les présentes conditions générales de vente régissent les relations
            contractuelles entre Les Gâteaux de Chouchou et ses clients, dans le
            cadre de la vente de pâtisseries artisanales.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            Article 2 - Produits
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Les produits proposés sont des créations pâtissières artisanales,
            fabriquées avec des ingrédients de qualité. Les descriptions et
            photographies sont données à titre indicatif. Nos produits peuvent
            contenir des allergènes (gluten, œufs, lait, fruits à coque). La
            liste complète est disponible sur chaque fiche produit.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            Article 3 - Prix
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Les prix sont indiqués en euros TTC. Les frais de livraison
            s'ajoutent au prix des produits et varient selon la zone de
            livraison en Île-de-France. Le retrait en boutique est gratuit.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            Article 4 - Commandes
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Les commandes sont passées via notre site internet. Un délai minimum
            de 24h est requis entre la commande et la livraison/retrait. Pour
            les commandes sur mesure, un délai de 48h à 72h peut être nécessaire
            selon la complexité de la création.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            Article 5 - Paiement
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Le paiement s'effectue en ligne par carte bancaire via notre
            plateforme sécurisée Stripe. La commande est confirmée après
            réception du paiement intégral.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            Article 6 - Livraison
          </h2>
          <p className="text-brun-clair leading-relaxed">
            La livraison est effectuée à l'adresse indiquée lors de la commande,
            dans les créneaux horaires disponibles. Le client s'engage à être
            présent ou à désigner un tiers pour réceptionner la commande. En cas
            d'absence, les frais de nouvelle livraison seront à la charge du
            client.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            Article 7 - Retrait en boutique
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Le retrait s'effectue à notre adresse parisienne, dans le créneau
            horaire choisi. Une pièce d'identité et le numéro de commande seront
            demandés.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            Article 8 - Droit de rétractation
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Conformément à l'article L221-28 du Code de la consommation, le
            droit de rétractation ne s'applique pas aux denrées alimentaires
            périssables. Aucun remboursement ne pourra être effectué après
            préparation de la commande.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            Article 9 - Réclamations
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Toute réclamation doit être formulée par email à
            contact@gateauxdechouchou.fr dans les 24h suivant la réception de la
            commande, accompagnée de photos si nécessaire. Nous nous engageons à
            traiter chaque réclamation avec attention.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            Article 10 - Données personnelles
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Les informations collectées sont nécessaires au traitement des
            commandes. Elles sont traitées conformément au RGPD. Vous disposez
            d'un droit d'accès, de rectification et de suppression de vos
            données en nous contactant.
          </p>

          <h2 className="text-2xl font-bold text-brun mt-8 mb-4">
            Article 11 - Contact
          </h2>
          <p className="text-brun-clair leading-relaxed">
            Pour toute question concernant ces conditions générales de vente,
            vous pouvez nous contacter à :
            <br />
            <strong>Email :</strong> contact@gateauxdechouchou.fr
            <br />
            <strong>Téléphone :</strong> 01 23 45 67 89
          </p>
        </motion.div>
      </div>
    </div>
  );
}
