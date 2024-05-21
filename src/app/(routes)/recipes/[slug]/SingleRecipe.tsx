import { Header } from '@/_components/Header';
import { client } from '@/app/_api/client';

import { getRecipeBySlug } from '../../../../../sanity/queries';

export async function SingleRecipe(props: any) {
  const { title, description, ingredients, method } = props;
  return (
    <main>
      <Header>
        <h2>{title}</h2>
        <p>{description}</p>
      </Header>
      {ingredients?.map((i: string) => (
        <p key={i}>{i}</p>
      ))}
    </main>
  );
}
