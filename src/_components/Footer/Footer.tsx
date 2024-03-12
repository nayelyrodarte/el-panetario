'use client';

import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--primary-color);
  color: var(--neutral-color);

  width: 100%;
  min-height: 5rem;

  padding: var(--padding);

  section {
    max-width: var(--max-width);
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <section>
        <div>
          <h2>El Panetario</h2>
          <p>© 2024. Todos los derechos reservados.</p>
        </div>
      </section>
    </StyledFooter>
  );
}
