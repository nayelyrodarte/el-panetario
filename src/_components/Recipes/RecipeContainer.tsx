'use client';

import styled from 'styled-components';

import RecipeCard from './RecipeCard';

const StyledRecipeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 20%);
  align-items: center;
  justify-items: center;
  justify-content: center;

  max-width: var(--max-width);

  margin: auto;
  padding: calc(var(--spacing-lg) * 2) 0;
`;

// TODO: types
export function RecipeContainer({ recipes }: any) {
  return (
    <StyledRecipeContainer>
      {recipes?.map((r: any) => (
        <RecipeCard key={r._id} {...r} />
      ))}
    </StyledRecipeContainer>
  );
}
