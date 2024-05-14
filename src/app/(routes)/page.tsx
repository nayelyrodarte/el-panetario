import React from 'react';

import { Categories } from '@/_components/Categories';
import { Header } from '@/_components/Header';
import { Intro } from '@/_components/Intro/Intro';

import { getHomeData } from '../../../sanity/queries';
import { client } from '../_api/client';

export default async function Home() {
  const data = await client.fetch(getHomeData);
  console.log(data);

  if (!data) {
    return null;
  }

  return (
    <>
      <Header />
      <Categories categories={data?.categories} />
      <Intro />
    </>
  );
}
