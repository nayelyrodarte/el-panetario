import styled from 'styled-components';

//TODO; types
export default function RecipeCard(props: any) {
  const { title, mainImage, slug, description } = props;

  if (!props) {
    return null;
  }

  return (
    <article>
      <p>{title}</p>
    </article>
  );
}
