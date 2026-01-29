'use client';

import { motion } from 'framer-motion';
import { Heart, Award, Leaf, Users } from 'lucide-react';

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-rose-poudre py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-brun mb-6">
                Notre Histoire
              </h1>
              <p className="text-lg text-brun-clair leading-relaxed">
                Les Gâteaux de Chouchou, c'est avant tout une histoire de
                passion, de transmission et d'amour pour les bonnes choses.
                Née d'une envie de partager des moments de douceur, notre
                pâtisserie met un point d'honneur à créer des gourmandises
                qui réchauffent les cœurs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="aspect-square bg-white rounded-3xl shadow-lg flex items-center justify-center text-[150px]">
                👩‍🍳
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-creme">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-brun mb-4">Nos Valeurs</h2>
            <p className="text-brun-clair max-w-2xl mx-auto">
              Chaque gâteau que nous créons est le reflet de nos engagements
              et de notre passion pour l'artisanat.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Fait avec Amour',
                description:
                  'Chaque création est préparée avec soin et passion, comme pour nos proches.',
              },
              {
                icon: Award,
                title: 'Qualité Premium',
                description:
                  'Nous sélectionnons les meilleurs ingrédients pour des saveurs authentiques.',
              },
              {
                icon: Leaf,
                title: 'Respect de la Nature',
                description:
                  'Produits locaux et de saison, emballages éco-responsables.',
              },
              {
                icon: Users,
                title: 'Savoir-faire Artisanal',
                description:
                  'Des recettes traditionnelles revisitées avec créativité.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl text-center"
              >
                <div className="w-14 h-14 bg-rose-poudre rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-bordeaux" />
                </div>
                <h3 className="text-lg font-semibold text-brun mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-brun-clair">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg text-brun-clair mx-auto"
          >
            <h2 className="text-3xl font-bold text-brun text-center mb-8">
              Comment tout a commencé
            </h2>

            <p>
              Tout a commencé dans une petite cuisine parisienne, où les
              parfums de vanille et de caramel se mêlaient aux rires et aux
              souvenirs d'enfance. Des recettes transmises de génération en
              génération, des gestes appris au fil du temps, et surtout,
              l'envie irrésistible de faire plaisir aux autres.
            </p>

            <p>
              "Chouchou", c'est ce petit surnom affectueux qu'on donne à ceux
              qu'on aime. C'est cette tendresse qu'on a voulu mettre dans
              chacune de nos créations. Parce qu'un bon gâteau, c'est bien
              plus qu'un dessert : c'est un moment de bonheur partagé, une
              pause gourmande qui réchauffe le cœur.
            </p>

            <p>
              Aujourd'hui, Les Gâteaux de Chouchou perpétue cette tradition
              du fait-maison, avec des recettes qui allient savoir-faire
              artisanal et touches de modernité. Chaque gâteau est préparé
              avec amour, pour que chaque bouchée soit un voyage gustatif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-rose-poudre/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brun mb-4">Notre Équipe</h2>
            <p className="text-brun-clair">
              Des passionnés au service de vos papilles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Chouchou',
                role: 'Fondatrice & Chef Pâtissière',
                emoji: '👩‍🍳',
              },
              {
                name: 'Gaby',
                role: 'Directrice Artistique',
                emoji: '🎨',
              },
              {
                name: 'L\'équipe',
                role: 'Artisans Passionnés',
                emoji: '💪',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center"
              >
                <div className="w-24 h-24 bg-rose-poudre rounded-full flex items-center justify-center mx-auto mb-4 text-5xl">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-semibold text-brun">
                  {member.name}
                </h3>
                <p className="text-sm text-brun-clair">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
