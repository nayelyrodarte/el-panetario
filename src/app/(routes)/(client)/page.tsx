'use client';

import Image from 'next/image';
import styled from 'styled-components';

import Wave from '@/_assets/svg/wave.svg';

const Wrapper = styled.main`
  height: 90dvh;
`;

const Header = styled.section`
  background-color: var(--primary-color);

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 10rem;

  h1,
  h2,
  h3 {
    color: var(--neutral-color);

    margin: 0 auto;

    z-index: 2;
  }
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
    </Wrapper>
  );
}
