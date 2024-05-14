import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
interface CategoryCard {
  category: {
    title: string;
    image: string;
  };
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;

  padding: var(--spacing-md);
  width: 10.5rem;

  background: var(--secondary-color-soft);
  color: var(--primary-color-contrast);
  border-radius: var(--border-radius);
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default function CategoryCard({ category }: CategoryCard) {
  const { title, image } = category;
  return (
    // TODO: Add routing when single recipe page is ready
    <StyledLink href="/">
      <Card>
        {image && (
          <Image color="red" src={image} alt={title} width={60} height={60} />
        )}
        <h3>{title}</h3>
      </Card>
    </StyledLink>
  );
}
