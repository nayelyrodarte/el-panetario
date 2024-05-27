import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
interface CategoryCard {
  category: {
    title: string;
    image: string;
    _id: string;
  };
}

const Card = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: center;
  align-items: center;
  gap: 0.6rem;

  padding: var(--spacing-md);
  min-width: 100%;

  background: var(--secondary-color-soft);
  color: var(--primary-color-contrast);
  border-radius: var(--border-radius);

  @media only screen and (min-width: 48em) {
    grid-template-columns: 1fr;
    min-width: 12rem;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default function CategoryCard({ category }: CategoryCard) {
  const { title, image, _id } = category;
  return (
    // TODO: Add routing when single recipe page is ready
    <StyledLink href={`recipes?category=${_id}`}>
      <Card>
        {image && (
          <Image color="red" src={image} alt={title} width={60} height={60} />
        )}
        <h3>{title}</h3>
      </Card>
    </StyledLink>
  );
}
