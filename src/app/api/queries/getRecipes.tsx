import { client } from '../client';

export async function getRecipes() {
  return client.fetch(
    `*[_type == "recipe"]{
     _id,
     title,
     slug,
     description
   }`
  );
}
