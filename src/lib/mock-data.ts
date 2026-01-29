import { Product, Category } from '@/types';

// Données de démonstration - seront remplacées par Sanity
export const mockCategories: Category[] = [
  {
    _id: '1',
    name: 'Gâteaux Signatures',
    slug: 'signatures',
    description: 'Nos créations exclusives',
  },
  {
    _id: '2',
    name: 'Anniversaires',
    slug: 'anniversaires',
    description: 'Pour célébrer vos moments spéciaux',
  },
  {
    _id: '3',
    name: 'Tartes & Entremets',
    slug: 'tartes-entremets',
    description: 'Classiques revisités',
  },
  {
    _id: '4',
    name: 'Mignardises',
    slug: 'mignardises',
    description: 'Petites douceurs à partager',
  },
  {
    _id: '5',
    name: 'Collector',
    slug: 'collector',
    description: 'Éditions limitées par Gaby the Artist',
  },
];

export const mockProducts: Product[] = [
  {
    _id: '1',
    name: 'Le Chouchou',
    slug: 'le-chouchou',
    description:
      'Notre création signature : un chou craquelin garni de crème légère à la vanille de Madagascar, cœur coulant au caramel beurre salé.',
    price: 8.5,
    image: {
      _type: 'image',
      asset: { _ref: '', _type: 'reference' },
      alt: 'Le Chouchou',
    },
    category: mockCategories[0],
    isNew: true,
    servings: '1 personne',
    available: true,
  },
  {
    _id: '2',
    name: 'Paris-Brest Revisité',
    slug: 'paris-brest-revisite',
    description:
      'La pâte à choux traditionnelle rencontre une onctueuse crème pralinée aux noisettes du Piémont.',
    price: 42,
    image: {
      _type: 'image',
      asset: { _ref: '', _type: 'reference' },
      alt: 'Paris-Brest',
    },
    category: mockCategories[0],
    servings: '6-8 personnes',
    available: true,
  },
  {
    _id: '3',
    name: 'Number Cake Personnalisé',
    slug: 'number-cake',
    description:
      'Gâteau en forme de chiffre ou lettre, garni de crème et décoré de fruits frais, macarons et fleurs comestibles.',
    price: 55,
    image: {
      _type: 'image',
      asset: { _ref: '', _type: 'reference' },
      alt: 'Number Cake',
    },
    category: mockCategories[1],
    servings: '10-12 personnes',
    available: true,
  },
  {
    _id: '4',
    name: 'Tarte Citron Meringuée',
    slug: 'tarte-citron-meringuee',
    description:
      'Pâte sablée croustillante, crème citron acidulée et meringue italienne légèrement torchée.',
    price: 38,
    image: {
      _type: 'image',
      asset: { _ref: '', _type: 'reference' },
      alt: 'Tarte Citron',
    },
    category: mockCategories[2],
    servings: '6-8 personnes',
    available: true,
  },
  {
    _id: '5',
    name: 'Fraisier',
    slug: 'fraisier',
    description:
      'Génoise moelleuse, crème mousseline à la vanille et fraises fraîches de saison.',
    price: 45,
    image: {
      _type: 'image',
      asset: { _ref: '', _type: 'reference' },
      alt: 'Fraisier',
    },
    category: mockCategories[2],
    isNew: true,
    servings: '6-8 personnes',
    available: true,
  },
  {
    _id: '6',
    name: 'Coffret Mignardises',
    slug: 'coffret-mignardises',
    description:
      'Assortiment de 16 mignardises : mini éclairs, tartelettes, choux et financiers.',
    price: 35,
    image: {
      _type: 'image',
      asset: { _ref: '', _type: 'reference' },
      alt: 'Coffret Mignardises',
    },
    category: mockCategories[3],
    servings: '8-10 personnes',
    available: true,
  },
  {
    _id: '7',
    name: 'Box Collector "Rêves Sucrés"',
    slug: 'box-collector-reves-sucres',
    description:
      'Édition limitée dans une boîte illustrée par Gaby the Artist. Contient nos 4 créations signatures.',
    price: 65,
    image: {
      _type: 'image',
      asset: { _ref: '', _type: 'reference' },
      alt: 'Box Collector',
    },
    category: mockCategories[4],
    isCollector: true,
    servings: '4-6 personnes',
    available: true,
  },
  {
    _id: '8',
    name: 'Éclair au Chocolat',
    slug: 'eclair-chocolat',
    description:
      'Pâte à choux dorée, crème pâtissière au chocolat noir 70% et glaçage miroir.',
    price: 6.5,
    image: {
      _type: 'image',
      asset: { _ref: '', _type: 'reference' },
      alt: 'Éclair au Chocolat',
    },
    category: mockCategories[0],
    servings: '1 personne',
    available: true,
  },
];
