'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

import { Header } from '@/_components/Header';
import { components } from '@/utils/portableTextUtils';

import { Recipe } from '../../../../../sanity.types';

const StyledHeader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: calc(var(--max-width) - 40rem);

  gap: var(--spacing-sm);
  padding: var(--spacing-md) 0;

  img {
    border-radius: var(--border-radius);
    width: 100%;
    height: 100%;
  }

  section {
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    gap: var(--spacing-sm);
    align-items: center;
    justify-items: center;

    padding: 0 var(--spacing-md);

    box-sizing: border-box;

    @media only screen and (min-width: 45em) {
      grid-template-columns: repeat(2, 50%);
      justify-items: start;
      gap: var(--spacing-sm);
    }
  }

  p,
  h1 {
    max-width: 70ch;
  }

  @media only screen and (min-width: 45em) {
    height: 20rem;
  }
`;

export function SingleRecipe(props: Recipe) {
  const { title, description, ingredients = [], method, imageUrl } = props;
  const [measurement, setMeasurement] = useState<'grams' | 'cups'>('grams');
  const [portion, setPortion] = useState(1);

  const translate = {
    grams: 'gramos',
    cups: 'taza',
  };

  return (
    <main>
      <Header>
        <StyledHeader>
          <h2>{title}</h2>
          <section>
            {imageUrl && (
              <Image src={imageUrl} alt={title} width={150} height={150} />
            )}
            <p>{description}</p>
          </section>
        </StyledHeader>
      </Header>
      <section>
        {ingredients &&
          ingredients?.map((i) =>
            i.ingredients?.map((e) => (
              <div
                key={`${e.name}-${title}`}
              >{`${e[measurement]} ${translate[measurement]} de ${e.name}`}</div>
            ))
          )}
      </section>
      <PortableText value={method} components={components} />
    </main>
  );
}
