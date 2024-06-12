// Params should be passed via URL query params or by the client.fetch function,
// for more info: https://www.sanity.io/docs/groq-parameters

// LAYOUT

export const getHomeData = `
{'featured': *[_type == "category" && title == 'Featured']{
 title,
 'recipes': *[_type == "recipe" && references(^._id)]{ title, mainImage, slug }[0..3]
},
'categories': *[_type == "category" && title != 'Featured']{
 title,
 _id,
 'imageUrl': image.asset->url,
},
}
`;

// RECIPES

export const getAllRecipes = `
*[_type == "recipe"]{
 title,
 _id,
 description,
 mainImage,
 'imageUrl': mainImage.asset->url,
 slug
}
`;

//TODO: Add related recipes (in same category)
export const getRecipeBySlug = `
*[_type == "recipe" && slug.current == $slug]{
   title,
   description,
   mainImage,
   'imageUrl': mainImage.asset->url,
   ingredients,
   method,
 }[0]
`;

// CATEGORIES

export const getAllCategories = `
*[_type == "category"]{
 title,
 _id,
 'imageUrl': mainImage.asset->url,
}
`;

export const getRecipeByCategoryId = `
*[_type == "category" && $categoryId == _id]{
 title,
 'recipes': *[_type == "recipe" && references(^._id)]{ title,
  _id,
  description,
  mainImage,
  'imageUrl': mainImage.asset->url,
  slug }
}
`;
