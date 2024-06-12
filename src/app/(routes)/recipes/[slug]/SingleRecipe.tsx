'use client';

import { PortableText } from '@portabletext/react';
import { useState } from 'react';

import { Header } from '@/_components/Header';
import { components } from '@/utils/portableTextUtils';

export function SingleRecipe(props: any) {
  const { title, description, ingredients, method } = props;
  const [measurement, setMeasurement] = useState('grams');
  const [portion, setPortion] = useState(1);

  return (
    <main>
      <Header>
        <h2>{title}</h2>
        <p>{description}</p>
      </Header>
      <section>
        {ingredients &&
          ingredients?.map((i: any) =>
            i.ingredients?.map((e: any) => (
              <div key={`${e.name}-${title}`}>{`${e.grams} de ${e.name}`}</div>
            ))
          )}
      </section>
      <PortableText value={method} components={components} />
    </main>
  );
}
