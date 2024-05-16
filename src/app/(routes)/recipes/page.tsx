import Wave from '@/_assets/svg/wave.svg';
import { Header } from '@/_components/Header';
import { RecipeContainer } from '@/_components/Recipes/RecipeContainer';
import { client } from '@/app/_api/client';

import { getAllRecipes } from '../../../../sanity/queries';

export default async function Recipes() {
  const recipes = await client.fetch(getAllRecipes);

  if (!recipes) {
    return null;
  }

  return (
    <>
      <Header>
        <h1>Todas las recetas</h1>
      </Header>
      <RecipeContainer recipes={recipes} />
    </>
  );
}
