import { Header } from '@/_components/Header';
import { RecipeContainer } from '@/_components/Recipes/RecipeContainer';
import { client } from '@/app/_api/client';

import { Recipe } from '../../../../sanity.types';
import {
  getAllRecipes,
  getRecipeByCategoryId,
} from '../../../../sanity/queries';

type Params = {
  searchParams: {
    category: string;
  };
};

export default async function Recipes({ searchParams }: Params) {
  let recipes: Recipe[] = [];
  let title: string | null = null;

  if (searchParams?.category) {
    const data = await client.fetch(getRecipeByCategoryId, {
      categoryId: searchParams.category,
    });
    recipes = data[0].recipes;
    title = data[0].title;
  } else {
    recipes = await client.fetch(getAllRecipes);
  }

  if (!recipes) {
    return null;
  }

  return (
    <>
      <Header>
        <h1>{title ?? 'Todas las recetas'}</h1>
      </Header>
      <RecipeContainer recipes={recipes} />
    </>
  );
}
