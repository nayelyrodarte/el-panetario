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

  display: flex;
  align-content: center;
  justify-content: center;

  padding: calc(var(--spacing-lg) * 2) var(--spacing-lg);

  @media only screen and (min-width: 48em) {
    padding: var(--spacing-lg);
  }
`;

// TODO: types
export function Categories({ categories }: any) {
  return (
    <Wrapper>
      <Wave />
      <Inner>
        {categories?.map((category: any) => (
          <CategoryCard key={category} category={category} />
        ))}
      </Inner>
      <Wave />
    </Wrapper>
  );
}
