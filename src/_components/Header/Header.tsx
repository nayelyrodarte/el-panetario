import React from 'react';
import styled from 'styled-components';

import Wave from '@/_assets/svg/wave.svg';

const StyledHeader = styled.header`
  background-color: var(--primary-color);
  color: var(--neutral-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 10rem;
`;

export function Header() {
  return (
    <>
      <StyledHeader>
        <h1>El Panetario</h1>
        <h3>Un Universo de Pan</h3>
      </StyledHeader>
      <Wave />
    </>
  );
}
