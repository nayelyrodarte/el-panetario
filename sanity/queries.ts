// Params should be passed via URL query params, for more info: https://www.sanity.io/docs/groq-parameters

export const getAllRecipes = `
*[_type == "recipe"]{
 title,
 _id,
 description,
 mainImage,
 slug
}
`;

export const getAllCategories = `
*[_type == "category"]{
 title,
 _id,
}
`;

export const getRecipeByCategoryId = `
*[_type == "category" && $categoryId == _id]{
 title,
 'recipes': *[_type == "recipe" && references(^._id)]{ title, mainImage, slug }
}
`;

export const getHomeData = `
{'featured': *[_type == "category" && title == 'Featured']{
 title,
 'recipes': *[_type == "recipe" && references(^._id)]{ title, mainImage, slug }[0..3]
},
'categories': *[_type == "category" && title != 'Featured']{
 title,
 _id,
 'image': image.asset->url,
},
}
`;
