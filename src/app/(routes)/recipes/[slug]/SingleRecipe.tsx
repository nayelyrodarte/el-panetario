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

  gap: var(--spacing-lg);
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

    padding: 0 var(--spacing-lg);

    box-sizing: border-box;

    @media only screen and (min-width: 45em) {
      grid-template-columns: repeat(2, 50%);
      justify-items: start;
      gap: var(--spacing-md);
    }
  }

  p,
  h1 {
    max-width: 60ch;
  }

  @media only screen and (min-width: 45em) {
    height: 20rem;
  }
`;

const StyledContent = styled.section`
  display: grid;
  grid-template-columns: 100%;
  max-width: calc(var(--max-width) - 30rem);
  margin: var(--spacing-lg) auto;

  padding: var(--spacing-lg) var(--spacing-md);
  gap: var(--spacing-lg);

  @media only screen and (min-width: 45em) {
    grid-template-columns: 30% 1fr;
  }
`;

const StyledMethod = styled.section`
  max-width: 80ch;
`;

const StyledIngredients = styled.section`
  border: dashed 3px var(--accent-color);
  background: var(--accent-color-dimmed);
  border-radius: 8px;

  height: fit-content;
  min-height: 8rem;

  position: relative;

  .ingredients__content {
    padding: var(--spacing-md);
    padding-top: var(--spacing-2xl);
  }

  .ingredients__title {
    background: var(--accent-color);
    color: var(--white-text-color);

    position: absolute;
    top: -1rem;
    left: var(--spacing-md);
    right: 0;

    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: 8px;

    width: fit-content;

    @media only screen and (min-width: 45em) {
      margin: auto;
      left: 0;
    }
  }

  @media only screen and (min-width: 45em) {
    position: sticky;
    min-height: 50%;
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

  // TODO: Breadcrumbs: Recetas > Categoria
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
      <StyledContent>
        <StyledIngredients>
          <div className="ingredients__title">
            <h3>Ingredientes</h3>
          </div>
          <div className="ingredients__content">
            {ingredients &&
              ingredients?.map((i) =>
                i.ingredients?.map((e) => (
                  <div
                    key={`${e.name}-${title}`}
                  >{`${e[measurement]} ${translate[measurement]} de ${e.name}`}</div>
                ))
              )}
          </div>
        </StyledIngredients>
        <StyledMethod>
          <PortableText value={method} components={components} />
        </StyledMethod>
      </StyledContent>
    </main>
  );
}
