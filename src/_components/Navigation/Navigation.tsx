'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import { Croissant } from '@/_assets/svg/Croissant';
import CroissantBeige from '@/_assets/svg/croissant_beige.svg';

const StyledNav = styled.nav`
  background-color: var(--primary-color);
  color: var(--neutral-color);
`;

const NavInner = styled.div<{ $isHome: boolean }>`
  max-width: var(--max-width);
  height: 3.5rem;

  margin: auto;
  padding: var(--padding);

  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.$isHome ? 'flex-end' : 'space-between')};
`;

const NavSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  font-family: var(--primary-font);

  svg {
    width: 2.5rem;
  }
`;

const NavList = styled.ul`
  font-family: var(--primary-font);

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
`;

const NavElement = styled.li<{ $isSelected: boolean }>`
  color: ${(props) => (props.$isSelected ? 'var(--secondary-color)' : 'none')};

  a {
    font-weight: ${(props) => (props.$isSelected ? '600' : 'normal')};
  }
`;

const isLinkActive = (currentPath: string, givenPath: string) => {
  return currentPath === givenPath;
};

export function Navigation() {
  const path = usePathname();

  return (
    <StyledNav>
      <NavInner $isHome={path === '/'}>
        {path !== '/' && (
          <NavSection>
            <Croissant height="2rem" />
            <h3>El Panetario</h3>
          </NavSection>
        )}
        <NavSection>
          <NavList>
            <NavElement $isSelected={isLinkActive(path, '/')}>
              <Link href="/">Inicio</Link>
            </NavElement>
            <NavElement $isSelected={isLinkActive(path, '/recipes')}>
              <Link href="/recipes">Recetas</Link>
            </NavElement>
          </NavList>
        </NavSection>
      </NavInner>
    </StyledNav>
  );
}
