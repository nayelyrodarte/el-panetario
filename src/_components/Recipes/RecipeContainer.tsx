'use client';

import styled from 'styled-components';

import { Recipe } from '../../../sanity.types';
import RecipeCard from './RecipeCard';

const StyledRecipeContainer = styled.section`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: var(--spacing-sm);

  max-width: calc(var(--max-width) - 25rem);
  padding: var(--spacing-lg) 0;

  margin: auto;

  @media only screen and (min-width: 45em) {
    padding: calc(var(--spacing-lg) * 2) 0;
    gap: var(--spacing-md);
  }
`;

const Wrapper = styled.main`
  min-height: 50dvh;
`;

export function RecipeContainer({ recipes }: { recipes: Recipe[] }) {
  return (
    <Wrapper>
      <StyledRecipeContainer>
        {recipes?.map((r) => (
          <RecipeCard key={r._id} {...r} />
        ))}
      </StyledRecipeContainer>
    </Wrapper>
  );
}
