import React from 'react';

import { Croissant } from '@/_assets/svg/Croissant';
import { Categories } from '@/_components/Categories';
import { Header } from '@/_components/Header';
import { Intro } from '@/_components/Intro/Intro';

import { getHomeData } from '../../../sanity/queries';
import { client } from '../_api/client';

export default async function Home() {
  const data = await client.fetch(getHomeData);

  if (!data) {
    return null;
  }

  return (
    <>
      <Header>
        <Croissant />
        <h1>El Panetario</h1>
        <h2>Un Universo de Pan</h2>
      </Header>
      <Categories categories={data?.categories} />
      <Intro />
    </>
  );
}
