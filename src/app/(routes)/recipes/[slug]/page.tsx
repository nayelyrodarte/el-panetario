'use client';

import { useParams } from 'next/navigation';

export default function Recipe() {
  const params = useParams<{ slug: string }>();
  console.log(params);
  return <div></div>;
}
