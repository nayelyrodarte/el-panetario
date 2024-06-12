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

  height: 10rem;
`;

export function Header({ children }: { children: ReactNode }) {
  return (
    <>
      <StyledHeader>{children}</StyledHeader>
      <Wave />
    </>
  );
}
