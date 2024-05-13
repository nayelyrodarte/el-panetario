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

export const getRecipeByCategoryName = `
*[_type == "category" && $title == title]{
 title,
 'recipes': *[_type == "recipe" && references(^._id)]{ title, mainImage, slug }
}
`;
