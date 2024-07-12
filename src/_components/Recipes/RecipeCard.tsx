'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Recipe } from '../../../sanity.types';
// TODO: Replace for real placeholder image
import Pay from '../../_assets/img/Pay.jpeg';

const RecipeCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);

  border-radius: var(--border-radius);

  padding: 0.5rem;
  width: 15rem;
  min-height: 15rem;

  img {
    border-radius: var(--border-radius);
    object-fit: cover;
  }

  p {
    font-weight: bold;
  }

  &:hover,
  &:focus-within {
    background: var(--secondary-color-soft);
    box-shadow: 0 0 0.25rem var(--secondary-color);
  }

  @media only screen and (min-width: 45em) {
    min-height: 18rem;
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
        <Image
          width={220}
          height={200}
          src={imageUrl ? imageUrl : Pay}
          alt={mainImage?.alt ?? title}
        />
        <p>{title}</p>
      </RecipeCardStyled>
    </StyledLink>
  );
}
