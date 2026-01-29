import { groq } from 'next-sanity';

// Récupérer toutes les catégories
export const categoriesQuery = groq`
  *[_type == "category"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    image
  }
`;

// Récupérer tous les produits
export const productsQuery = groq`
  *[_type == "product" && available == true] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    image,
    images,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    servings,
    weight,
    allergens,
    tags,
    isNew,
    isCollector,
    available,
    featured
  }
`;

// Récupérer les produits mis en avant
export const featuredProductsQuery = groq`
  *[_type == "product" && available == true && featured == true] | order(_createdAt desc) [0...8] {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    image,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    servings,
    isNew,
    isCollector,
    available
  }
`;

// Récupérer les produits par catégorie
export const productsByCategoryQuery = groq`
  *[_type == "product" && available == true && category->slug.current == $category] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    image,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    servings,
    isNew,
    isCollector,
    available
  }
`;

// Récupérer un produit par son slug
export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    image,
    images,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    servings,
    weight,
    allergens,
    tags,
    isNew,
    isCollector,
    available
  }
`;

// Récupérer les produits collector
export const collectorProductsQuery = groq`
  *[_type == "product" && available == true && isCollector == true] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    image,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    servings,
    isNew,
    isCollector,
    available
  }
`;

// Récupérer les produits liés (même catégorie)
export const relatedProductsQuery = groq`
  *[_type == "product" && available == true && category._ref == $categoryId && _id != $productId] | order(_createdAt desc) [0...4] {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    image,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    servings,
    isNew,
    isCollector,
    available
  }
`;
