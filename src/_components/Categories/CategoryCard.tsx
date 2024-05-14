import Image from 'next/image';
import styled from 'styled-components';

const Card = styled.div``;

export default function CategoryCard({ category }: any) {
  const { title, image } = category;
  return (
    <div>
      {image && (
        <Image color="red" src={image} alt={title} width={60} height={60} />
      )}
      <h3>{title}</h3>
    </div>
  );
}
