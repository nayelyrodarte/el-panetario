import { RecipeContainer } from '@/_components/Recipes/RecipeContainer';
import { client } from '@/app/_api/client';

import { getAllRecipes } from '../../../../sanity/queries';

export default async function Recipes() {
  const recipes = await client.fetch(getAllRecipes);

  if (!recipes) {
    return null;
  }

  return <RecipeContainer recipes={recipes} />;
}
