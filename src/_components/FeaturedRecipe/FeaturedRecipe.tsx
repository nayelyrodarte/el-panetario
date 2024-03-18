import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import Pay from './../../_assets/img/Pay.jpeg';
import Wave from './../../_assets/svg/wave_yellow.svg';

const Wrapper = styled.section`
  width: 100%;
`;

const Inner = styled.div`
  background-color: var(--secondary-color);

  display: flex;
  align-content: center;
  justify-content: center;

  padding: var(--spacing-md);
`;

const RecipeContainer = styled.div`
  background-color: var(--background-color);
  height: fit-content;

  position: relative;
  padding: var(--spacing-md);

  border-radius: var(--border-radius);

  @media only screen and (min-width: 48em) {
    padding: calc(var(--spacing-lg) * 2) var(--spacing-lg);
  }
`;

const TitleContainer = styled.div`
  background-color: var(--accent-color);
  color: var(--white-text-color);
  border-radius: var(--border-radius);

  position: absolute;
  left: 0;
  right: 0;
  top: -2rem;
  rotate: 0deg;

  margin: auto;
  padding: var(--spacing-xs) calc(var(--spacing-lg) * 2);
  white-space: nowrap;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);

  width: fit-content;

  @media only screen and (min-width: 40em) {
    rotate: -2.5deg;
  }
`;

const Text = styled.article`
  max-width: 45ch;

  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const RecipeInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);

  img {
    width: 100%;
    height: 260px;

    object-fit: cover;
    border-radius: var(--border-radius);

    @media only screen and (min-width: 48em) {
      width: 340px;
    }
  }

  @media only screen and (min-width: 48em) {
    flex-direction: row;
  }
`;

export function FeaturedRecipe() {
  return (
    <Wrapper>
      <Image
        src={Wave}
        alt=""
        style={{
          rotate: '-180deg',
          height: 'fit-content',
          marginBottom: '-1px',
        }}
      />
      <Inner>
        <RecipeContainer>
          <TitleContainer>
            <h2>Receta destacada</h2>
          </TitleContainer>
          <RecipeInner>
            <Image src={Pay} alt={'Pay'} />
            <Text>
              <h3>Pay de Queso</h3>
              <p>
                Descripcion corta de la receta. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip e
              </p>
            </Text>
          </RecipeInner>
        </RecipeContainer>
      </Inner>
      <Image
        src={Wave}
        alt=""
        style={{
          rotate: '360deg',
          height: 'fit-content',
        }}
      />
    </Wrapper>
  );
}
