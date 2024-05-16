'use client';

import Image from 'next/image';
import styled from 'styled-components';

const RecipeCardStyled = styled.article`
  display: flex;
  gap: var(--spacing-md);

  img {
    border-radius: var(--border-radius);
  }

  p {
    font-weight: bold;
  }
`;

//TODO; types
export default function RecipeCard(props: any) {
  const { title, mainImage, imageUrl, slug, description } = props;
  console.log(props);

  if (!props) {
    return null;
  }

  return (
    <RecipeCardStyled>
      {mainImage && (
        <Image
          width={200}
          height={200}
          src={imageUrl}
          alt={mainImage?.asset?.alt || title}
          objectFit="cover"
        />
      )}
      <p>{title}</p>
    </RecipeCardStyled>
  );
}
