'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import Croissant from './../../_assets/svg/croissant_beige.svg';

const StyledHeader = styled.nav`
  background-color: var(--primary-color);
  color: var(--neutral-color);

  padding: var(--padding);
  width: 100%;

  div {
    max-width: var(--max-width);

    margin: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    font-family: var(--primary-font);
  }

  ul {
    font-family: var(--secondary-font);

    display: flex;
    flex-direction: row;
    gap: 1rem;

    list-style-type: none;
    margin: 0;
    padding: 0;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export default function Header() {
  const path = usePathname();
  return (
    <StyledHeader>
      <div className="header__inner">
        <section>
          <Image
            width={40}
            height={40}
            src={Croissant}
            alt="Icono de croissant"
          />
          <h3>El Panetario</h3>
        </section>
        <section>
          <ul>
            <li
              style={{
                textDecoration: `${path === '/' ? 'underline' : 'none'}`,
              }}
            >
              <Link href="/">Inicio</Link>
            </li>
            <li
              style={{
                textDecoration: `${path === '/recipes' ? 'underline' : 'none'}`,
              }}
            >
              <Link href="/recipes">Recetas</Link>
            </li>
          </ul>
        </section>
      </div>
    </StyledHeader>
  );
}
