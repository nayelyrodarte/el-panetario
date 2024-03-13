import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import ProfilePhoto from '../../_assets/img/NR2024-4_50.jpg';

const Wrapper = styled.section`
  max-width: var(--max-width);
  margin: var(--spacing-lg) var(--spacing-md);

  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 48em) {
    flex-direction: row;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 1000px;

  object-fit: cover;

  width: 350px;
  height: 350px;
`;

const Title = styled.h2`
  color: var(--primary-color);
  margin: var(--spacing-xs) 0;
`;

const Text = styled.article`
  max-width: 50ch;
`;

export function Intro() {
  return (
    <Wrapper>
      <StyledImage src={ProfilePhoto} alt="Foto de perfil" />
      <Text>
        <Title>¡Hola! Soy Becky,</Title>
        <p>
          Aqui va la descripción acerca de ti. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo ipsum dolor
          sit amet, consectetur adipiscing elit, sed do esmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          Puedes seguirme en Instagram, YouTube y Tiktok.
        </p>
      </Text>
    </Wrapper>
  );
}
