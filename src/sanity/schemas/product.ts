import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Produit',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom du produit',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Prix (€)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images supplémentaires',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'servings',
      title: 'Nombre de parts',
      type: 'string',
      description: 'Ex: "6-8 personnes"',
    }),
    defineField({
      name: 'weight',
      title: 'Poids',
      type: 'string',
      description: 'Ex: "800g"',
    }),
    defineField({
      name: 'allergens',
      title: 'Allergènes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Gluten', value: 'gluten' },
          { title: 'Lait', value: 'lait' },
          { title: 'Œufs', value: 'oeufs' },
          { title: 'Fruits à coque', value: 'fruits-a-coque' },
          { title: 'Arachides', value: 'arachides' },
          { title: 'Soja', value: 'soja' },
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Sans gluten', value: 'sans-gluten' },
          { title: 'Sans lactose', value: 'sans-lactose' },
          { title: 'Vegan', value: 'vegan' },
          { title: 'Best-seller', value: 'best-seller' },
        ],
      },
    }),
    defineField({
      name: 'isNew',
      title: 'Nouveau produit',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isCollector',
      title: 'Édition Collector (Gaby the Artist)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'available',
      title: 'Disponible',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Mettre en avant (page d\'accueil)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `${subtitle} €` : '',
        media,
      };
    },
  },
});
