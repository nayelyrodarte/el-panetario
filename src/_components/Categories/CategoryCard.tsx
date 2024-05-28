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
  grid-template-columns: 3rem 1fr;
  padding: var(--spacing-md);
  justify-items: start;
  gap: 0.25rem;

  min-width: 20dvh;
  height: 5rem;

  background: var(--secondary-color-soft);
  color: var(--primary-color-contrast);
  border-radius: var(--border-radius);

  img,
  svg {
    width: 2rem;
    height: 2rem;
  }

  @media only screen and (min-width: 48em) {
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

    img,
    svg {
      width: 3rem;
      height: 3rem;
    }
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
