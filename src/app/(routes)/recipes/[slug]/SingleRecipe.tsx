'use client';

import { PortableText } from '@portabletext/react';
import { useState } from 'react';

import { Header } from '@/_components/Header';
import { components } from '@/utils/portableTextUtils';

import { Recipe } from '../../../../../sanity.types';

export function SingleRecipe(props: Recipe) {
  const { title, description, ingredients = [], method } = props;
  const [measurement, setMeasurement] = useState<'grams' | 'cups'>('grams');
  const [portion, setPortion] = useState(1);

  const translate = {
    grams: 'gramos',
    cups: 'taza',
  };

  return (
    <main>
      <Header>
        <h2>{title}</h2>
        <p>{description}</p>
      </Header>
      <section>
        {ingredients &&
          ingredients?.map((i) =>
            i.ingredients?.map((e) => (
              <div
                key={`${e.name}-${title}`}
              >{`${e[measurement]} ${translate[measurement]} de ${e.name}`}</div>
            ))
          )}
      </section>
      <PortableText value={method} components={components} />
    </main>
  );
}
