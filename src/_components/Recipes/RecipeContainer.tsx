'use client';

import styled from 'styled-components';

import { Recipe } from '../../../sanity.types';
import RecipeCard from './RecipeCard';

const StyledRecipeContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  align-items: center;
  justify-items: center;
  justify-content: center;

  max-width: calc(var(--max-width) - 25rem);

  margin: auto;
  padding: calc(var(--spacing-lg) * 2) 0;
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
