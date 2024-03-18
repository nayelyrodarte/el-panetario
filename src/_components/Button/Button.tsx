import React from 'react';
import styled from 'styled-components';

export function Button({ text, onClick }: { text: string; onClick: Function }) {
  const Button = styled.button`
    background-color: var(--secondary-color);
    color: var(--main-text-color);
    font-weight: 600;

    border-radius: 100px;
    border: none;

    padding: var(--spacing-sm) var(--spacing-md);
  `;

  return <Button onClick={() => onClick}>{text}</Button>;
}
