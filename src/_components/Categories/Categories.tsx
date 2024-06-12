'use client';

import React from 'react';
import styled from 'styled-components';

import Wave from '@/_assets/svg/wave_yellow.svg';

import { Category } from '../../../sanity.types';
import CategoryCard from './CategoryCard';

const Wrapper = styled.section`
  width: 100%;

  > svg:first-child {
    rotate: -180deg;
    margin-bottom: -1px;
  }
`;

const Inner = styled.div`
  background-color: var(--secondary-color);
  color: var(--primary-color-contrast);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: calc(var(--spacing-lg) * 2) var(--spacing-lg);
  gap: var(--spacing-lg);

  text-align: center;

  @media only screen and (min-width: 48em) {
    padding: var(--spacing-lg);
  }
`;

const CategoriesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-md);

  @media only screen and (min-width: 48em) {
    flex-direction: row;
  }
`;

export function Categories({ categories }: { categories: Category[] }) {
  return (
    <Wrapper>
      <Wave />
      <Inner>
        <h2>Explora por categoria</h2>
        <CategoriesContainer>
          {categories?.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </CategoriesContainer>
      </Inner>
      <Wave />
    </Wrapper>
  );
}
