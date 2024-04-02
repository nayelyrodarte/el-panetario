import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';
import Pay from './../../_assets/img/Pay.jpeg';
import Wave from './../../_assets/svg/wave_yellow.svg';

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
  top: -0.25rem;
  rotate: -5deg;

  display: flex;
  justify-content: center;

  margin: auto;
  padding: var(--spacing-sm);

  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: 40em) {
    padding: var(--spacing-xs) calc(var(--spacing-lg) * 2);
    rotate: -2.5deg;
    width: fit-content;
    top: -2.5rem;
    white-space: nowrap;
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
    margin-top: 2rem;

    object-fit: cover;
    border-radius: var(--border-radius);

    @media only screen and (min-width: 48em) {
      margin-top: 0;
      width: 340px;
    }
  }

  @media only screen and (min-width: 48em) {
    flex-direction: row;
  }
`;

const RecipeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export function FeaturedRecipe() {
  return (
    <Wrapper>
      <Wave />
      <Inner>
        <RecipeContainer>
          <TitleContainer>
            <h2>Receta destacada</h2>
          </TitleContainer>
          <RecipeInner>
            <Image src={Pay} alt={'Pay'} />
            <RecipeText>
              <Text>
                <h3>Pay de Queso</h3>
                <p>
                  Descripcion corta de la receta. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip e
                </p>
              </Text>
              <Button
                iconName="arrow-right"
                onClick={() => {}}
                text="Ir a la receta"
              />
            </RecipeText>
          </RecipeInner>
        </RecipeContainer>
      </Inner>
      <Wave />
    </Wrapper>
  );
}
