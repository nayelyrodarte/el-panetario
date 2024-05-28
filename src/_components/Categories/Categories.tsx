'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import Wave from '@/_assets/svg/wave_yellow.svg';
import { Button } from '@/_components/Button';

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

// TODO: types
export function Categories({ categories }: any) {
  return (
    <Wrapper>
      <Wave />
      <Inner>
        <h2>Explora por categoria</h2>
        <CategoriesContainer>
          {categories?.map((category: any) => (
            <CategoryCard key={category} category={category} />
          ))}
        </CategoriesContainer>
      </Inner>
      <Wave />
    </Wrapper>
  );
}
