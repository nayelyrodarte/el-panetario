import RecipeCard from '@/_components/RecipeCard/RecipeCard';
import { client } from '@/app/_api/client';

import { getAllRecipes } from '../../../../sanity/queries';

export default async function Recipes() {
  const recipes = await client.fetch(getAllRecipes);

  if (!recipes) {
    return null;
  }

  return (
    <section>
      {/* TODO; types */}
      {recipes?.map((r: any) => (
        <RecipeCard key={r._id} {...r} />
      ))}
    </section>
  );
}
