import { client } from '@/app/_api/client';

import { getRecipeBySlug } from '../../../../../sanity/queries';
import { SingleRecipe } from './SingleRecipe';

export default async function Recipe({ params }: { params: { slug: string } }) {
  if (!params) {
    return null;
  }

  const recipe = await client.fetch(getRecipeBySlug, {
    slug: params.slug,
  });

  return <SingleRecipe {...recipe} />;
}
