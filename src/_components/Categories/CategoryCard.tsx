import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Rebanada } from '@/_assets/svg/Rebanada';
interface CategoryCard {
  category: {
    title: string;
    image: string;
    _id: string;
  };
}

const Card = styled.div`
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  padding: var(--spacing-md) var(--spacing-sm);
  justify-items: start;
  align-content: center;
  align-items: center;

  height: 4rem;
  min-width: fit-content;

  background: var(--secondary-color-soft);
  color: var(--primary-color-contrast);
  border-radius: var(--border-radius);

  h3 {
    font-size: 1.12rem;
  }

  img,
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (min-width: 45em) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    flex: 0 1 calc(25% - 5px); /* Adjust the px for your desired gutter (spacing between items) */
    margin: 5px; /* Spacing */
    box-sizing: border-box;

    min-width: 16rem;
    height: 10rem;

    h3 {
      font-size: 1.5rem;
    }

    img,
    svg {
      width: 3rem;
      height: 3rem;
    }
  }

  @media only screen and (max-width: 20em) {
    min-width: 70vw;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default function CategoryCard({ category }: CategoryCard) {
  const { title, image, _id } = category;
  return (
    <StyledLink href={`recipes?category=${_id}`}>
      <Card>
        {image ? (
          <Image color="red" src={image} alt={title} width={50} height={50} />
        ) : (
          <Rebanada />
        )}
        <h3>{title}</h3>
      </Card>
    </StyledLink>
  );
}
