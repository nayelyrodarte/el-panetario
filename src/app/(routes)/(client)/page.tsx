'use client';

import Image from 'next/image';
import styled from 'styled-components';

import Wave from '@/_assets/svg/wave.svg';
import { FeaturedRecipe } from '@/_components/FeaturedRecipe/FeaturedRecipe';
import { Intro } from '@/_components/Intro/Intro';

const Wrapper = styled.main`
  min-height: 90dvh;
  background-color: var(--background-color);
`;

const Header = styled.section`
  background-color: var(--primary-color);
  color: var(--neutral-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 10rem;
`;

const StyledWave = styled(Image)`
  position: relative;
  width: 100%;
  height: auto;
`;

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <h1>El Panetario</h1>
        <h3>Un Universo de Pan</h3>
      </Header>
      <StyledWave src={Wave} alt="" />
      <Intro />
      <FeaturedRecipe />
    </Wrapper>
  );
}
