'use client';

import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

import Wave from '@/_assets/svg/wave.svg';

const StyledHeader = styled.header`
  background-color: var(--primary-color);
  color: var(--neutral-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 45em) {
    max-height: 40vh;
  }
`;

export function Header({
  children,
  style,
}: {
  children: ReactNode;
  style?: any;
}) {
  return (
    <>
      <StyledHeader style={style}>{children}</StyledHeader>
      <Wave />
    </>
  );
}
