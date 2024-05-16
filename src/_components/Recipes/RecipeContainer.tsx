import styled from 'styled-components';

import RecipeCard from './RecipeCard';

export function RecipeContainer({ recipes }: any) {
  return (
    <section>
      {recipes?.map((r: any) => (
        <RecipeCard key={r._id} {...r} />
      ))}
    </section>
  );
}
