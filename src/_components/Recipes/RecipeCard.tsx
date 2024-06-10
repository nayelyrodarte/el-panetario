'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Recipe } from '../../../sanity.types';

const RecipeCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  border-radius: var(--border-radius);

  width: 15rem;
  padding: 1rem;

  img {
    border-radius: var(--border-radius);
  }

  p {
    font-weight: bold;
  }

  &:hover,
  &:focus-within {
    background: var(--secondary-color-soft);
    box-shadow: 0 0 0.25rem var(--secondary-color);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function RecipeCard(props: Recipe) {
  const { title, mainImage, imageUrl, slug } = props;

  if (!props) {
    return null;
  }

  return (
    <StyledLink href={`/recipes/${slug?.current}`}>
      <RecipeCardStyled>
        {mainImage && imageUrl && (
          <Image
            width={220}
            height={200}
            src={imageUrl}
            alt={mainImage.alt || title}
          />
        )}
        <p>{title}</p>
      </RecipeCardStyled>
    </StyledLink>
  );
}
