'use client';

import React from 'react';
import styled from 'styled-components';

import { FeaturedRecipe } from '@/_components/FeaturedRecipe/FeaturedRecipe';
import Header from '@/_components/Header/Header';
import { Intro } from '@/_components/Intro/Intro';

const Wrapper = styled.main`
  min-height: 90dvh;
  background-color: var(--background-color);
`;

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Intro />
      <FeaturedRecipe />
    </Wrapper>
  );
}
